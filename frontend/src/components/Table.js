import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './style/Table.css'

// Static Data for the table
const tableData = [
  { name: "Naman", role: "Admin", createdOn: "2002-05-17", status: "Active", action: "Edit" },
  { name: "Vansh", role: "User", createdOn: "2024-02-20", status: "Inactive", action: "Edit" },
  { name: "Ram", role: "Editor", createdOn: "2024-03-15", status: "Active", action: "Edit" },
  { name: "Harsh", role: "Admin", createdOn: "2024-04-22", status: "Active", action: "Edit" },
  { name: "Samar", role: "User", createdOn: "2024-05-13", status: "Inactive", action: "Edit" },
  { name: "Naman", role: "Admin", createdOn: "2002-05-17", status: "Active", action: "Edit" },
  { name: "Vansh", role: "User", createdOn: "2024-02-20", status: "Inactive", action: "Edit" },
  { name: "Ram", role: "Editor", createdOn: "2024-03-15", status: "Active", action: "Edit" },
  { name: "Harsh", role: "Admin", createdOn: "2024-04-22", status: "Active", action: "Edit" },
  { name: "Samar", role: "User", createdOn: "2024-05-13", status: "Inactive", action: "Edit" },
];

const Table = () => {
  const user = JSON.parse(localStorage.getItem("user")) || { name: "Guest" };
  const handleEditClick = () => {
    toast.warning("You don't have access to edit!");
  };

  return (
    <div>
      <h2>Welcome, <span>{user.name}!</span></h2>
      <h3>User Information</h3>

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px", borderColor: "black" }}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>S. No</th>
            <th style={styles.tableHeader}>Name</th>
            <th style={styles.tableHeader}>Role</th>
            <th style={styles.tableHeader}>Account Created On</th>
            <th style={styles.tableHeader}>Status</th>
            <th style={styles.tableHeader}>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
              <td style={styles.tableData}>{index + 1}</td>
              <td style={styles.tableData}>{row.name}</td>
              <td style={styles.tableData}>{row.role}</td>
              <td style={styles.tableData}>{row.createdOn}</td>
              <td style={styles.tableData}>{row.status}</td>
              <td style={styles.tableData}>
                <button style={styles.actionButton}  onClick={handleEditClick}>{row.action}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Styles for the table
const styles = {
  tableHeader: {
    padding: "10px",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
  },
  tableData: {
    padding: "10px",
    textAlign: "left",
    borderBottom: "1px solid #f4f4f4",
  },
  evenRow: {
    backgroundColor: "#f9f9f9",
  },
  oddRow: {
    backgroundColor: "#fff",
  },
  actionButton: {
    padding: "5px 10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
  },
};

export default Table;
