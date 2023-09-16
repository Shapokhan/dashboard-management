"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../../assets/css/auth.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false)

  const onLogin = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login success");
      router.push("/dashboard");
    } catch (error) {
      console.log("Login failed", error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if(user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user])

  return (
    <div className={styles.container}>
    <div className={styles.authContainer}>
      <div className={styles.authHeader}>{loading ? "Processing..." : "Login Page!"}</div>
      <form action="#!" className={styles.authForm} onSubmit={onLogin}>
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
            onChange={(e) => setUser({...user, email: e.target.value})}
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
            <button className={styles.authButton}>{buttonDisabled ? "no Login" : "Login"}</button>
        </div>
      </form>
      <div className={styles.authFooter}>
      <Link href={"forgot-password"} className={styles.forgotPassword}>Forgot Password?</Link>
      <Link className={styles.registerLink} href={"/register"}>
        Register Now
      </Link>
      </div>
    </div>
    </div>
  );
};

export default Login;
