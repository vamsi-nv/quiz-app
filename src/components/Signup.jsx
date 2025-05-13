import { useRef } from "react";
import { useAuth } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

function Signup() {
  const nameRef = useRef();
  const passwordRef = useRef();
  const reEnteredPassRef = useRef();

  const navigate = useNavigate();

  const { setUserCredentials } = useAuth();

  const handleSignUp = () => {
    const name = nameRef.current.value.trim();
    const password = passwordRef.current.value;
    const reEnteredPass = reEnteredPassRef.current.value;

    if (!name || !password || !reEnteredPass) {
      alert("Please fill in all fields");
      return;
    }

    if (password !== reEnteredPass) {
      alert("Passwords do not match");
      return;
    }

    setUserCredentials((prev) => ({
      ...prev,
      username: name,
      password: password,
    }));
    const credentials = {
      username: name,
      password: password,
    };

    setUserCredentials(credentials);
    localStorage.setItem("credentials", JSON.stringify(credentials));

    alert("Signup successful");
    navigate("/dashboard")
  };

  return (
    <div className="border w-[50%] lg:w-[30%] flex flex-col items-center justify-center gap-6 py-12">
      <input
        className="border p-3 w-[80%]"
        ref={nameRef}
        type="text"
        placeholder="Enter name"
        required
      />

      <input
        className="border p-3 w-[80%]"
        ref={passwordRef}
        type="password"
        placeholder="Enter password"
        required
      />
      <input
        className="border p-3 w-[80%]"
        ref={reEnteredPassRef}
        type="password"
        placeholder="Re-Enter password"
        onKeyDown={(e) => {
          if (e.key === "Enter") handleLogin();
        }}
        required
      />

      <button
        className="bg-blue-500 text-white cursor-pointer px-6 py-3 text-base rounded-lg hover:bg-blue-600 w-[80%]"
        onClick={handleSignUp}
      >
        Sign Up
      </button>
      <p className="text-xs">already have registered? <span className="underline text-blue-500 cursor-pointer" onClick={() => navigate("/login")}>login</span></p>
    </div>
  );
}

export default Signup;
