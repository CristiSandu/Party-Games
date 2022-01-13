import React, { useEffect, useState, useCallback } from "react";
import ListOfRooms from "../atoms/ListOfRooms";
import ProfileCard from "../atoms/ProfileCard";
import { useNavigate } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import AddRoomCard from "../atoms/AddRoomCard";
import CreateRoomForm from "../atoms/CreateRoomForm";
import { doc, getDoc } from "firebase/firestore";

import { collection, getDocs } from "firebase/firestore";

import GameImage from "../../assets/game_room.svg";
import AddRoomImage from "../../assets/add_room.svg";

export default function RoomsPage() {
  const [rooms, setRooms] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const [isRoomList, setIsRoomList] = useState(true);
  const [name, setName] = useState("");
  const [roomsNumber, setRoomsNumber] = useState(0);
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

			const roomsSnapshot = await getDocs(collection(db, "Rooms"));
			console.log(roomsSnapshot)

			const allRooms=[];
			roomsSnapshot.forEach((doc) => {
				allRooms.push({...doc.data(), id: doc.id});
			});

			setRooms(allRooms);
			setRoomsNumber(allRooms.length);

			console.log(rooms);
		} catch (err) {
			console.error(err);
			alert("An error occured while fetching user data");
    	}
    }

    fetchData();

  }, [user, loading, error]);

  const toggleAddRoom = useCallback(() => {
    setIsRoomList(!isRoomList);
  }, [isRoomList]);

  return (
    <div className="p-5 flex bg-darkGreen space-x-10 h-screen">
      <div className="space-y-7 w-1/3">
        <ProfileCard className="w-28 h-1/5" name={name} user={user} />
        <AddRoomCard
          className="w-28 h-1/5"
          IsPress={false}
          roomsNumber={roomsNumber}
          toggleAddRoom={toggleAddRoom}
        />
        {isRoomList ? (
          <img src={GameImage} className="h-2/4 w-auto" alt="logo game page" />
        ) : (
          <img
            src={AddRoomImage}
            className="h-2/4 w-auto"
            alt="logo game page"
          />
        )}
      </div>
      <div className="space-y-7 w-2/3">
        {isRoomList ? <ListOfRooms rooms={rooms} user={user}/> : <CreateRoomForm />}
      </div>
    </div>
  );
}
