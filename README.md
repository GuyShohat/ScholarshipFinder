# 🎓 ScholarshipFinder

מערכת ווב חכמה לאיתור וניהול מלגות לסטודנטים – בהתאמה אישית, עם ממשק משתמש אינטואיטיבי ודשבורד מתקדם.

---

## ✨ על המערכת

ScholarshipFinder נועדה לסייע לסטודנטים למצוא ולהגיש מועמדות למלגות שמתאימות לפרופיל האישי שלהם. המערכת מבוססת Web, כוללת שני ממשקים:
- 🧑‍🎓 ממשק משתמש רגיל (User)
- 🛠️ ממשק ניהול (Admin)

---

## 🚀 תכונות עיקריות

- 🎯 התאמת מלגות לפי קריטריונים (גיל, רקע אישי, תחום לימודים ועוד)
- 📋 טופס יצירת מלגה בהתאמה אישית עם שמירת נתונים
- 📊 דשבורד אישי למעקב אחרי מועמדויות
- 🔔 הצגת דדליינים עתידיים בטבלה
- 🛡️ מערכת התחברות מבוססת localStorage עם הפרדה בין משתמשים
- 🧑‍💻 ממשק אדמין לניהול המלגות והסטטיסטיקות

---

## 🛠️ טכנולוגיות בשימוש

| Layer       | Tech Stack                              |
|-------------|------------------------------------------|
| Frontend    | React.js, Context API, CSS Modules       |
| State Mgmt  | LocalStorage (mock DB)                   |
| Backend     | ללא (mock only – ללא שרת בפועל)         |
| Hosting     | פיתוח מקומי באמצעות Vite                |
| Versioning  | Git, GitHub                              |

---

## ⚙️ התקנה והרצה מקומית

1. פתח את הטרמינל בתוך תיקיית `scholarship-finder`
2. התקן את התלויות:


npm install
והרץ
npm run dev


מבנה:
```bash
scholarship-finder/
├── public/
├── src/
│   ├── Admin/
│   ├── User/
│   ├── Components/
│   ├── Pages/
│   └── ThemeContext.js
├── docs/
│   └── wireframes.docx
├── package.json
└── README.md

כל המסכים ההתחלתיים, התרשימים ושרטוטים זמינים תחת התיקייה /docs

קובץ wireframes.docx מכיל את תכנון המסכים

פרויקט זה הוגש כעבודת גמר בקורס Frontend Web Development

© 2025 Guy Shohat
