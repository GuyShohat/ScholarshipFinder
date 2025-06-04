import React, { useState, useEffect } from 'react';
import styles from './AdminScholarships.module.css';
import { Link } from 'react-router-dom';

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

const defaultScholarships = [
  { id: 1, amount: "₪7,000", deadline: "2025-07-01", applicants: 42, type: "מלגת סיוע כלכלי" },
  { id: 2, amount: "₪5,000", deadline: "2025-08-15", applicants: 27, type: "מלגת מצוינות אקדמית" },
  { id: 3, amount: "₪3,000", deadline: "2025-09-10", applicants: 12, type: "מלגת מעורבות חברתית" }
];

const namePool = [
  "אביב אברהמי", "אביב דרורי", "אביב סויסה", "אביגיל אברהמי", "אביגיל אלקיים", "אביגיל בן דוד",
  "אביגיל יצחקי", "אביגיל רוזנברג", "אביגיל רפאלי", "אביה זילברמן", "אביה קידר", "אביה שפר",
  "אור בן דוד", "אור קונפינו", "אור פלדמן", "אור רפאלי", "אורי בן דוד", "אורי כץ", "אורי מלכה",
  "אורי מזרחי", "איילת אלקיים", "איילת מלמד", "איילת סגל", "איילת שלו", "אנה כהן", "אנה רוזנברג",
  "אנה רפאלי", "אפרת בן דוד", "אפרת כהן", "אפרת קידר", "אפרת שמש", "בר בן דוד", "בר זילברמן",
  "בר כץ", "בר שטרן", "בר שקד", "גיא דרורי", "גיא כהן", "גיא פלדמן", "גיא רוזנברג", "גלעד ברק",
  "גלעד בן ארי", "גלעד כץ", "דן הרשקוביץ", "דן סויסה", "דן רייכמן", "דינה אלקיים", "דינה כץ",
  "דינה שטרן", "דקל הרשקוביץ", "דקל זילברמן", "דקל רוזנברג", "הילל רוזנברג", "הילה בן דוד",
  "הילה כץ", "הילה מזרחי", "הילה שקד", "חזן כהן", "יואב בן דוד", "יואב רוזנברג", "יואב רפאלי",
  "יובל אברהמי", "יובל מלכה", "יובל פלדמן", "יובל שפר", "יגאל סויסה", "יגאל קידר", "יגאל רוזנברג",
  "יגאל רפאלי", "יגאל שמש", "יגאל שלו", "ליאור אלון", "ליאור בן דוד", "ליאור סויסה", "ליאור רפאלי",
  "מאיה אלון", "מאיה פרידמן", "מאיה שקד", "נעמה ברק", "נעמה כהן", "נעמה רוזנברג", "נעם מזרחי",
  "נעם פלדמן", "נעם רפאלי", "נטע סויסה", "נטע שלו", "נועם אלון", "נועם ברק", "נועם לוי",
  "נועם פרידמן", "נועם רפאלי", "נטע רוזנברג", "עדי בן דוד", "עדי סויסה", "עדי שמש", "עדן בן ארי",
  "עדן מזרחי", "עדן סגל", "עדן שקד", "עומר רוזנברג", "עומר רפאלי", "עמרי קידר", "עמרי מלמד",
  "עמית ברק", "עמית כהן", "עמית סגל", "עמית רפאלי", "עמית שקד", "עמית שמש", "ענבל בן דוד",
  "ענבל דרורי", "ענבל רוזנברג", "ענבל רפאלי", "עפר כהן", "עפר סויסה", "עפר קידר", "עפר רפאלי",
  "צופיה זילברמן", "צופיה לוי", "צופיה רוזנברג", "רון כהן", "רון מלמד", "רון סויסה", "רון רפאלי",
  "רוני בן דוד", "רוני פלדמן", "רוני שקד", "רועי בן דוד", "רועי לוי", "רועי מזרחי", "רועי שטרן",
  "רז אלון", "רז רפאלי", "רז שלו", "רז שמש", "רז שקד", "רחל מזרחי", "רחל שמש", "רחל שטרן",
  "שחר דרורי", "שחר לוי", "שחר שקד", "שי אלקיים", "שי בן דוד", "שי סויסה", "שי רוזנברג",
  "שי רפאלי", "שירה כהן", "שירה מזרחי", "שירה רוזנברג", "שני כהן", "שני קידר", "שני רוזנברג",
  "שני רפאלי", "שקד בן דוד", "שקד לוי", "שקד רפאלי", "תום בן דוד", "תום לוי", "תום שטרן",
  "תמר הרשקוביץ", "תמר כהן", "תמר קפלן", "תמר שפר"
];


const randomRole = () => {
  const roles = ["Pending", "Approved", "Declined"];
  return roles[Math.floor(Math.random() * roles.length)];
};

function AdminScholarships() {
  const [scholarships, setScholarships] = useState([]);
  const [editedScholarships, setEditedScholarships] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("adminScholarships");
    const parsed = saved ? JSON.parse(saved) : defaultScholarships;
    setScholarships(parsed);
    setEditedScholarships(parsed);
  }, []);

  const handleChange = (id, field, value) => {
    const updated = editedScholarships.map(s =>
      s.id === id ? { ...s, [field]: value } : s
    );
    setEditedScholarships(updated);
  };

  const handleSave = (id) => {
    const updated = scholarships.map(s =>
      s.id === id ? editedScholarships.find(e => e.id === id) : s
    );
    setScholarships(updated);
    setEditedScholarships(updated);
    localStorage.setItem("adminScholarships", JSON.stringify(updated));

    const sch = editedScholarships.find(e => e.id === id);
    const existingUsers = JSON.parse(localStorage.getItem("adminUsers") || "[]");

    const usedNames = existingUsers.map(u => u.name);
    const availableNames = namePool.filter(name => !usedNames.includes(name));

    if (availableNames.length === 0) {
      alert("אין יותר שמות פנויים. מחק משתמשים או הוסף לרשימה.");
      return;
    }

    const newName = availableNames[Math.floor(Math.random() * availableNames.length)];

    const newUser = {
      id: `user-${id}-${Date.now()}`,
      name: newName,
      email: `user${id}${Date.now()}@example.com`,
      role: randomRole(),
      scholarship: sch.type
    };

    localStorage.setItem("adminUsers", JSON.stringify([...existingUsers, newUser]));
    alert("User added successfully!");
  };

  return (
    <div className={styles.container}>
      <h2>Manage Scholarships</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Deadline</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {editedScholarships.map((s) => (
            <tr key={s.id}>
              <td>
                <input
                  type="text"
                  value={s.amount}
                  onChange={(e) => handleChange(s.id, "amount", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="date"
                  value={s.deadline}
                  onChange={(e) => handleChange(s.id, "deadline", e.target.value)}
                />
              </td>
              <td>
                <select
                  value={s.type}
                  onChange={(e) => handleChange(s.id, "type", e.target.value)}
                >
                  {scholarshipTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </td>
              <td>
                <button className={styles.saveButton} onClick={() => handleSave(s.id)}>
                  Save
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/admin" className={styles.backLink}>
        ← Back to Dashboard
      </Link>
    </div>
  );
}

export default AdminScholarships;
