import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ThemeContext } from "../Context/ThemeContext";
import styles from "./Login.module.css";
export const Dashboard = () => {
  const { token, setIsAuth } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${theme === "light" ? styles.light : styles.dark}`}
    >
      <div className={styles.navbar}>
        <h2>Navbar</h2>
        <button
          onClick={() => {
            setIsAuth(false);
          }}
        >
          Logout
        </button>
      </div>
      <h1>Dashboard</h1>
      <h5>
        <span>This is the Token Received</span>
        <span>
          <h1>{token}</h1>
        </span>
      </h5>
    </div>
  );
};
