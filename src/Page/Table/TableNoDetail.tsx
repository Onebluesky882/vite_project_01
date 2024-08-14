import { useParams } from "react-router";

import React, { useEffect, useState } from "react";

type TableDetails = {
  number: string;
  status: "AVAILABLE" | "CLEANING" | "BOOKED";
  capacity: number;
  currentOrder?: {
    id: number;
    items: string[];
    total: number;
  };
};

const TableDetailPage = () => {
  const { tableId } = useParams<{ tableId: string }>();
  const [tableDetails, setTableDetails] = useState<TableDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTableDetails();
  }, [tableId]);

  const fetchTableDetails = async () => {
    // ... (same as before)
  };

  const updateTableStatus = async (newStatus: TableDetails["status"]) => {
    // ... (same as before)
  };

  if (loading) return <div style={styles.loading}>Loading...</div>;
  if (!tableDetails) return <div style={styles.notFound}>Table not found</div>;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Table {tableDetails.number}</h1>
      <div style={styles.section}>
        <p>
          Status: <span style={styles.bold}>{tableDetails.status}</span>
        </p>
        <p>
          Capacity:{" "}
          <span style={styles.bold}>{tableDetails.capacity} people</span>
        </p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subtitle}>Current Order</h2>
        {tableDetails.currentOrder ? (
          <>
            <p>Order ID: {tableDetails.currentOrder.id}</p>
            <ul style={styles.list}>
              {tableDetails.currentOrder.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p style={styles.bold}>
              Total: ${tableDetails.currentOrder.total.toFixed(2)}
            </p>
          </>
        ) : (
          <p>No current order</p>
        )}
      </div>
      <div style={styles.section}>
        <h3 style={styles.subtitle}>Update Status</h3>
        <div style={styles.buttonContainer}>
          <button
            onClick={() => updateTableStatus("AVAILABLE")}
            style={{ ...styles.button, ...styles.buttonAvailable }}
          >
            Set Available
          </button>
          <button
            onClick={() => updateTableStatus("CLEANING")}
            style={{ ...styles.button, ...styles.buttonCleaning }}
          >
            Set Cleaning
          </button>
          <button
            onClick={() => updateTableStatus("BOOKED")}
            style={{ ...styles.button, ...styles.buttonBooked }}
          >
            Set Booked
          </button>
        </div>
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

export default TableDetailPage;
