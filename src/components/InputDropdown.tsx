import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type InputDropdownType = {
  className?: string;

  /** Style props */
  closeAlignSelf?: CSSProperties["alignSelf"];
  closeTop?: CSSProperties["top"];
  closePosition?: CSSProperties["position"];
  propOverflow?: CSSProperties["overflow"];
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const InputDropdown: FunctionComponent<InputDropdownType> = ({
  className = "",
  closeAlignSelf,
  closeTop,
  closePosition,
  propOverflow,
  propWidth,
  propFlex,
  propMinWidth,
}) => {
  const inputDropdownStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", closeAlignSelf),
      ...getStyleValue("top", closeTop),
      ...getStyleValue("position", closePosition),
    };
  }, [closeAlignSelf, closeTop, closePosition]);

  const inputStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("overflow", propOverflow),
    };
  }, [propOverflow]);

  const text7Style: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
      ...getStyleValue("flex", propFlex),
      ...getStyleValue("minWidth", propMinWidth),
    };
  }, [propWidth, propFlex, propMinWidth]);

  return (
    <div
      style={{
        alignSelf: "stretch",
        height: "44px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "8px",
        top: "0",
        zIndex: "99",
        position: "sticky",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "14px",
        color: "#344154",
        fontFamily: "Lato",
        ...inputDropdownStyle,
      }}
      className={className}
    >
      <div
        style={{
          alignSelf: "stretch",
          flex: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "6px",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            position: "relative",
            lineHeight: "20px",
            fontWeight: "500",
            display: "none",
          }}
        >
          Search
        </div>
        <div
          style={{
            alignSelf: "stretch",
            flex: "1",
            boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
            borderRadius: "8px",
            backgroundColor: "#fff",
            border: "1px solid #d0d5dd",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "8px 13px",
            gap: "8px",
            maxWidth: "100%",
            ...inputStyle,
          }}
        >
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "0px 1047px 0px 0px",
              boxSizing: "border-box",
              gap: "8px",
              maxWidth: "100%",
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
              src="/searchlg.svg"
            />
            <input
              placeholder="Search"
              type="text"
              style={{
                width: "calc(100% - 1067px)",
                border: "none",
                outline: "none",
                fontFamily: "Lato",
                fontSize: "16px",
                backgroundColor: "transparent",
                flex: "1",
                position: "relative",
                lineHeight: "24px",
                color: "#667085",
                textAlign: "left",
                display: "inline-block",
                minWidth: "29px",
                padding: "0",
                ...text7Style,
              }}
            />
          </div>
          <div
            style={{
              borderRadius: "3px",
              overflow: "hidden",
              display: "none",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "2px",
            }}
          >
            <img
              style={{
                width: "10px",
                height: "10px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
              }}
              alt=""
              src="/xclose.svg"
            />
          </div>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          lineHeight: "20px",
          color: "#475467",
          display: "none",
          whiteSpace: "nowrap",
        }}
      >
        This is a hint text to help user.
      </div>
    </div>
  );
};

export default InputDropdown;
