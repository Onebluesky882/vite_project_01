import { useContext, useState } from "react";
import { GlobalContext } from "@/Hooks/GlobalContext";
import Menu from "@/Page/Menu";
import { ConfirmTable } from "./ConfirmTable";

const TableNoCard = () => {
  const { table } = useContext(GlobalContext).tableProvider;
  const { submitTable } = useContext(GlobalContext).tableProvider;

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // confirm
  const handleConfirm = () => {
    setIsPopupOpen(true);
  };

  const hadleCancel = () => {
    setIsPopupOpen(true);
  };
  return (
    <div>
      {" "}
      {!isPopupOpen && (
        <ConfirmTable
          message={"confirm to chose a table"}
          onConfirm={handleConfirm}
          onCancel={hadleCancel}
          isOpen={false}
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
