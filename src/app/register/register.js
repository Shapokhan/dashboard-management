"use client";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

const Register = () => {
  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerHeader}>Registration Page!</div>
      <form className={styles.registerForm}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="username">
            Username
          </label>
          <input
            className={styles.registerInput}
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
            className={styles.registerInput}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.registerButton}>Register</button>
        </div>
      </form>
      <Link className={styles.loginLink} href={"/login"}>
        Already have an account? Login here
      </Link>
    </div>
  );
};

export default Register;
