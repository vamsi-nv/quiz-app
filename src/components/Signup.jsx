import { useState } from "react";
import { useAuth } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    reEnteredPass: ""
  });

  const navigate = useNavigate();
  const { setUserCredentials } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSignUp = () => {
    const { name, password, reEnteredPass } = formData;

    if (!name.trim() || !password || !reEnteredPass) {
      alert("Please fill in all fields");
      return;
    }

    if (password !== reEnteredPass) {
      alert("Passwords do not match");
      return;
    }

    const credentials = {
      username: name.trim(),
      password: password,
    };

    setUserCredentials(credentials);
    localStorage.setItem("credentials", JSON.stringify(credentials));

    alert("Signup successful");
    navigate("/dashboard");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSignUp();
  };

  return (
    <div className="border w-[50%] lg:w-[30%] flex flex-col items-center justify-center gap-6 py-12">
      <input
        className="border p-3 w-[80%]"
        name="name"
        type="text"
        placeholder="Enter name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        className="border p-3 w-[80%]"
        name="password"
        type="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <input
        className="border p-3 w-[80%]"
        name="reEnteredPass"
        type="password"
        placeholder="Re-Enter password"
        value={formData.reEnteredPass}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        required
      />

      <button
        className="bg-blue-500 text-white cursor-pointer px-6 py-3 text-base rounded-lg hover:bg-blue-600 w-[80%]"
        onClick={handleSignUp}
      >
        Sign Up
      </button>
      
      <p className="text-xs">
        already have registered?{" "}
        <span 
          className="underline text-blue-500 cursor-pointer" 
          onClick={() => navigate("/login")}
        >
          login
        </span>
      </p>
    </div>
  );
}

export default Signup;