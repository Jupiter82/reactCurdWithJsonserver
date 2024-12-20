import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  console.log(users);

  useEffect(() => {
    const fetcheData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/user");
        setUsers(response.data);
      } catch (error) {
        setError("an error occured while fetching data");
      }
    };
    fetcheData();
  }, []);
  return (
    <div className=" text-center">
      <div className="w-[80rem] flex justify-end mt-2">
        <Link to="/create">
          {" "}
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            + Add
          </button>
        </Link>
      </div>
      <table className="border-2 w-[80rem] mx-auto px-4">
        <thead className="border-2">
          <tr className="border-s-2">
            <th className="border-2">Id</th>
            <th className="border-2">Name</th>
            <th className="border-2">Email</th>
            <th className="border-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr className="border-2" key={user.id}>
                <td className="border-2">{user.id}</td>
                <td className="border-2">{user.name}</td>
                <td className="border-2">{user.email}</td>
                <td className="border-2">
                  <Link to={`/edit/${user.id}`}>
                    {" "}
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      Edit
                    </button>
                  </Link>
                  <Link to="/delete">
                    {" "}
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      Delete
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;