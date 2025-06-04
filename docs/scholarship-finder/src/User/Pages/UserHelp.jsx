// src/User/Pages/UserHelp.jsx

import React from "react";
import styles from "./UserHelp.module.css";
import UserHeader from "../Components/userHeader";
import { useNavigate } from "react-router-dom";

export default function UserHelp() {
  const navigate = useNavigate();

  return (
    <div className={styles.helpPage}>
      <UserHeader />

      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>Help Center</h1>

        <section className={styles.faqSection}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqItem}>
            <h3>How do I save a scholarship?</h3>
            <p>Go to the Scholarships page and click the "Save" button next to any scholarship.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>How can I track my applications?</h3>
            <p>View your saved scholarships and see the status in the dashboard.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>Can I update my account information?</h3>
            <p>Yes, go to the Settings page to update your username, email, or password.</p>
          </div>
        </section>

        <section className={styles.contactSection}>
          <h2>Contact Support</h2>
          <form className={styles.contactForm} onSubmit={(e) => { e.preventDefault(); alert("Message sent!"); }}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Describe your issue..." required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>

        <button className={styles.backBtn} onClick={() => navigate("/user/dashboard")}>
          ← Back to Dashboard
        </button>
      </main>
    </div>
  );
}
