import { FunctionComponent, useMemo, type CSSProperties } from "react";
import InputDropdown from "./InputDropdown";

export type SectionHeader1Type = {
  className?: string;
  userTableLabel?: string;
  text?: string;
  divider?: string;
  closeAlignSelf?: string;
  closeTop?: string;
  closePosition?: string;
  propOverflow?: string;
  propWidth?: string;
  propFlex1?: string;
  propMinWidth2?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propFlex?: CSSProperties["flex"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const SectionHeader1: FunctionComponent<SectionHeader1Type> = ({
  className = "",
  propMinWidth,
  userTableLabel,
  propFlex,
  text,
  propMinWidth1,
  divider,
  closeAlignSelf,
  closeTop,
  closePosition,
  propOverflow,
  propWidth,
  propFlex1,
  propMinWidth2,
}) => {
  const textAndSupportingTextStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("minWidth", propMinWidth),
    };
  }, [propMinWidth]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("flex", propFlex),
    };
  }, [propFlex]);

  const text4Style: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("minWidth", propMinWidth1),
    };
  }, [propMinWidth1]);

  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "20px",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "18px",
        color: "#101828",
        fontFamily: "Lato",
      }}
      className={className}
    >
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          alignContent: "center",
          gap: "16px",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "8px 0px",
            boxSizing: "border-box",
            gap: "4px",
            minWidth: "426px",
            maxWidth: "100%",
            ...textAndSupportingTextStyle,
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              position: "relative",
              lineHeight: "28px",
              fontWeight: "600",
            }}
          >
            {userTableLabel}
          </div>
          <div
            style={{
              position: "relative",
              fontSize: "14px",
              lineHeight: "20px",
              color: "#475467",
              display: "none",
              maxWidth: "100%",
            }}
          >
            Manage your team members and their account permissions here.
          </div>
        </div>
        <InputDropdown
          closeAlignSelf={closeAlignSelf}
          closeTop={closeTop}
          closePosition={closePosition}
          propOverflow={propOverflow}
          propWidth={propWidth}
          propFlex={propFlex1}
          propMinWidth={propMinWidth2}
        />
        <button
          style={{
            cursor: "pointer",
            border: "none",
            padding: "0",
            backgroundColor: "transparent",
            height: "44px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "12px",
          }}
        >
          <div
            style={{
              borderRadius: "8px",
              overflow: "hidden",
              display: "none",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 15px",
              gap: "8px",
            }}
          >
            <img
              style={{
                height: "20px",
                width: "20px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
                display: "none",
              }}
              alt=""
              src="/placeholder.svg"
            />
            <div
              style={{
                position: "relative",
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: "600",
                fontFamily: "Lato",
                color: "#475467",
                textAlign: "left",
              }}
            >
              Tertiary
            </div>
            <img
              style={{
                height: "20px",
                width: "20px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
                display: "none",
              }}
              alt=""
              src="/placeholder.svg"
            />
          </div>
          <div
            style={{
              height: "40px",
              borderRadius: "8px",
              backgroundColor: "#fff0f5",
              border: "1px solid #fff0f5",
              boxSizing: "border-box",
              overflow: "hidden",
              display: "none",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px 15px",
              gap: "8px",
            }}
          >
            <img
              style={{
                height: "20px",
                width: "20px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
                display: "none",
              }}
              alt=""
              src="/placeholder1.svg"
            />
            <div
              style={{
                position: "relative",
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: "600",
                fontFamily: "Lato",
                color: "#d6396c",
                textAlign: "left",
              }}
            >
              Secondary
            </div>
            <img
              style={{
                height: "20px",
                width: "20px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
                display: "none",
              }}
              alt=""
              src="/placeholder1.svg"
            />
          </div>
          <button
            style={{
              cursor: "pointer",
              border: "1px solid #d0d5dd",
              padding: "8px 16px",
              backgroundColor: "#fff",
              alignSelf: "stretch",
              boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
              borderRadius: "8px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              ...buttonStyle,
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
              src="/plus.svg"
            />
            <div
              style={{
                position: "relative",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: "600",
                fontFamily: "Lato",
                color: "#344154",
                textAlign: "left",
                display: "inline-block",
                minWidth: "97px",
                ...text4Style,
              }}
            >
              {text}
            </div>
            <img
              style={{
                height: "20px",
                width: "20px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
                display: "none",
              }}
              alt=""
              src="/placeholder2.svg"
            />
          </button>
          <div
            style={{
              height: "40px",
              boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
              borderRadius: "8px",
              backgroundColor: "#e83c70",
              border: "1px solid #e83c70",
              boxSizing: "border-box",
              overflow: "hidden",
              display: "none",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px 14px",
              gap: "8px",
            }}
          >
            <img
              style={{
                height: "20px",
                width: "20px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
                display: "none",
              }}
              alt=""
              src="/placeholder3.svg"
            />
            <div
              style={{
                position: "relative",
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: "600",
                fontFamily: "Lato",
                color: "#fff",
                textAlign: "left",
              }}
            >
              Primary
            </div>
            <img
              style={{
                height: "20px",
                width: "20px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
                display: "none",
              }}
              alt=""
              src="/placeholder3.svg"
            />
          </div>
        </button>
      </div>
      <img
        style={{
          alignSelf: "stretch",
          position: "relative",
          maxWidth: "100%",
          overflow: "hidden",
          maxHeight: "100%",
          display: "none",
        }}
        alt=""
        src={divider}
      />
    </div>
  );
};

export default SectionHeader1;
