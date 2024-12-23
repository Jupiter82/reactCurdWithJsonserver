import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const [data, setData] = useState({ id: "", name: "", email: "" });
  const navigate = useNavigate()
  useEffect(() => {
    const fetcheData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/user/" + id);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetcheData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3000/user/${id}`, data);
      alert("Data updated successfully!");
      navigate("/")
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="flex w-full h-80 justify-center items-center ">
      <form onSubmit={handleSubmit}>
        <div className="w-80 h-52 border-1 bg-gray-300 p-5 flex flex-col justify-between">
          <div className="flex flex-col">
            <label htmlFor="Id">Id:</label>
            <input disabled type="text" value={data.id} name="id"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="name">Name:</label>
            <input type="text" value={data.name} name="name"
              onChange={e => setData({ ...data, name: e.target.value })} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <input type="text" value={data.email} name="email"
              onChange={e => setData({ ...data, email: e.target.value })} />
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

export default Edit;
