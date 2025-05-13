import React from "react";
import { useNavigate } from "react-router-dom";

function Index() {
  const navigator = useNavigate();
  return (
    <div>
      <button
        className="border px-6 py-3 text-white bg-blue-500 rounded-lg cursor-pointer"
        onClick={() => navigator("signup")}
      >
        Sign Up
      </button>
    </div>
  );
}

export default Index;
