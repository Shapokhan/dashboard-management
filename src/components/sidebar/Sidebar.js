import styles from './sidebar.module.css';
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <Link href={"/dashboard"}>
          <span className={styles.logo}>Dashboard</span>
        </Link>
      </div>
      <hr className={styles.horizaltalLine} />
      <div className={styles.center}>
        <ul className={styles.sidebarItems}>
          <p className={styles.title}>MAIN</p>
          <li>
            <Link href={"/dashboard"}>
              <DashboardIcon className={styles.icon} />
              <span>Dashboard</span>
            </Link>
          </li>
          <p className={styles.title}>LISTS</p>
          <li>
            <Link href={"/list"}>
              <PersonOutlineIcon className={styles.icon} />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <StoreIcon className={styles.icon} />
            <span>Products</span>
          </li>
          <li>
            <CreditCardIcon className={styles.icon} />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className={styles.icon} />
            <span>Delivery</span>
          </li>
          {/*
          <p className={styles.title}>USEFUL</p>
          <li>
            <InsertChartIcon className={styles.icon} />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className={styles.icon} />
            <span>Notifications</span>
          </li>
          <p className={styles.title}>SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className={styles.icon} />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className={styles.icon} />
            <span>Logs</span>
          </li> 
          */}
          <li>
            <SettingsApplicationsIcon className={styles.icon} />
            <span>Settings</span>
          </li>
          <p className={styles.title}>USER</p>
          <li>
            <AccountCircleOutlinedIcon className={styles.icon} />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className={styles.icon} />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      {/* <div className={styles.bottom}>
        <div className={styles.colorOption}></div>
        <div className={styles.colorOption}></div>
      </div> */}
    </div>
  );
};

export default Sidebar;
