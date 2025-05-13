import { useRef } from "react";
import { useAuth } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const { setUserCredentials } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    const enteredUsername = usernameRef.current.value.trim();
    const enteredPassword = passwordRef.current.value;

    if (!enteredUsername || !enteredPassword) {
      alert("Please fill in both fields");
      return;
    }

    const storedCredentials = JSON.parse(localStorage.getItem("credentials"));

    if (
      storedCredentials &&
      storedCredentials.username === enteredUsername &&
      storedCredentials.password === enteredPassword
    ) {
      setUserCredentials(storedCredentials);
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="border w-[50%] lg:w-[30%] flex flex-col items-center justify-center gap-6 py-12">
      <input
        ref={usernameRef}
        type="text"
        placeholder="Enter username"
        className="border p-3 w-[80%]"
        required
      />
      <input
        ref={passwordRef}
        type="password"
        placeholder="Enter password"
        className="border p-3 w-[80%]"
        onKeyDown={(e) => {
          if (e.key === "Enter") handleLogin();
        }}
        required
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white cursor-pointer px-6 py-3 text-base rounded-lg hover:bg-blue-600 w-[80%]"
      >
        Log in
      </button>
      <p className="text-xs">
        not registered?{" "}
        <span
          className="underline text-blue-500 cursor-pointer"
          onClick={() => navigate("/signup")}
        >
          signup
        </span>
      </p>
    </div>
  );
}

export default Login;
