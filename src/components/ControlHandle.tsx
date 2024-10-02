import { FunctionComponent } from "react";

export type ControlHandleType = {
  className?: string;
};

const ControlHandle: FunctionComponent<ControlHandleType> = ({
  className = "",
}) => {
  return (
    <div
      style={{
        height: "24px",
        width: "24px",
        position: "absolute",
        margin: "0",
        top: "calc(50% - 12px)",
        right: "-12px",
        borderRadius: "12px",
        backgroundColor: "#fff",
        border: "1.5px solid #e83c70",
        boxSizing: "border-box",
        zIndex: "1",
      }}
      className={className}
    >
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          boxShadow:
            "0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
          borderRadius: "12px",
          backgroundColor: "#fff",
          border: "1.5px solid #e83c70",
          boxSizing: "border-box",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      />
    </div>
  );
};

export default ControlHandle;
