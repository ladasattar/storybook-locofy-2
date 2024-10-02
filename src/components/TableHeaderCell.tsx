import { FunctionComponent } from "react";
import TableHeader from "./TableHeader";

export type TableHeaderCellType = {
  className?: string;
};

const TableHeaderCell: FunctionComponent<TableHeaderCellType> = ({
  className = "",
}) => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        backgroundColor: "#f9fafb",
        borderBottom: "1px solid #eaecf0",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "13px 24px 11px",
        textAlign: "left",
        fontSize: "12px",
        color: "#475467",
        fontFamily: "Lato",
      }}
      className={className}
    >
      <TableHeader />
    </div>
  );
};

export default TableHeaderCell;
