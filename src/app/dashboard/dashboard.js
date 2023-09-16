"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";
import Widget from "@/components/widgets/Widget";
import Featured from "@/components/featured/Featured";
import Chart from "@/components/chart/Chart";
import Table from "@/components/table/Table";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      // Make the API request using axios or fetch
      const response = await axios.get('/api/users/me');
      // Update the state with the API response data
      const userData = response.data.data;
      setData(userData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData()
  }, []);
  return (
    <div className={styles.home}>

      <Sidebar />
      <div className={styles.homeContainer}>

        <Navbar user={data} />
        <div className={styles.widgets}>
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>

        <div className={styles.charts}>
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
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
