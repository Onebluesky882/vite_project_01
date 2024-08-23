export const TableCard = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      style={{
        display: "flex",
        margin: " auto",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          padding: "30px",
          background: "#F6ECD2",
          margin: "20px",
          borderRadius: "20px",

          // Set the background to red here
        }}
      >
        <h2 style={{ textAlign: "center" }}>TABLE</h2>
        <div style={{ display: "flex" }}>{children}</div>
      </div>
    </div>
  );
};

export const TableLeftSide = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </div>
  );
};
export const TableRightSide = ({ children }: React.PropsWithChildren) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>{children}</div>
  );
};
