import React, { useState, useCallback } from "react";

export default function CreateRoomForm() {

    //roomType - 0 = private, 1 = public
    const [state, setFormState] = useState({ roomName: "", roomType: 0, numberOfUsers: "" });

    const handleRoomNameChange = (event) => {
        if (!event || !event.target) {
            return;
        }
        setFormState({ ...state, roomName: event.target.value });
    };

    const handleRoomTypeChange = (event) => {
        if (!event || !event.target) {
            return;
        }
        setFormState({ ...state, roomType: event.target.checked });
    };

    const handleNumberOfUsersChange = (event) => {
        if (!event || !event.target) {
            return;
        }
        setFormState({ ...state, numberOfUsers: parseInt(event.target.value) });
    };

    const handleAddRoom = useCallback(() => {
        console.log("Handle add room...");
        console.log(state);
        
        if (!state.roomName || !state.numberOfUsers) {
            alert("Please fill in all fields!");    
            return;
        }

        //insert into firebase
    },[state]);

    const handleCancelRooom = useCallback(() => {
        console.log("Handle cancel room...");
        setFormState({ roomName: "", roomType: 0, numberOfUsers: "" });
    },[]);

    return (
        <div className="p-5 flex bg-darkGreen space-x-10 h-screen">
            <div className="space-y-7 w-2/3">
                <div className="space-y-8 h-full">
                    <div className="bg-liteGray space-y-24 p-4 items-center rounded-lg lg:w-auto md:w-full">
                        <h1 className="text-left font-bold text-2xl text-darkGreen">Create Room</h1>
                    </div>
                    <div className="bg-liteGray space-y-4 p-4 items-center rounded-lg lg:w-auto md:w-full h-5/6 overflow-y-clip">
                        <div className="bg-greenBlue p-4 rounded-lg w-full md:w-full">
                            <input className="rounded w-full text-darkGreen font-bold text-xl focus:outline-none focus:shadow-outline bg-transparent" id="roomName" type="text" placeholder="Please introduce room name..." required
                            value = {state.roomName}
                            onChange = {handleRoomNameChange}
                            />
                        </div>
                        <div className="bg-greenBlue p-4 rounded-lg w-full md:w-full form-check flex flex-row items-baseline">
                            <input className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="flexCheckDefault"
                            checked = {state.roomType}
                            onChange={handleRoomTypeChange}
                            />
                            <label className="form-check-label inline-block text-darkGreen font-bold text-xl" htmlFor="flexCheckDefault">
                                Make room public
                            </label>

                        </div>
                        <div className="bg-greenBlue p-4 rounded-lg w-full md:w-full">
                            <input className="rounded w-full text-darkGreen font-bold text-xl focus:outline-none focus:shadow-outline bg-transparent" id="numberPlayers" type="number" placeholder="Please introduce the number of players..." required
                            value = {state.numberOfUsers}
                            onChange={handleNumberOfUsersChange}/>
                        </div>
                        <div className="flex flex-row justify-between text-center">
                            <div className="bg-greenBlue p-4 rounded-lg w-2/5 md:w-2/5 cursor-pointer"
                                onClick={handleAddRoom}>
                                <span className="text-darkGreen font-bold text-xl"> Add Room </span>
                            </div>
                            <div className="bg-greenBlue p-4 rounded-lg w-2/5 md:w-2/5 cursor-pointer"
                             onClick={handleCancelRooom}>
                                <span className="text-darkGreen font-bold text-xl"> Cancel </span>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}