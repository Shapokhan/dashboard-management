"use client";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

const ForgotPassword = () => {
  return (
    <div class={styles.forgotContainer}>
      <div class={styles.forgotHeader}>Forgot Password Page!</div>
      <form class={styles.forgotForm}>
        <div class={styles.formGroup}>
          <label class={styles.formLabel} htmlFor="email">
            Email
          </label>
          <input
            class={styles.forgotInput}
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className={styles.buttonContainer}>
          <button class={styles.forgotButton}>Recover</button>
        </div>
      </form>
      <Link class={styles.loginLink} href={"/login"}>
        Back to Login Page
      </Link>
    </div>
  );
};

export default ForgotPassword;
