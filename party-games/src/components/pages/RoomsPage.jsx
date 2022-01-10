import React, { useEffect, useState } from "react";
import ListOfRooms from "../atoms/ListOfRooms";

export default function RoomsPage() {

  const [rooms, setRooms] = useState([]);

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

  return (
    <div className="p-5 flex bg-darkGreen space-x-10 h-screen">
      <div className="space-y-7 w-2/3">
        <ListOfRooms rooms={rooms} />
      </div>
    </div>
  );
}
