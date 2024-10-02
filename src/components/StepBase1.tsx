import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type StepBase1Type = {
  className?: string;
  stepIconBase?: string;
  text?: string;
  supportingText?: string;

  /** Style props */
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const StepBase1: FunctionComponent<StepBase1Type> = ({
  className = "",
  stepIconBase,
  text,
  propColor,
  supportingText,
  propColor1,
}) => {
  const text2Style: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  const supportingText1Style: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("color", propColor1),
    };
  }, [propColor1]);

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
          src={stepIconBase}
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
            ...text2Style,
          }}
        >
          {text}
        </div>
        <div
          style={{
            alignSelf: "stretch",
            position: "relative",
            lineHeight: "24px",
            color: "#475467",
            ...supportingText1Style,
          }}
        >
          {supportingText}
        </div>
      </div>
    </div>
  );
};

export default StepBase1;
