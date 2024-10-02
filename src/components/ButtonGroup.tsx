import { FunctionComponent } from "react";
import ButtonGroupBase from "./ButtonGroupBase";

export type ButtonGroupType = {
  className?: string;
};

const ButtonGroup: FunctionComponent<ButtonGroupType> = ({
  className = "",
}) => {
  return (
    <div
      style={{
        boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
        borderRadius: "8px",
        border: "1px solid #d0d5dd",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        textAlign: "left",
        fontSize: "14px",
        color: "#344154",
        fontFamily: "Lato",
      }}
      className={className}
    >
      <ButtonGroupBase
        propBackgroundColor="#f9fafb"
        text="Discount"
        propColor="#1d2939"
        propMinWidth="57px"
        infoCircle="/infocircle.svg"
      />
      <div
        style={{
          backgroundColor: "#fff",
          borderRight: "1px solid #d0d5dd",
          display: "none",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px 16px",
          gap: "8px",
          zIndex: "7",
        }}
      >
        <div
          style={{
            position: "relative",
            lineHeight: "20px",
            fontWeight: "600",
          }}
        >
          Text
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
          src="/placeholder4.svg"
        />
      </div>
      <div
        style={{
          backgroundColor: "#fff",
          borderRight: "1px solid #d0d5dd",
          display: "none",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px 16px",
          gap: "8px",
          zIndex: "6",
        }}
      >
        <img
          style={{
            height: "20px",
            width: "20px",
            position: "relative",
            overflow: "hidden",
            flexShrink: "0",
          }}
          alt=""
          src="/placeholder4.svg"
        />
        <div
          style={{
            position: "relative",
            lineHeight: "20px",
            fontWeight: "600",
          }}
        >
          Text
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#fff",
          borderRight: "1px solid #d0d5dd",
          display: "none",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px 16px",
          gap: "8px",
          zIndex: "5",
        }}
      >
        <img
          style={{
            height: "20px",
            width: "20px",
            position: "relative",
            overflow: "hidden",
            flexShrink: "0",
          }}
          alt=""
          src="/placeholder4.svg"
        />
        <div
          style={{
            position: "relative",
            lineHeight: "20px",
            fontWeight: "600",
          }}
        >
          Text
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#fff",
          borderRight: "1px solid #d0d5dd",
          display: "none",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px 16px",
          gap: "8px",
          zIndex: "4",
        }}
      >
        <img
          style={{
            height: "20px",
            width: "20px",
            position: "relative",
            overflow: "hidden",
            flexShrink: "0",
          }}
          alt=""
          src="/placeholder4.svg"
        />
        <div
          style={{
            position: "relative",
            lineHeight: "20px",
            fontWeight: "600",
          }}
        >
          Text
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#fff",
          borderRight: "1px solid #d0d5dd",
          display: "none",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px 16px",
          gap: "8px",
          zIndex: "3",
        }}
      >
        <img
          style={{
            height: "20px",
            width: "20px",
            position: "relative",
            overflow: "hidden",
            flexShrink: "0",
          }}
          alt=""
          src="/placeholder4.svg"
        />
        <div
          style={{
            position: "relative",
            lineHeight: "20px",
            fontWeight: "600",
          }}
        >
          Text
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#fff",
          borderRight: "1px solid #d0d5dd",
          display: "none",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px 16px",
          gap: "8px",
          zIndex: "2",
        }}
      >
        <img
          style={{
            height: "20px",
            width: "20px",
            position: "relative",
            overflow: "hidden",
            flexShrink: "0",
          }}
          alt=""
          src="/placeholder4.svg"
        />
        <div
          style={{
            position: "relative",
            lineHeight: "20px",
            fontWeight: "600",
          }}
        >
          Text
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#fff",
          borderRight: "1px solid #d0d5dd",
          display: "none",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px 16px",
          gap: "8px",
          zIndex: "1",
        }}
      >
        <img
          style={{
            height: "20px",
            width: "20px",
            position: "relative",
            overflow: "hidden",
            flexShrink: "0",
          }}
          alt=""
          src="/placeholder4.svg"
        />
        <div
          style={{
            position: "relative",
            lineHeight: "20px",
            fontWeight: "600",
          }}
        >
          Text
        </div>
      </div>
      <ButtonGroupBase text="Free product" infoCircle="/infocircle-1.svg" />
    </div>
  );
};

export default ButtonGroup;
