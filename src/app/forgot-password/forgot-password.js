"use client";
import React from "react";
import Link from "next/link";
import styles from "../../../assets/css/auth.module.css";

const ForgotPassword = () => {
  return (
    <div className={styles.container}>
      <div className={styles.authContainer}>
        <div className={styles.authHeader}>Forgot Password Page!</div>
        <form className={styles.authForm}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="email">
              Email
            </label>
            <input
              className={styles.formInput}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.authButton}>Recover</button>
          </div>
        </form>
        <div className={styles.authFooter}>
          <Link href={"/login"}>
            Back to Login Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
