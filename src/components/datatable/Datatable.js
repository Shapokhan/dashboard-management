"use client";
import styles from "./Datatable.module.css";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import Link from "next/link";


export default function DataTable() {
  const actionColumn = [{ field: "action", headerName: "Action", width: 200, 
    renderCell: () => {
      return (
        <div className={styles.cellAction}>
          <Link href={"/single"} style={{textDecoration:"none"}}>
            <div className={styles.viewButton}>View</div>
          </Link>
          <div className={styles.deleteButton}>Delete</div>
        </div>
      )}
  }];
  return (
    <div className={styles.datatable}>
      <div className={styles.datatableTitle}>
        Add New User
        <Link href={"/new"} style={{textDecoration:"none"}} className={styles.link}>
          Add New
        </Link>
      </div>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
