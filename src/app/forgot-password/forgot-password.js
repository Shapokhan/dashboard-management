"use client";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

const ForgotPassword = () => {
  return (
    <div className={styles.forgotContainer}>
      <div className={styles.forgotHeader}>Forgot Password Page!</div>
      <form className={styles.forgotForm}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="email">
            Email
          </label>
          <input
            className={styles.forgotInput}
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.forgotButton}>Recover</button>
        </div>
      </form>
      <Link className={styles.loginLink} href={"/login"}>
        Back to Login Page
      </Link>
    </div>
  );
};

export default ForgotPassword;
