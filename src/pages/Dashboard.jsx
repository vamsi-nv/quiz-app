import { useAuth } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigator = useNavigate();
  const { userName } = useAuth();
  return (
    <div className="border border-gray-400 shadow-lg rounded-lg w-[50%] h-[50%] flex flex-col items-center justify-between p-6">
      <p className="text-3xl font-semibold text-center">
        Welcome, <br />
        {userName}
      </p>

      <button
        onClick={() => navigator("/quiz")}
        className="bg-blue-500 text-white px-5 py-3 text-lg rounded-full cursor-pointer hover:bg-blue-600"
      >
        Take Quiz
      </button>
    </div>
  );
}

export default Dashboard;
