"use client";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginHeader}>Login Page!</div>
      <form className={styles.loginForm}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="username">
            Username
          </label>
          <input
            className={styles.loginInput}
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="password">
            Password
          </label>
          <input
            className={styles.loginInput}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <Link href={"forgot-password"} className={styles.forgotPassword}>Forgot Password?</Link>

        <div className={styles.buttonContainer}>
          <button className={styles.loginButton}>Login</button>
        </div>
      </form>
      <Link className={styles.signupLink} href={"/register"}>
        Don't have an account? Sign up here
      </Link>
    </div>
  );
};

export default Login;
