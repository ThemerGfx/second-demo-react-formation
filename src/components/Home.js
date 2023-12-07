import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const goToTable = () => {
    navigate("/table");
  };

  const goToForm = () => {
    navigate("/form");
  };

  return (
    <div className="border border-gray-700 p-10 rounded-2xl flex flex-col gap-4 shadow-lg">
      <p className="text-3xl font-bold">Welcome to Demo One!</p>
      <div className="flex flex-row justify-center gap-5">
        <button
          onClick={goToForm}
          className="bg-blue-500 text-white rounded-lg p-2 font-bold hover:bg-green-600"
        >
          Add User
        </button>
        <button
          onClick={goToTable}
          className="bg-blue-500 text-white rounded-lg p-2 font-bold hover:bg-gray-600"
        >
          Show Users
        </button>
      </div>
    </div>
  );
}
