import React, { useEffect, useState, useCallback } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./css/GamesPage.css";
import { auth, signOut, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

function GamesPage() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();

	const fetchData = useCallback(async () => {
		try {
            const docRef = doc(db, "Users", user?.uid);
            const docSnap = await getDoc(docRef);
            const data = docSnap.data();
			setName(data.name);
		} catch (err) {
			console.error(err);
			alert("An error occured while fetching user data");
		}
	},[user?.uid]);

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
        fetchData();
    }, [user, loading, error, navigate, fetchData]);

    return (
        <div className="dashboard">
            <div className="dashboard__container">
            Logged in as
            <div>{name}</div>
            <div>{user?.email}</div>
            <button className="dashboard__btn" onClick={signOut}>
                Logout
            </button>
            </div>
        </div>
    );
}
export default GamesPage;
