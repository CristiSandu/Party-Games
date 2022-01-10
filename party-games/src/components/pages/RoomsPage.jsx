import React, { useEffect, useState, useCallback } from "react";
import ListOfRooms from "../atoms/ListOfRooms";
import ProfileCard from "../atoms/ProfileCard";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import AddRoomCard from "../atoms/AddRoomCard";
import CreateRoomForm from "../atoms/CreateRoomForm";

import GameImage from "../../assets/game_room.svg";
import AddRoomImage from "../../assets/add_room.svg";

export default function RoomsPage() {
  const [rooms, setRooms] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const [isRoomList, setIsRoomList] = useState(true);

  useEffect(() => {
    const dummyRooms = [
      {
        id: "dasdsadaaa",
        title: "Room 1",
        gameType: "Fibbage",
        currPlayers: 6,
        maxPlayers: 10,
        isLocked: false,
      },
      {
        id: "daxcxzxc",
        title: "Room 2",
        gameType: "Trivia",
        currPlayers: 2,
        maxPlayers: 10,
        isLocked: true,
      },
      {
        id: "mmsmsmsasadsa",
        title: "Room 3",
        gameType: "Trivia",
        currPlayers: 4,
        maxPlayers: 10,
        isLocked: false,
      },
    ];

    setRooms(dummyRooms);
  }, []);

  const toggleAddRoom = useCallback(() => {
    setIsRoomList(!isRoomList);
  }, [isRoomList]);

  return (
    <div className="p-5 flex bg-darkGreen space-x-10 h-screen">
      <div className="space-y-7 w-1/3">
        <ProfileCard className="w-28 h-1/5" name={"dan"} user={user} />
        <AddRoomCard
          className="w-28 h-1/5"
          IsPress={false}
          roomsNumber={5}
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
        {isRoomList ? <ListOfRooms rooms={rooms} /> : <CreateRoomForm />}
      </div>
    </div>
  );
}
