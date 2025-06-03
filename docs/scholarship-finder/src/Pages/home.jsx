import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
        Welcome to Scholarship Finder
      </h1>

      <button
        style={{
          padding: "10px 25px",
          border: "none",
          fontWeight: "bold",
          fontSize: "1rem",
          cursor: "pointer",
        }}
        onClick={() => navigate("/admin")}
      >
        Go to Admin Dashboard
      </button>

      <button
        style={{

          padding: "10px 25px",
          border: "none",
          fontWeight: "bold",
          fontSize: "1rem",
          cursor: "pointer",
        }}
        onClick={() => navigate("/user")}
      >
        Go to User Area
      </button>
    </div>
  );
}

export default Home;