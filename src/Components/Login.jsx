import React from "react";
import styles from "./Login.module.css";
import { useContext, useState } from "react";
import { Dashboard } from "../Components/Dashboard";
import { AuthContext } from "../Context/AuthContext";
import { ThemeContext } from "../Context/ThemeContext";
import axios from "axios";

export const Login = () => {
  const { isAuth, handleAuth } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "https://reqres.in/api/login",
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res.data.token);
        handleAuth(res.data.token);
      })
      .catch((err) => {
        setIsError(err);
      })
      .finally((res) => {
        setIsLoading(false);
      });
    setEmail("");
    setPassword("");
  };
  return (
    <>
      {isAuth ? (
        <div className={theme === "light" ? styles.light : styles.dark}>
          {isLoading ? (
            <h1>....Loading</h1>
          ) : isError ? (
            <h1>{isError}</h1>
          ) : (
            <Dashboard />
          )}
        </div>
      ) : (
        <div
          className={`${styles.container} ${
            theme === "light" ? styles.light : styles.dark
          }`}
        >
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" />
          </form>
        </div>
      )}
    </>
  );
};
