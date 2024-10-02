import { FunctionComponent } from "react";

export type PaginationButtonGroupBaseType = {
  className?: string;
};

const PaginationButtonGroupBase: FunctionComponent<
  PaginationButtonGroupBaseType
> = ({ className = "" }) => {
  return (
    <button
      style={{
        cursor: "pointer",
        border: "none",
        padding: "10px 15px",
        backgroundColor: "#fff",
        borderRight: "1px solid #d0d5dd",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
      }}
      className={className}
    >
      <div
        style={{
          position: "relative",
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "600",
          fontFamily: "Lato",
          color: "#344154",
          textAlign: "left",
          display: "inline-block",
          minWidth: "32px",
        }}
      >
        Next
      </div>
      <img
        style={{
          height: "20px",
          width: "20px",
          position: "relative",
          overflow: "hidden",
          flexShrink: "0",
        }}
        alt=""
        src="/arrowright.svg"
      />
    </button>
  );
};

export default PaginationButtonGroupBase;
