import React, { useState, useCallback } from "react";
import { auth, db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom"; 

export default function CreateRoomForm() {
  const [state, setFormState] = useState({
    roomName: "",
    roomType: false,
    roomPassword: "",
    roomGameType: "Trivia",
  });

  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const handleRoomNameChange = (event) => {
    if (!event || !event.target) {
      return;
    }
    setFormState({ ...state, roomName: event.target.value });
  };

  const handleRoomGameTypeChange = (event) => {
    if (!event || !event.target) {
      return;
    }

    if (!event.target.value || event.target.value === "") {
      setFormState({ ...state, roomGameType: "Trivia" });
      return;
    }

    setFormState({ ...state, roomGameType: event.target.value });
  };

  const handleRoomTypeChange = (event) => {
    if (!event || !event.target) {
      return;
    }
    setFormState({ ...state, roomType: event.target.checked, roomPassword: "" });
  };

  const handleRoomPasswordChange = (event) => {
    if (!event || !event.target) {
      return;
    }
    setFormState({ ...state, roomPassword: event.target.value });
  };

  const handleAddRoom = useCallback(() => {
    console.log("Handle add room...");
    console.log(state);

    if (!state.roomName) {
      alert("Please fill in all fields!");
      return;
    }

    if (state.roomType && !state.roomPassword) {
      alert("Please provide password for private room!");
      return;
    }
    console.log(state.roomType);
    async function updateDB() {
      const docRef = await addDoc(collection(db, "Rooms"), {
        name: state.roomName,
        game: "Trivia",
        is_private: (state.roomType === true),
        pass: (state.roomType === true ? state.roomPassword : null),
        has_started: false,
        users: [{
          uid: user.uid,
          role: "admin",
          points: 0,
          isAnon: user.isAnonymous
        }]
      });
      console.log("Document written with ID: ", docRef.id);
      return navigate("/trivia");
    }
    updateDB();
  }, [state]);

  const handleCancelRooom = useCallback(() => {
    console.log("Handle cancel room...");
    setFormState({ roomName: "", roomType: 0});
  }, []);

  const renderRoomPasswordField = () => {
    return (
      <div className="bg-greenBlue p-4 rounded-lg w-full md:w-full">
        <input
          className="rounded w-full text-darkGreen font-bold text-xl focus:outline-none focus:shadow-outline bg-transparent"
          id="roomPassword"
          type="password"
          placeholder="Please introduce room password..."
          value={state.roomPassword}
          onChange={handleRoomPasswordChange}
        />
      </div>
    );
  }

  return (
    <div className="flex bg-darkGreen space-x-10 h-full">
      <div className="space-y-7 w-full">
        <div className="space-y-8 h-full">
          <div className="bg-liteGray space-y-24 p-4 items-center rounded-lg lg:w-auto md:w-full">
            <h1 className="text-left font-bold text-4xl text-darkGreen">
              Create Room
            </h1>
          </div>
          <div className="bg-liteGray space-y-4 p-4 items-center rounded-lg lg:w-auto md:w-full h-5/6 overflow-y-clip">
            <div className="bg-greenBlue p-4 rounded-lg w-full md:w-full">
              <input
                className="rounded w-full text-darkGreen font-bold text-xl focus:outline-none focus:shadow-outline bg-transparent"
                id="roomName"
                type="text"
                placeholder="Please introduce room name..."
                required
                value={state.roomName}
                onChange={handleRoomNameChange}
              />
            </div>
            <div className="bg-greenBlue p-4 rounded-lg w-full md:w-full">
              <input
                className="rounded w-full text-darkGreen font-bold text-xl focus:outline-none focus:shadow-outline bg-transparent"
                id="gameType"
                type="text"
                placeholder="Please introduce game type (by default is Trivia)..."
                required
                value={state.roomGameType}
                onChange={handleRoomGameTypeChange}
              />
            </div>
            <div className="bg-greenBlue p-4 rounded-lg w-full md:w-full form-check flex flex-row items-baseline">
              <input
                className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
                id="flexCheckDefault"
                checked={state.roomType}
                onChange={handleRoomTypeChange}
              />
              <label
                className="form-check-label inline-block text-darkGreen font-bold text-xl"
                htmlFor="flexCheckDefault"
              >
                Make room private
              </label>
            </div>
            
            { state.roomType ? renderRoomPasswordField() : null }
            
            <div className="flex flex-row justify-between text-center">
              <div
                className="bg-greenBlue p-4 rounded-lg w-2/5 md:w-2/5 cursor-pointer"
                onClick={handleAddRoom}
              >
                <span className="text-darkGreen font-bold text-xl">
                  {" "}
                  Add Room{" "}
                </span>
              </div>
              <div
                className="bg-greenBlue p-4 rounded-lg w-2/5 md:w-2/5 cursor-pointer"
                onClick={handleCancelRooom}
              >
                <span className="text-darkGreen font-bold text-xl">
                  {" "}
                  Cancel{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
