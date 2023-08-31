"use client";
import React from "react";
import styles from "./page.module.css";
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";
import Widget from "@/components/widgets/Widget";
import Featured from "@/components/featured/Featured";
import Chart from "@/components/chart/Chart";
import Table from "@/components/table/Table";

const Dashboard = () => {
  return (
    <div className={styles.home}>

      <Sidebar />
      <div className={styles.homeContainer}>

        <Navbar />
        <div className={styles.widgets}>
<<<<<<< Updated upstream
          <Widget />
          <Widget />
          <Widget />
          <Widget />
=======
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earning" />
            <Widget type="balance" />
>>>>>>> Stashed changes
        </div>

        <div className={styles.charts}>
          <Featured />
          <Chart  title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>

        <div className={styles.listContainer}>
          <div className={styles.listTitle}>Latest Transactions</div>
          <Table />
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
