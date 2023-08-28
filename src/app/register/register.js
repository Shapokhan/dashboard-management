"use client";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

const Register = () => {
  return (
    <div class={styles.registerContainer}>
      <div class={styles.registerHeader}>Registration Page!</div>
      <form class={styles.registerForm}>
        <div class={styles.formGroup}>
          <label class={styles.formLabel} htmlFor="username">
            Username
          </label>
          <input
            class={styles.registerInput}
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
            class={styles.registerInput}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className={styles.buttonContainer}>
          <button class={styles.registerButton}>Register</button>
        </div>
      </form>
      <Link class={styles.loginLink} href={"/login"}>
        Already have an account? Login here
      </Link>
    </div>
  );
};

export default Register;
