import profile from "../../assets/profile.svg";
import React, { useState } from "react";

export default function AddRoomCard({ IsPress, roomsNumber, toggleAddRoom }) {
  const [isRoomList, setIsRoomList] = useState(IsPress);

  return (
    <div className="bg-liteGray p-4 items-center text-center space-y-8  rounded-lg lg:w-auto md:w-full">
      <h1 className="text-darkGreen text-4xl font-bold">Trivia Game</h1>
      <h1 className="text-darkGreen text-2xl font-bold">
        Number of Rooms: {roomsNumber}
      </h1>

      <button
        className="bg-greenBlue text-darkGreen font-bold text-2xl rounded-lg px-12 py-2"
        onClick={() => {
          setIsRoomList(!isRoomList);
          toggleAddRoom();
        }}
      >
        {isRoomList === false ? "Create Room" : "Rooms List"}
      </button>
    </div>
  );
}
