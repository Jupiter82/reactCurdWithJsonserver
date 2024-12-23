import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const [inputData, setInputData] = useState({ name: "", email: "" });

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get("http://localhost:3000/user");
      const user = response.data;

      const newId =
        user.length > 0 ? (Math.max(...user.map((u) => u.id)) + 1).toString() : 1;
      const newData = { ...inputData, id: newId };

      axios.post("http://localhost:3000/user", newData);
      alert("Data Added Successfully!");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex w-full h-80 justify-center items-center ">
      <form onSubmit={handleSubmit}>
        <div className="w-80 h-52 border-1 bg-gray-300 p-5 flex flex-col justify-between">
          <div className="flex flex-col">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              value={inputData.name}
              name="name"
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              value={inputData.email}
              name="email"
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Add;
