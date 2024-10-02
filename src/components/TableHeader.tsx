import { FunctionComponent } from "react";

export type TableHeaderType = {
  className?: string;
};

const TableHeader: FunctionComponent<TableHeaderType> = ({
  className = "",
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "left",
        fontSize: "12px",
        color: "#475467",
        fontFamily: "Lato",
      }}
      className={className}
    >
      <div
        style={{ position: "relative", lineHeight: "18px", fontWeight: "500" }}
      >
        Products
      </div>
    </div>
  );
};

export default TableHeader;
