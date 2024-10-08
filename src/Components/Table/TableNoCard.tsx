import { useContext, useState } from "react";
import { GlobalContext } from "@/Hooks/GlobalContext";
import Menu from "@/Page/Menu";
import { ConfirmTable } from "./ConfirmTable";
import { useNavigate, useParams } from "react-router-dom";
import { Table } from "@/types/TableOrder";

const TableNoCard = () => {
  const { table, submitTable } = useContext(GlobalContext).tableProvider;
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  let navigate = useNavigate();
  const { tableNo } = useParams();

  const handleConfirm = async () => {
    setIsPopupOpen(false);
    await submitTable(tableNo as Table["tableNo"]);
    navigate(`/${tableNo}`);
    setIsPopupOpen(true);
  };

  const hadleCancel = () => {
    setIsPopupOpen(false);
    navigate(`/tables`);
  };

  return (
    <div>
      {" "}
      {!isPopupOpen && (
        <ConfirmTable
          message={"confirm to chose a table"}
          onConfirm={handleConfirm}
          onCancel={hadleCancel}
          isOpen={isPopupOpen}
        />
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", margin: " auto" }}></div>
        <div style={{ display: "flex", margin: "auto" }}></div>

        <div style={{ backgroundColor: "blue", display: "flex" }}></div>

        <Menu />
      </div>
    </div>
  );
};

export default TableNoCard;
