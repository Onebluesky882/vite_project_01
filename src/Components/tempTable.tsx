import styled, { css } from "styled-components";

// Define types for props
export type TableProps = {
  id: "A1" | "A2" | "A3" | "A4" | "A5" | "B1" | "B2" | "B3" | "B4";
  status: "Available" | "reserved" | "occupied";
};

export type TableListProps = {
  tableList: TableProps[];
};
type CornerProps = {
  position: "top-center" | "right-center" | "Bottom-center" | "left-center";
};

const TableFront = ({ tableList }: TableListProps) => {};

const getStatusStyles = (status: TableProps["status"]) => {
  switch (status) {
    case "Available":
      return css`
        background-color: #bbf7d0; /* bg-green-200 */
      `;
    case "reserved":
      return css`
        background-color: #fed7aa; /* bg-orange-200 */
      `;
    case "occupied":
      return css`
        background-color: #fecaca; /* bg-red-200 */
      `;
    default:
      return css`
        background-color: #e5e7eb; /* bg-gray-200 */
      `;
  }
};

const Chair = ({ id, status }: TableProps) => (
  <TableContainer id={id} status={status}>
    <div className="Absolute inset-0 flex items-center justify-center">
      <span>โต๊ะ</span> <CenteredText>{id}</CenteredText>
    </div>
    <AbsoluteWrapper>
      <CornerDecoration position="top-center" />
      <CornerDecoration position="right-center" />
      <CornerDecoration position="Bottom-center" />
      <CornerDecoration position="left-center" />
    </AbsoluteWrapper>
  </TableContainer>
);

const Tables = ({
  id,
  status,
}: TableProps & { position: "left" | "right" }) => {
  const commonStyles: { [key: string]: React.CSSProperties } = {
    right: {
      listStyleType: "none",
      paddingTop: "60px",
      paddingBottom: "60px",
      paddingRight: "70px",
      paddingLeft: "40px",
      backgroundColor: "#f7e7bd",
      marginTop: "10px",
    },
    left: {
      display: "flex",
      position: "relative",
      flexDirection: "column",
      margin: "20px",
      padding: "20px",
    },
  };

  return (
    <div
      style={{
        display: "flex",
        padding: "10px",
        border: "1px solid black",
        borderRadius: "18px",
        backgroundColor: "#BFBFBF",
      }}
    >
      <div
        style={{
          ...commonStyles["left"],
        }}
      >
        <Chair id={id} status={status} />
      </div>
      <div
        style={{
          ...commonStyles["right"],
        }}
      >
        <Chair id={id} status={status} />
      </div>
    </div>
  );
};
const CenteredText = styled.span`
  color: #4b5563;
  font-weight: bold;
`;

const AbsoluteWrapper = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CornerDecoration = styled.div<CornerProps>`
  position: absolute;
  width: 1rem;
  height: 1rem;
  background-color: white;
  border-radius: 0.125rem;
  transform: rotate(45deg);
  ${({ position }) => getCornerPositionStyles(position)}
`;

const TableContainer = styled.div<TableProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem; /* 24 * 0.25rem */
  height: 6rem; /* 24 * 0.25rem */
  border-radius: 9999px; /* full */
  position: relative;
  margin: 30px;
  ${({ status }) => getStatusStyles(status as TableProps["status"])}
`;
const getCornerPositionStyles = (position: CornerProps["position"]) => {
  switch (position) {
    case "top-center":
      return css`
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
      `;
    case "right-center":
      return css`
        top: 50%;
        right: 0;
        transform: translate(50%, -50%) rotate(45deg);
      `;
    case "Bottom-center":
      return css`
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 50%) rotate(45deg);
      `;
    case "left-center":
      return css`
        top: 50%;
        left: 0;
        transform: translate(-50%, -50%) rotate(45deg);
      `;
    default:
      return "";
  }
};

// Assuming getStatusStyles and getCornerPositionStyles are defined elsewhere
export default Tables;
