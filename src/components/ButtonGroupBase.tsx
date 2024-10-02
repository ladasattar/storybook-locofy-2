import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ButtonGroupBaseType = {
  className?: string;
  text?: string;
  infoCircle?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
  propMinWidth?: CSSProperties["minWidth"];
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const ButtonGroupBase: FunctionComponent<ButtonGroupBaseType> = ({
  className = "",
  propBackgroundColor,
  text,
  propColor,
  propMinWidth,
  infoCircle,
}) => {
  const buttonGroupBaseStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  const text3Style: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
      ...getStyleValue("minWidth", propMinWidth),
    };
  }, [propColor, propMinWidth]);

  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRight: "1px solid #d0d5dd",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "10px 14px 10px 16px",
        gap: "8px",
        textAlign: "left",
        fontSize: "14px",
        color: "#344154",
        fontFamily: "Lato",
        ...buttonGroupBaseStyle,
      }}
      className={className}
    >
      <div
        style={{
          position: "relative",
          lineHeight: "20px",
          fontWeight: "600",
          display: "inline-block",
          minWidth: "81px",
          ...text3Style,
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
        }}
        alt=""
        src={infoCircle}
      />
    </div>
  );
};

export default ButtonGroupBase;
