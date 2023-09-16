"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../../assets/css/auth.module.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignup = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup Success", response.data);
      router.push("/login");
    } catch (error) {
      console.log("Signup Failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className={styles.container}>
      <div className={styles.authContainer}>
        <div className={styles.authHeader}>{loading ? "Processing..." : "Registration Page!"}</div>
        <form action="#!" className={styles.authForm} onSubmit={onSignup}>
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
              value={user.username}
              onChange={(e) => setUser({...user, username:e.target.value})}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="email">
              Email
            </label>
            <input
              className={styles.formInput}
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={(e) => setUser({...user, email:e.target.value})}
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
              value={user.password}
              onChange={(e) => setUser({...user, password:e.target.value})}
              required
            />
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.authButton}>{buttonDisabled ? "no Register" : "Register" }</button>
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
