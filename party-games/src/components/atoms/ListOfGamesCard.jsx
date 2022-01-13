import profile from "../../assets/profile.svg";
import { useNavigate } from "react-router-dom";
import ListElement from "./ListElement";
import React, { useEffect } from "react";

export default function ListOfGamesCard({ games }) {
  const navigate = useNavigate();

  const listOfGames = games.map((item) => (
    <div
      className="bg-greenBlue p-4 rounded-lg w-full md:w-full"
      onClick={() => {
        if (item === "Trivia") {
            navigate("/rooms");
        }
      }}
    >
      <button className="text-darkGreen font-bold text-xl"> {item} </button>
    </div>
  ));

  return (
    <div className="space-y-8 h-full">
      <div className="bg-liteGray space-y-24 p-4 items-center rounded-lg lg:w-auto md:w-full">
        <h1 className="text-left font-bold text-2xl text-darkGreen">Games</h1>
      </div>
      <div className="bg-liteGray space-y-4 p-4 items-center rounded-lg lg:w-auto md:w-full h-5/6 overflow-y-clip">
        {listOfGames}
      </div>
    </div>
  );
}
