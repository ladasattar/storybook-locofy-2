import { FunctionComponent } from "react";

export type StepBaseType = {
  className?: string;
};

const StepBase: FunctionComponent<StepBaseType> = ({ className = "" }) => {
  return (
    <div
      style={{
        flex: "1",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "16px",
        minWidth: "240px",
        zIndex: "1",
        textAlign: "center",
        fontSize: "16px",
        color: "#344154",
        fontFamily: "Lato",
      }}
      className={className}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 144px",
        }}
      >
        <img
          style={{
            height: "32px",
            width: "32px",
            position: "relative",
            borderRadius: "16px",
            overflow: "hidden",
            flexShrink: "0",
          }}
          loading="lazy"
          alt=""
          src="/-step-icon-base-1.svg"
        />
      </div>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "4px 0px 0px",
          gap: "2px",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            position: "relative",
            lineHeight: "24px",
            fontWeight: "600",
          }}
        >
          Issue
        </div>
        <div
          style={{
            alignSelf: "stretch",
            position: "relative",
            lineHeight: "24px",
            color: "#475467",
          }}
        >
          Confirm and issue coupons
        </div>
      </div>
    </div>
  );
};

export default StepBase;
