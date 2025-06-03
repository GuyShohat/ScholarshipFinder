import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UserLogin.module.css";

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

    // שמור התחברות של יוזר (לא אדמין!)
// בתוך handleLogin
localStorage.setItem("isUserAuthenticated", "true");
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
    </div>
  );
}

export default UserLogin;
