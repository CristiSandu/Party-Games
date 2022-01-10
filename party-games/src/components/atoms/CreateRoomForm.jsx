import React, { useState, useCallback } from "react";

export default function CreateRoomForm() {

    const [state, setFormState] = useState({ roomName: "", roomType: 0, numberOfUsers: 0 });

    const handleAddRoom = useCallback(() => {
        console.log("Handle add room...");
        console.log(state);
    },[state]);

    const handleCancelRooom = useCallback(() => {
        console.log("Handle cancel room...");
        setFormState({ roomName: "", roomType: 0, numberOfUsers: 0 });
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
                            {/* <button className="text-darkGreen font-bold text-xl"> Room name... </button> */}
                            <input className="rounded w-full text-darkGreen font-bold text-xl focus:outline-none focus:shadow-outline bg-transparent" id="roomName" type="text" placeholder="Please introduce room name..."/>
                        </div>
                        <div className="bg-greenBlue p-4 rounded-lg w-full md:w-full form-check">
                            {/* <button className="text-darkGreen font-bold text-xl"> Type (Open/Private) </button> */}
                            <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label inline-block text-darkGreen font-bold text-xl" htmlFor="flexCheckDefault"  defaultChecked={true}>
                                Default checkbox
                            </label>

                        </div>
                        <div className="bg-greenBlue p-4 rounded-lg w-full md:w-full">
                            {/* <button className="text-darkGreen font-bold text-xl"> Number of users </button> */}
                            <input className="rounded w-full text-darkGreen font-bold text-xl focus:outline-none focus:shadow-outline bg-transparent" id="numberPlayers" type="number" placeholder="Please introduce the number of players..."/>
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
        // <div class="w-full max-w-xs">
        //     <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        //         <div class="mb-4">
        //         <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        //             Username
        //         </label>
        //         <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
        //         </div>
        //         <div class="mb-6">
        //         <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        //             Password
        //         </label>
        //         <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
        //         <p class="text-red-500 text-xs italic">Please choose a password.</p>
        //         </div>
        //         <div class="flex items-center justify-between">
        //         <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        //             Sign In
        //         </button>
        //         <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        //             Forgot Password?
        //         </a>
        //         </div>
        //     </form>
        //     <p class="text-center text-gray-500 text-xs">
        //         &copy;2020 Acme Corp. All rights reserved.
        //     </p>
        // </div>
    )
}