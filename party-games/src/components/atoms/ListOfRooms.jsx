import React, { useState, useEffect } from "react";
import { LockClosedIcon, GlobeAltIcon } from '@heroicons/react/solid';

export default function ListOfRooms({ rooms }) {
    const listOfRooms = rooms.map((item) => (
        <div
          className="bg-greenBlue p-4 rounded-lg w-full md:w-full"
          onClick={() => alert("You are about to enter a room...")}
          key = {item.id}
        >
          <button className="text-darkGreen font-bold text-xl w-full">
            <div className="flex flex-row justify-between">
                <span>{item.title} - {item.gameType}</span>
                <div className="flex flex-row items-center">
                    <span>{item.currPlayers}</span>
                    <span>/</span>
                    <span>{item.maxPlayers}</span>
                    {
                        item.isLocked 
                        ? <LockClosedIcon className="h-5 ml-2 w-5 text-blue-500"/> 
                        : <GlobeAltIcon className="h-5 ml-2 w-5 text-blue-500"/>
                    }
                </div>
            </div>
          </button>
        </div>
      ));
      return (
        <div className="space-y-8 h-full">
          <div className="bg-liteGray space-y-24 p-4 items-center rounded-lg lg:w-auto md:w-full">
            <h1 className="text-left font-bold text-2xl text-darkGreen">Rooms</h1>
          </div>
          <div className="bg-liteGray space-y-4 p-4 items-center rounded-lg lg:w-auto md:w-full h-5/6 overflow-y-clip">
            {listOfRooms}
          </div>
        </div>
      );
}