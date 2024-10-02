import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type BreadcrumbButtonBaseType = {
  className?: string;
  text?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propFontWeight?: CSSProperties["fontWeight"];
  propColor?: CSSProperties["color"];
  textDisplay?: CSSProperties["display"];
  textMinWidth?: CSSProperties["minWidth"];
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const BreadcrumbButtonBase: FunctionComponent<BreadcrumbButtonBaseType> = ({
  className = "",
  propBackgroundColor,
  text,
  propFontWeight,
  propColor,
  textDisplay,
  textMinWidth,
}) => {
  const breadcrumbButtonBaseStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  const text5Style: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("fontWeight", propFontWeight),
      ...getStyleValue("color", propColor),
      ...getStyleValue("display", textDisplay),
      ...getStyleValue("minWidth", textMinWidth),
    };
  }, [propFontWeight, propColor, textDisplay, textMinWidth]);

  return (
    <div
      style={{
        borderRadius: "6px",
        backgroundColor: "#eaecf0",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: "4px 8px",
        textAlign: "left",
        fontSize: "14px",
        color: "#344154",
        fontFamily: "Lato",
        ...breadcrumbButtonBaseStyle,
      }}
      className={className}
    >
      <div
        style={{
          position: "relative",
          lineHeight: "20px",
          fontWeight: "600",
          ...text5Style,
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default BreadcrumbButtonBase;
