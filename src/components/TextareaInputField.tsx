import { FunctionComponent } from "react";

export type TextareaInputFieldType = {
  className?: string;
};

const TextareaInputField: FunctionComponent<TextareaInputFieldType> = ({
  className = "",
}) => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "6px",
        textAlign: "left",
        fontSize: "14px",
        color: "#344154",
        fontFamily: "Lato",
      }}
      className={className}
    >
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "6px",
        }}
      >
        <div
          style={{
            position: "relative",
            lineHeight: "20px",
            fontWeight: "500",
          }}
        >
          Description
        </div>
        <textarea
          style={{
            border: "1px solid #d0d5dd",
            backgroundColor: "#fff",
            height: "86px",
            width: "auto",
            outline: "none",
            alignSelf: "stretch",
            boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
            borderRadius: "8px",
            boxSizing: "border-box",
            overflow: "hidden",
            flexShrink: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "12px 14px",
            fontFamily: "Lato",
            fontSize: "16px",
            color: "#667085",
          }}
          placeholder="Enter a description for the coupon..."
          rows={4}
          cols={29}
        />
      </div>
      <div
        style={{
          position: "relative",
          lineHeight: "20px",
          color: "#475467",
          display: "none",
        }}
      >
        This is a hint text to help user.
      </div>
    </div>
  );
};

export default TextareaInputField;
