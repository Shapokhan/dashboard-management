"use client";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

const Login = () => {
  return (
    <div class={styles.loginContainer}>
      <div class={styles.loginHeader}>Login Page!</div>
      <form class={styles.loginForm}>
        <div class={styles.formGroup}>
          <label class={styles.formLabel} htmlFor="username">
            Username
          </label>
          <input
            class={styles.loginInput}
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            required
          />
        </div>
        <div class={styles.formGroup}>
          <label class={styles.formLabel} htmlFor="password">
            Password
          </label>
          <input
            class={styles.loginInput}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <Link href={"forgot-password"} className={styles.forgotPassword}>Forgot Password?</Link>

        <div className={styles.buttonContainer}>
          <button class={styles.loginButton}>Login</button>
        </div>
      </form>
      <Link class={styles.signupLink} href={"/register"}>
        Don't have an account? Sign up here
      </Link>
    </div>
  );
};

export default Login;
