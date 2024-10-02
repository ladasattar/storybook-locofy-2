import { FunctionComponent } from "react";
import ControlHandle from "./ControlHandle";

export type Slider1Type = {
  className?: string;
};

const Slider1: FunctionComponent<Slider1Type> = ({ className = "" }) => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "8px 0px 0px",
        gap: "16px",
        textAlign: "left",
        fontSize: "16px",
        color: "#475467",
        fontFamily: "Lato",
      }}
      className={className}
    >
      <div
        style={{ alignSelf: "stretch", height: "8px", position: "relative" }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            borderRadius: "4px",
            backgroundColor: "#eaecf0",
            width: "100%",
            height: "100%",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "286px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            zIndex: "1",
          }}
        >
          <div
            style={{
              height: "8px",
              flex: "1",
              position: "relative",
              borderRadius: "4px",
              backgroundColor: "#e83c70",
            }}
          />
          <ControlHandle />
        </div>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <div
          style={{
            position: "relative",
            lineHeight: "24px",
            fontWeight: "500",
            display: "inline-block",
            minWidth: "65px",
          }}
        >
          Discount
        </div>
        <div
          style={{
            position: "relative",
            lineHeight: "24px",
            fontWeight: "500",
            color: "#101828",
            display: "inline-block",
            minWidth: "33px",
          }}
        >
          50%
        </div>
      </div>
    </div>
  );
};

export default Slider1;
