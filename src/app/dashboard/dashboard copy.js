"use client";
import React from "react";
import styles from "./page.module.css";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Dashboard = () => {
  return (
    <div className={styles.gridContainer}>
        <header className={styles.header}>
            <div className={styles.menuIcon}>
                <MenuOutlinedIcon fontSize="large" />     
            </div>  

            <div className={styles.headerLeft}>
               <SearchOutlinedIcon fontSize="large" />
            </div>

            <div className={styles.headerRight}>
                <NotificationsActiveOutlinedIcon className={styles.materialIconsOutlined} />
                <EmailOutlinedIcon className={styles.materialIconsOutlined} />
                <AccountCircleOutlinedIcon className={styles.materialIconsOutlined} />
            </div>

        </header>

        <aside className={styles.sidebar}>

        </aside>

        <main className={styles.mainContainer}>

        </main>
    </div>
  );
};

export default Dashboard;
