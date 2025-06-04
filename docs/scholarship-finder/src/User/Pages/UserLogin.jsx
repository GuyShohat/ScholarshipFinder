// src/User/Pages/UserLogin.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UserLogin.module.css";
import { Link } from "react-router-dom";
import {
  getAllUsers,
  saveAllUsers
} from "../utlis/userstorage";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).+$/;

    if (!emailRegex.test(email)) {
      alert("נא להזין כתובת מייל חוקית.");
      return;
    }

    if (!passwordRegex.test(password)) {
      alert("הסיסמה צריכה לכלול לפחות אות אחת ומספר אחד.");
      return;
    }

    const userId = btoa(email.toLowerCase());
    const users = getAllUsers();

    if (!users[userId]) {
      users[userId] = {
        email,
        password,
        savedScholarships: [],
        submittedApplications: [],
        matchedScholarships: [],
        settings: {
          theme: "light",
          firstName: "",
          lastName: ""
        }
      };
      saveAllUsers(users);
    } else {
      if (users[userId].password !== password) {
        alert("סיסמה שגויה.");
        return;
      }
    }

    localStorage.setItem("isUserAuthenticated", "true");
    localStorage.setItem("currentUserId", userId); // ✅


    navigate("/user/dashboard");
  };

  return (
    <div className={styles.container}>
      <h2>User Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="User Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="User Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link
          to="/"
          style={{
            color: "#007acc",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "14px"
          }}
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default UserLogin;
