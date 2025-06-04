import React, { useContext, useEffect, useState } from "react";
import styles from "./UserSettings.module.css";
import { ThemeContext } from "../../ThemeContext";
import { useNavigate } from "react-router-dom";
import {
  getCurrentUserId,
  getUserData,
  saveUserData
} from "../utlis/userstorage";

export default function UserSettings() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userId = getCurrentUserId();
    if (!userId) {
      alert("No user is currently logged in.");
      navigate("/user/login");
      return;
    }

    const user = getUserData(userId);
    if (!user) {
      alert("User data not found.");
      navigate("/user/login");
      return;
    }

    setFirstName(user.settings?.firstName || "");
    setLastName(user.settings?.lastName || "");
    setTheme(user.settings?.theme || "light");
  }, [setTheme, navigate]);

  const handleSave = (e) => {
    e.preventDefault();
    if (!firstName || !lastName) {
      setError("Both first name and last name are required.");
      return;
    }

    const userId = getCurrentUserId();
    if (!userId) {
      alert("No user is currently logged in.");
      navigate("/user/login");
      return;
    }

    const currentUser = getUserData(userId);

    const updatedSettings = {
      theme,
      firstName,
      lastName
    };

    saveUserData(userId, {
      ...currentUser,
      settings: updatedSettings
    });

    alert("Settings saved successfully.");
    setError("");
  };

  const goToDashboard = () => {
    const isAuthenticated = localStorage.getItem("isUserAuthenticated") === "true";
    if (!isAuthenticated) {
      alert("You must be logged in to access the dashboard.");
      navigate("/user/login");
    } else {
      navigate("/user/dashboard");
    }
  };

  return (
    <div className={styles.settingsContainer}>
      <h2>User Settings</h2>
      <form className={styles.form} onSubmit={handleSave}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>

        <label>
          Theme:
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="metallic">Metallic</option>
          </select>
        </label>

        {error && <p className={styles.error}>{error}</p>}

        <button type="submit">Save Settings</button>
      </form>

      <button className={styles.backBtn} onClick={goToDashboard}>
        ← Back to Dashboard
      </button>
    </div>
  );
}
