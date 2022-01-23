import React from "react";
import { useState } from "react";
import { LockClosedIcon, GlobeAltIcon } from "@heroicons/react/solid";
import { db } from "../../firebase";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function ListOfRooms({ rooms, user }) {

  const [details, setDetails] = useState();

	const navigate = useNavigate();

	async function enterRoom (roomId, nrOfUsers) {
		const roomRef = doc(db, "Rooms", roomId);

		console.log(nrOfUsers);
		const role = nrOfUsers < 4 ? "player" : "spectator";  

		await updateDoc(roomRef, {
			users: arrayUnion({
				uid: user.uid,
				isAnon: user.isAnonymous,
				points: 0,
				role: role
			})
		});

		navigate("/trivia");

	}

  const computeSpectatorPoints = () => {
    if (!details) return 0;
    const spectatorPoints = details.users.reduce((acc, user) => {
      if (user.role === "spectator") {
        return acc + user.points;
      }
      return acc;
    }, 0);
    return spectatorPoints;
  }

  const displayRoomDetails = () => {
    return (
      <div>
        <div className="flex flex-row justify-between">
          <div> 
            <span className="mr-2">{details.name} - {details.game}</span>
            <span style={{color: 'white'}}>(Admin: { retrieveAdmin(details.users)})</span> 
          </div>
          <div className="flex flex-row items-center">
            <span className="mr-2"> {details.has_started ? 'In progress' : 'Not started'}</span>
            <span>{details.users.length}</span>
            <span>/</span>
            <span>4</span>
            {details.is_private ? (
              <LockClosedIcon className="h-5 ml-2 w-5 text-blue-500" />
            ) : (
              <GlobeAltIcon className="h-5 ml-2 w-5 text-blue-500" />
            )}
          </div>
        </div>
        <div className="flex flex-col justify-start	mt-2">
          {details.users.map((user) => { return user.role !== 'spectator' ? ( 
            <div key={user.uid}>
              <span style={{color: 'cornflowerblue'}}>{user.role}</span>
              <span className="mr-2 ml-2">{user.isAnon ? "Anonymous" : user.uid}</span>
              <span className="mr-2"> {user.points} </span>
            </div>
          ) : null })}
        </div>
        <div className="flex flex-col justify-start	mt-4">
          {details.users.map((user) => { return user.role === 'spectator' ? ( 
            <div key={user.uid}>
              <span style={{color: 'sienna'}}>{user.role}</span>
              <span className="mr-2 ml-2">{user.isAnon ? "Anonymous" : user.uid}</span>
              <span className="mr-2"> {user.points} </span>
            </div>
          ) : null })}
          <div className="flex flex-row mt-2">
            <span>Total spectator points: </span>
            <span className="ml-2">{computeSpectatorPoints()}</span>
          </div>
        </div>
        <button
          className="bg-greenBlue text-darkGreen font-bold text-xl rounded-lg px-4 py-2 mt-2"
          onClick={() => enterRoom(details.id, details.users.length)}
        >
          Join Room
        </button>
      </div>
    );
  }

  const handleRoomDetails = (room) => {
    setDetails(room);
  }

  const retrieveAdmin = (users) => {
    const result = users.find((user) => user.role === "admin");
    return result?.uid;
  }

  const listOfRooms = rooms?.map((item) => (
    <div
      className="bg-greenBlue p-4 rounded-lg w-full md:w-full"
      // onClick={() => enterRoom(item.id, item.users.length)}
      onClick={() => handleRoomDetails(item)}
      key={item.id}
    >
      <div className="text-darkGreen font-bold text-xl w-full">
        <div className="flex flex-row justify-between">
          <div>
            <span className="mr-2">{item.name} - {item.game}</span>
            <span style={{color: 'white'}}>(Admin: { retrieveAdmin(item.users)})</span>
          </div>
          <div className="flex flex-row items-center">
            <span className="mr-2"> {item.has_started ? 'In progress' : 'Not started'}</span>
            <span>{item.users.length}</span>
            <span>/</span>
            <span>4</span>
            {item.is_private ? (
              <LockClosedIcon className="h-5 ml-2 w-5 text-blue-500" />
            ) : (
              <GlobeAltIcon className="h-5 ml-2 w-5 text-blue-500" />
            )}
          </div>
        </div>
        
      </div>
    </div>
  ));
  return (
    <div className="space-y-8">
      <div className="bg-liteGray space-y-24 p-4 items-center rounded-lg lg:w-auto md:w-full">
        <h1 className="text-left font-bold text-4xl text-darkGreen">
          Rooms List
        </h1>
      </div>
      <div className="bg-liteGray space-y-24 p-4 items-center rounded-lg lg:w-auto md:w-full">
        <div className="text-left font-bold text-xl text-darkGreen">
          { details ? displayRoomDetails() : "Select a room to play" }
        </div>
      </div>
      <div className="bg-liteGray space-y-4 p-4 items-center rounded-lg lg:w-auto md:w-full h-5/6 overflow-y-clip">
        {rooms && rooms.length > 0 ? listOfRooms : <div className="text-darkGreen text-xl">Loading...</div>}
      </div>
    </div>
  );
}
