"use client";
import React from "react";
import styles from "./page.module.css";
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";
import Widget from "@/components/widgets/Widget";

const Dashboard = () => {
  return (
    <div className={styles.home}>
      <Sidebar />

      <div className={styles.homeContainer}>
        <Navbar />
        
        <div className={styles.widgets}>
            <Widget />
            <Widget />
            <Widget />
            <Widget />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
