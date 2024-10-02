import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type NavItemBase1Type = {
  className?: string;
  dot?: boolean;
  icon?: boolean;
  dropdown?: boolean;
  badge?: boolean;
  text?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const NavItemBase1: FunctionComponent<NavItemBase1Type> = ({
  className = "",
  dot = false,
  icon = false,
  dropdown = false,
  badge = false,
  text,
  propDisplay,
  propMinWidth,
}) => {
  const textStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("display", propDisplay),
      ...getStyleValue("minWidth", propMinWidth),
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div
      style={{
        borderRadius: "6px",
        backgroundColor: "#fff",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "8px 12px",
        gap: "8px",
        textAlign: "left",
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
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "12px",
        }}
      >
        {dot && (
          <img
            style={{
              height: "10px",
              width: "10px",
              position: "relative",
              overflow: "hidden",
              flexShrink: "0",
            }}
            alt=""
            src="/-dot.svg"
          />
        )}
        {icon && (
          <img
            style={{
              height: "24px",
              width: "24px",
              position: "relative",
              overflow: "hidden",
              flexShrink: "0",
            }}
            alt=""
            src="/barchart01.svg"
          />
        )}
        <a
          style={{
            textDecoration: "none",
            position: "relative",
            lineHeight: "24px",
            fontWeight: "600",
            color: "inherit",
            display: "inline-block",
            minWidth: "71px",
            ...textStyle,
          }}
        >
          {text}
        </a>
      </div>
      {badge && (
        <div
          style={{
            borderRadius: "16px",
            backgroundColor: "#f2f4f7",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "2px 8px",
            mixBlendMode: "multiply",
            textAlign: "center",
            fontSize: "12px",
          }}
        >
          <div
            style={{
              position: "relative",
              lineHeight: "18px",
              fontWeight: "500",
            }}
          >
            10
          </div>
        </div>
      )}
      {dropdown && (
        <img
          style={{
            height: "20px",
            width: "20px",
            position: "relative",
            overflow: "hidden",
            flexShrink: "0",
          }}
          alt=""
          src="/chevrondown.svg"
        />
      )}
    </div>
  );
};

export default NavItemBase1;
