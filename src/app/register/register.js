"use client";
import React from "react";
import Link from "next/link";
import styles from "../../../assets/css/auth.module.css";

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.authContainer}>
        <div className={styles.authHeader}>Registration Page!</div>
        <form className={styles.authForm}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="username">
              Username
            </label>
            <input
              className={styles.formInput}
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
              className={styles.formInput}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.authButton}>Register</button>
          </div>
        </form>
        <div className={styles.authFooter}>
          <Link href={"/login"}>
            Already have an account? Login here
          </Link>
        </div>
      </div></div>
  );
};

export default Register;
