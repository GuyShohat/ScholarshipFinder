import React from "react";
import { Link } from "react-router-dom";

export default function BackToDashboard() {
  return (
    <div style={{ marginTop: "20px" }}>
      <Link
        to="/admin/dashboard"
        style={{
          color: "#007acc",
          textDecoration: "none",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        ← Back to Dashboard
      </Link>
    </div>
  );
}
