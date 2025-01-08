import { Link } from "react-router-dom";
import "./App.css";
function App() {

  return (
    <>
      <h1 className="text-4xl text-center">Crud tasks</h1>
      <div className="flex justify-center">
        <table className="border border-gray-400 text-left">
          <thead>
            <tr className="border-b border-gray-400">
              <th className="p-2 border-x"> Projects</th>
              <th className="p-2 border-x">Description </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-400">
              <td className="p-2 border-x">
                <Link
                  to="/detail
                "
                  className="hover:underline"
                >
                  Personal details
                </Link>
              </td>
              <td className="p-2 border-x">
                Simple crud name and id
              </td>
            </tr>
            <tr className="border-b border-gray-400">
              <td className="p-2 border-x">
                <Link
                  to="/product
                "
                  className="hover:underline"
                >
                  Product
                </Link>
              </td>
              <td className="p-2 border-x">
                E-commerce product details
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );

}

export default App;
