import { useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

function Login() {
  const { userName, login } = useAuth();
  const inputRef = useRef();
  const navigate = useNavigate();

  const handleRegister = () => {
    if (inputRef.current.value.trim() === "") {
      alert("Please enter your name to continue");
      return;
    }

    login(inputRef.current.value);
    navigate("/dashboard");
  };

  useEffect(()=>{
    if(userName) navigate("/dashboard");
  }, []);

  return (
    <div className="border rounded-2xl w-[50%] h-[50%] flex flex-col items-center justify-center gap-6">
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter name "
        className="border rounded-lg p-3 w-64"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleRegister();
          }
        }}
      />

      <button
        onClick={handleRegister}
        className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white w-64 p-3 rounded-lg "
      >
        Register
      </button>
    </div>
  );
}

export default Login;
