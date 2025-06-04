import React from "react";
import { Link, Navigate } from "react-router-dom";

function UserHome() {
  const isAuthenticated = localStorage.getItem("isUserAuthenticated") === "true";

  if (isAuthenticated) {
    return <Navigate to="/user/dashboard" replace />;
  }

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

      {/* לינקים תחתונים למשתמש מחובר */}
      {isAuthenticated && (
        <div style={{ marginTop: "40px", fontSize: "0.9rem" }}>
          <Link to="/user/settings" style={{ marginRight: "15px", color: "#666" }}>
            Settings
          </Link>
          <Link to="/user/dashboard" style={{ color: "#666" }}>
            Back to Dashboard
          </Link>
        </div>
      )}
    </div>
  );
}

export default UserHome;
