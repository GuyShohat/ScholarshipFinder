import React, { useState, useEffect } from 'react';
import styles from './AdminSettings.module.css';
import { useContext } from 'react';
import { ThemeContext } from "../../ThemeContext";
import { Link } from "react-router-dom";


function AdminSettings() {
  const [settings, setSettings] = useState({
    siteTitle: "Scholarship Finder Admin",
    emailNotifications: "Enabled",
    theme: "Metallic"
  });

  const { setTheme } = useContext(ThemeContext); 

  useEffect(() => {
    const saved = localStorage.getItem("adminSettings");
    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  const handleChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("adminSettings", JSON.stringify(settings));
    setTheme(settings.theme); 
    alert("Settings saved!");
  };

  return (
    <div className={styles.container}>
      <h1>Admin Settings</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Site Title:
          <input
            type="text"
            value={settings.siteTitle}
            onChange={(e) => handleChange("siteTitle", e.target.value)}
          />
        </label>

        <label>
          Email Notifications:
          <select
            value={settings.emailNotifications}
            onChange={(e) => handleChange("emailNotifications", e.target.value)}
          >
            <option>Enabled</option>
            <option>Disabled</option>
          </select>
        </label>

        <label>
          Theme:
          <select
            value={settings.theme}
            onChange={(e) => handleChange("theme", e.target.value)}
          >
            <option value="Metallic">Metallic</option>
            <option value="Dark">Dark</option>
            <option value="Light">Light</option>
          </select>
        </label>

        <button type="submit">Save Settings</button>
      </form>

      <Link to="/admin" className={styles.backLink}>
        ← Back to Dashboard
      </Link>
    </div>
  );
}

export default AdminSettings;
