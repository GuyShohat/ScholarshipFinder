// src/User/Pages/UserAddScholarship.jsx

import React, { useEffect, useState } from "react";
import styles from "./UserAddScholarship.module.css";
import { useNavigate } from "react-router-dom";
import UserHeader from "../Components/userHeader";
import {
  getUserData,
  saveUserData,
  getCurrentUserId,
  saveMatchedScholarships
} from "../utlis/userstorage";

const scholarshipTypes = [
  "מלגת סיוע כלכלי",
  "מלגת מצוינות אקדמית",
  "מלגת מעורבות חברתית",
  "מלגת יוצאי צבא",
  "מלגת חיילים בודדים",
  "מלגת סטודנטים ערבים",
  "מלגת עולים חדשים",
  "מלגת בני מיעוטים",
  "מלגת נשים במדעים",
  "מלגת איזור פריפריה"
];

export default function UserAddScholarship() {
  const navigate = useNavigate();
  const userId = getCurrentUserId();

  if (!userId) {
    alert("User not authenticated. Please login.");
    navigate("/user/login");
    return null;
  }

  const user = getUserData(userId);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    amount: "",
    deadline: ""
  });

  const [matchingOptions, setMatchingOptions] = useState([]);
  const [selectedMatches, setSelectedMatches] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user?.settings?.firstName || !user?.settings?.lastName) {
      alert("You must set your full name in the Settings before submitting.");
      navigate("/user/settings");
      return;
    }

    if (!user.matchedScholarships || user.matchedScholarships.length === 0) {
      const shuffled = [...scholarshipTypes].sort(() => 0.5 - Math.random());
      const howMany = Math.random() < 0.5 ? 1 : 2;
      const chosen = shuffled.slice(0, howMany);
      setMatchingOptions(chosen);
      saveMatchedScholarships(userId, chosen); // ✅ עדכון נכון של המשתמש
    } else {
      setMatchingOptions(user.matchedScholarships);
    }
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const toggleMatch = (match) => {
    setSelectedMatches((prev) =>
      prev.includes(match)
        ? prev.filter((m) => m !== match)
        : [...prev, match]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description || !formData.amount || !formData.deadline) {
      setError("Please fill in all fields.");
      return;
    }

    if (selectedMatches.length === 0) {
      alert("You must choose at least one of the matching scholarships.");
      return;
    }

    const d = new Date(formData.deadline);
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yyyy = d.getFullYear();
    const formattedDeadline = `${dd}/${mm}/${yyyy}`;

    const fullName = `${user.settings.firstName} ${user.settings.lastName}`;

    const newScholarships = selectedMatches.map((match) => ({
      ...formData,
      deadline: formattedDeadline,
      status: "Submitted",
      applicantName: fullName,
      matchingChoice: match,
      createdAt: new Date().toISOString()
    }));

    const existing = user.submittedApplications || [];
    const updated = [...newScholarships, ...existing];
    user.submittedApplications = updated;

    saveUserData(userId, {
  ...user,
  submittedApplications: updated,
  matchedScholarships: user.matchedScholarships || [] // 💡 חובה לוודא שלא יתאפס
});


    alert("Scholarship(s) submitted successfully.");
    navigate("/user/dashboard");
  };

  return (
    <div className={styles.container}>
      <UserHeader />
      <div className={styles.inner}>
        <h1>Add New Scholarship</h1>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label>Title:
            <input type="text" name="title" value={formData.title} onChange={handleChange} />
          </label>

          <label>Description:
            <textarea name="description" value={formData.description} onChange={handleChange} />
          </label>

          <label>Amount:
            <input type="number" name="amount" value={formData.amount} onChange={handleChange} />
          </label>

          <label>Deadline:
            <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} />
          </label>

          <div className={styles.matchingSection}>
            <h3>Matching Scholarships</h3>
            <div className={styles.matchingOptionsRow}>
              {matchingOptions.map((match, index) => (
                <label key={index} className={styles.matchingOptionCard}>
                  <input
                    type="checkbox"
                    value={match}
                    checked={selectedMatches.includes(match)}
                    onChange={() => toggleMatch(match)}
                  />
                  {match}
                </label>
              ))}
            </div>
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <button type="submit">Submit Scholarship</button>
        </form>

        <button className={styles.backBtn} onClick={() => navigate("/user/dashboard")}>
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
}
