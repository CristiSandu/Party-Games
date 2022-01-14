import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import GameImage from "../../assets/game.svg";

import ProfileCard from "../atoms/ProfileCard";

export default function TriviaPage() {
  const [user, loading, error] = useAuthState(auth);
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
  }, [user, loading, error]);

  const usersList = [
    { Name: "MihaiVasile", Points: 1212 },
    { Name: "MihaiVasile", Points: 1212 },
    { Name: "MihaiVasile", Points: 1212 },
    { Name: "MihaiVasile", Points: 1212 },
    { Name: "MihaiVasile", Points: 1212 },
    { Name: "MihaiVasile", Points: 1212 },
    { Name: "MihaiVasile", Points: 1212 },
    { Name: "MihaiVasile", Points: 1212 },
    { Name: "MihaiVasile", Points: 1212 },
    { Name: "MihaiVasile", Points: 1212 },
    { Name: "MihaiVasile", Points: 1212 },
  ];

  const quetions = [
    {
      title: "How long is an Olympic swimming pool (in meters)?",
      answers: { A: "20", B: "20", C: "20", D: "20" },
      correct_answerer: "B",
    },
    {
      title: "How long is an Olympic swimming pool (in meters)?",
      answers: { A: "20", B: "20", C: "20", D: "20" },
      correct_answerer: "B",
    },
    {
      title: "How long is an Olympic swimming pool (in meters)?",
      answers: { A: "20", B: "20", C: "20", D: "20" },
      correct_answerer: "B",
    },
    {
      title: "How long is an Olympic swimming pool (in meters)?",
      answers: { A: "20", B: "20", C: "20", D: "20" },
      correct_answerer: "B",
    },
  ];

  const funFuct = [
    {
      title: "How long is an Olympic swimming pool (in meters)?",
    },
    {
      title: "How long is an Olympic swimming pool (in meters)?",
    },
    {
      title: "How long is an Olympic swimming pool (in meters)?",
    },
    {
      title: "How long is an Olympic swimming pool (in meters)?",
    },
    {
      title: "How long is an Olympic swimming pool (in meters)?",
    },
    {
      title: "How long is an Olympic swimming pool (in meters)?",
    },
  ];

  const listOfGames = usersList.map((item) => (
    <div className="bg-greenBlue text-center">
      <h1 className="font-bold text-darkGreen">{item.Name}</h1>
      <h1 className="font-bold text-darkGreen">{item.Points}</h1>
    </div>
  ));

  return (
    <div className="px-8 py-4 static space-y-4">
      <div className="flex bg-greenBlue rounded space-x-5 pl-10 py-2">
        <div className="flex flex-auto space-x-5">{listOfGames}</div>
        <img
          src={GameImage}
          className="h-14 w-20 flex-none"
          alt="logo game page"
        />
      </div>
      <div className="bg-greenBlue space-y-5 h-2/3 py-20 px-32 w-auto rounded">
        <div className="bg-liteGray rounded font-bold text-darkGreen px-8 py-16 h-72">
          {quetions[0].title}
        </div>
        <div className="flex space-x-6">
          <div
            className="bg-liteGray  font-bold text-darkGreen rounded-md flex-auto p-10 "
            onClick={() => {
              alert("test");
            }}
          >
            A: {quetions[0].answers.A}
          </div>
          <div
            className="bg-liteGray font-bold text-darkGreen rounded-md flex-auto p-10"
            onClick={() => {
              alert("test");
            }}
          >
            B: {quetions[0].answers.B}
          </div>
        </div>
        <div className="flex space-x-6">
          <div
            className="bg-liteGray font-bold text-darkGreen rounded-md flex-auto p-10"
            onClick={() => {
              alert("test");
            }}
          >
            C: {quetions[0].answers.C}
          </div>
          <div
            className="bg-liteGray font-bold text-darkGreen rounded-md flex-auto p-10"
            onClick={() => {
              alert("test");
            }}
          >
            D: {quetions[0].answers.D}
          </div>
        </div>

        <div className="flex space-x-6">
          <div className="bg-transparent rounded-md flex-auto p-10"></div>
          <div className="bg-liteGray font-bold text-darkGreen rounded-md flex-[2_2_0%] p-10">
            {funFuct[0].title}
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-4 w-1/3">
        <ProfileCard
          className="bg-darkGray w-1/3"
          isInGame={true}
          user={user}
        />
      </div>
    </div>
  );
}
