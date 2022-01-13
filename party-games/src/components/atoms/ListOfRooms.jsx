import React from "react";
import { LockClosedIcon, GlobeAltIcon } from "@heroicons/react/solid";
import { db } from "../../firebase";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function ListOfRooms({ rooms, user }) {
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

  const listOfRooms = rooms?.map((item) => (
    <div
      className="bg-greenBlue p-4 rounded-lg w-full md:w-full"
      onClick={() => enterRoom(item.id, item.users.length)}
      key={item.id}
    >
      <button className="text-darkGreen font-bold text-xl w-full">
        <div className="flex flex-row justify-between">
          <span>
            {item.name} - {item.game}
          </span>
          <div className="flex flex-row items-center">
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
      </button>
    </div>
  ));
  return (
    <div className="space-y-8 h-full">
      <div className="bg-liteGray space-y-24 p-4 items-center rounded-lg lg:w-auto md:w-full">
        <h1 className="text-left font-bold text-4xl text-darkGreen">
          Rooms List
        </h1>
      </div>
      <div className="bg-liteGray space-y-4 p-4 items-center rounded-lg lg:w-auto md:w-full h-5/6 overflow-y-clip">
        {listOfRooms}
      </div>
    </div>
  );
}
