import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Button1Type = {
  className?: string;
  iconTrailing?: boolean;
  iconLeading?: boolean;
  plus?: string;
  text?: string;
  placeholder?: string;

  /** Style props */
  buttonAlignSelf?: CSSProperties["alignSelf"];
  buttonBoxShadow?: CSSProperties["boxShadow"];
  buttonBackgroundColor?: CSSProperties["backgroundColor"];
  buttonBorder?: CSSProperties["border"];
  buttonBorderRadius?: CSSProperties["borderRadius"];
  buttonPadding?: CSSProperties["padding"];
  textColor?: CSSProperties["color"];
  textDisplay?: CSSProperties["display"];
  textMinWidth?: CSSProperties["minWidth"];
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const Button1: FunctionComponent<Button1Type> = ({
  className = "",
  iconTrailing = false,
  iconLeading = true,
  buttonAlignSelf,
  buttonBoxShadow,
  buttonBackgroundColor,
  buttonBorder,
  buttonBorderRadius,
  buttonPadding,
  plus,
  text,
  textColor,
  textDisplay,
  textMinWidth,
  placeholder,
}) => {
  const button1Style: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", buttonAlignSelf),
      ...getStyleValue("boxShadow", buttonBoxShadow),
      ...getStyleValue("backgroundColor", buttonBackgroundColor),
      ...getStyleValue("border", buttonBorder),
      ...getStyleValue("borderRadius", buttonBorderRadius),
      ...getStyleValue("padding", buttonPadding),
    };
  }, [
    buttonAlignSelf,
    buttonBoxShadow,
    buttonBackgroundColor,
    buttonBorder,
    buttonBorderRadius,
    buttonPadding,
  ]);

  const text6Style: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("color", textColor),
      ...getStyleValue("display", textDisplay),
      ...getStyleValue("minWidth", textMinWidth),
    };
  }, [textColor, textDisplay, textMinWidth]);

  return (
    <div
      style={{
        alignSelf: "stretch",
        boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
        borderRadius: "8px",
        backgroundColor: "#e83c70",
        border: "1px solid #e83c70",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px 14px",
        gap: "8px",
        textAlign: "left",
        fontSize: "14px",
        color: "#fff",
        fontFamily: "Lato",
        ...button1Style,
      }}
      className={className}
    >
      {iconLeading && (
        <img
          style={{
            height: "20px",
            width: "20px",
            position: "relative",
            overflow: "hidden",
            flexShrink: "0",
          }}
          alt=""
          src={plus}
        />
      )}
      <div
        style={{
          position: "relative",
          lineHeight: "20px",
          fontWeight: "600",
          display: "inline-block",
          minWidth: "92px",
          ...text6Style,
        }}
      >
        {text}
      </div>
      {iconTrailing && (
        <img
          style={{
            height: "20px",
            width: "20px",
            position: "relative",
            overflow: "hidden",
            flexShrink: "0",
          }}
          alt=""
          src={placeholder}
        />
      )}
    </div>
  );
};

export default Button1;
