import { useState } from "react";
import { useAuth } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const { setUserCredentials } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = () => {
    const { username, password } = formData;
    const enteredUsername = username.trim();
    const enteredPassword = password;

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

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <div className="border w-[50%] lg:w-[30%] flex flex-col items-center justify-center gap-6 py-12">
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="border p-3 w-[80%]"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Enter password"
        className="border p-3 w-[80%]"
        value={formData.password}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
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