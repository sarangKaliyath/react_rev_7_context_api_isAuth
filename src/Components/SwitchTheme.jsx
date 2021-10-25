import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import styles from "./Login.module.css";

export const SwitchTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`${theme === "light" ? styles.light : styles.dark}`}>
      <button
        onClick={() => {
          toggleTheme(theme === "light" ? "dark" : "light");
        }}
      >
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
};
