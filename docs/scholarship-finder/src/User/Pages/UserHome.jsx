import React from "react";
import { Link } from "react-router-dom";

function UserHome() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#f5f7fa",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
        Scholarship Finder
      </h1>
      <p style={{ fontSize: "1.1rem" }}>
        Find scholarships that are just right for you
      </p>

      <Link to="/user/login">
        <button
          style={{
            backgroundColor: "#003366",
            color: "white",
            padding: "12px 24px",
            border: "none",
            fontWeight: "bold",
            fontSize: "1rem",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </Link>

      <Link to="/user/learn" style={{ color: "#003366", fontWeight: "500" }}>
        Learn more
      </Link>
    </div>
  );
}

export default UserHome;
