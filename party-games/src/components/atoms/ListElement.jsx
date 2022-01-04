import React from "react";

export default function ListElement({ value }) {
  return (
    <div
      className="bg-greenBlue p-4 rounded-lg w-full md:w-full"
      onClick={() => alert("Your file is being uploaded!")}
    >
      <h1 className="text-darkGreen font-bold text-xl"> {value} </h1>
    </div>
  );
}
