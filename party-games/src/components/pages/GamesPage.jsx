import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../css/GamesPage.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

import ProfileCard from "../atoms/ProfileCard";
import AboutCard from "../atoms/AboutCard";
import ListOfGamesCard from "../atoms/ListOfGamesCard";

function GamesPage() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return (
        <div>
          <p>Initialising User...</p>
        </div>
      );
    }
    if (error) {
      return (
        <div>
          <p>Error: {error}</p>
        </div>
      );
    }
    if (!user) {
      return navigate("/");
    }

    async function fetchData() {
    	try {
			console.log(user?.isAnonymous);
			if (user?.isAnonymous) {
				setName("Guest");
			} else {
				const docRef = doc(db, "Users", user?.uid);
				const docSnap = await getDoc(docRef);
				const data = docSnap.data();
				setName(data.name);
			}
		} catch (err) {
			console.error(err);
			alert("An error occured while fetching user data");
    	}
    }

    fetchData();
  }, [user, loading, error]);

  const games = ["Trivia", "In Progress..", "In Progress.."];

  return (
    <div className="p-5 flex bg-darkGreen space-x-10 h-screen">
      <div className="space-y-7 w-1/3">
        <ProfileCard className="w-28 h-1/5" name={name} user={user} />
        <AboutCard className="w-28 h-4/5" />
      </div>
      <div className="space-y-7 w-2/3">
        <ListOfGamesCard games={games} />
      </div>
    </div>
  );
}
export default GamesPage;
