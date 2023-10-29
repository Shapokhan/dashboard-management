"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../../assets/css/auth.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import CustomInput from "@/components/customFields/CustomInput";
import CustomLabel from "@/components/customFields/CustomLabel";

const Login = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onLogin = async (event) => {
    event.preventDefault();

    // Custom validation logic
    const validationErrors = {};

    if (!user.email) {
      validationErrors.email = "Email is required";
    } else if (!isValidEmail(user.email)) {
      validationErrors.email = 'Invalid email address';
    }
    if (!user.password) {
      validationErrors.password = "Password is required";
    } else if( user.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters long"; 
    }

    if (Object.keys(validationErrors).length === 0) {
      // Validation passed, handle form submission
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
    } else {
      // Validation failed, handle errors
      setErrors(validationErrors);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (
    <div className={styles.container}>
      <div className={styles.authContainer}>
        <div className={styles.authHeader}>
          {loading ? "Processing..." : "Login Page!"}
        </div>
        <form action="#!" className={styles.authForm} onSubmit={onLogin}>
          <div className={styles.formGroup}>
            <CustomLabel 
              className={styles.formLabel}
              htmlFor="email"
              label="Email"
            />
            <CustomInput
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={handleChange}
              error={errors.email}
              className={styles.formInput} // Pass the custom class to the CustomInput component
            />
          </div>

          <div className={styles.formGroup}>
            <CustomLabel 
              className={styles.formLabel}
              htmlFor="password"
              label="Password"
            />

            <CustomInput
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={user.password}
              onChange={handleChange}
              error={errors.password}
              className={styles.formInput} // Pass the custom class to the CustomInput component
            />
          </div>

          <div className={styles.buttonContainer}>
            <button className={styles.authButton}>
              {buttonDisabled ? "no Login" : "Login"}
            </button>
          </div>
        </form>
        <div className={styles.authFooter}>
          <Link href={"forgot-password"} className={styles.forgotPassword}>
            Forgot Password?
          </Link>
          <Link className={styles.registerLink} href={"/register"}>
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
