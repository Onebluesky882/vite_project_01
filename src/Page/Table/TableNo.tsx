import { useParams } from "react-router";

import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/Hooks/GlobalContext";

const TableNo = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Table {}</h1>
      <div style={styles.section}>
        <p>
          Status: <span style={styles.bold}>{}</span>
        </p>
        <p>Capacity: </p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subtitle}>Current Order</h2>
      </div>
      <div style={styles.section}>
        <h3 style={styles.subtitle}>Update Status</h3>
        <div style={styles.buttonContainer}></div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "24px",
    maxWidth: "500px",
    margin: "0 auto",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "16px",
  },
  subtitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  section: {
    marginBottom: "16px",
  },
  bold: {
    fontWeight: "bold",
  },
  list: {
    listStyleType: "disc",
    paddingLeft: "20px",
    marginBottom: "8px",
  },
  buttonContainer: {
    display: "flex",
    gap: "8px",
  },
  button: {
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },
  buttonAvailable: {
    backgroundColor: "#10B981",
  },
  buttonCleaning: {
    backgroundColor: "#F59E0B",
  },
  buttonBooked: {
    backgroundColor: "#EF4444",
  },
  loading: {
    textAlign: "center",
    fontSize: "18px",
    marginTop: "20px",
  },
  notFound: {
    textAlign: "center",
    fontSize: "18px",
    color: "red",
    marginTop: "20px",
  },
};

export default TableNo;
