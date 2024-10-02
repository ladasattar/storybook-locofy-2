import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type InputFieldType = {
  className?: string;
  helpIcon?: boolean;
  label?: string;
  clock?: string;
  textPlaceholder?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const InputField: FunctionComponent<InputFieldType> = ({
  className = "",
  helpIcon = false,
  label,
  propDisplay,
  propMinWidth,
  clock,
  textPlaceholder,
}) => {
  const labelStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("display", propDisplay),
      ...getStyleValue("minWidth", propMinWidth),
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div
      style={{
        flex: "1",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "6px",
        minWidth: "372px",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "14px",
        color: "#344154",
        fontFamily: "Lato",
      }}
      className={className}
    >
      <div
        style={{
          alignSelf: "stretch",
          height: "70px",
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
            ...labelStyle,
          }}
        >
          {label}
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
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "8px 13px",
            gap: "8px",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
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
              src={clock}
            />
            <input
              style={{
                width: "calc(100% - 20px)",
                border: "none",
                outline: "none",
                fontFamily: "Lato",
                fontSize: "16px",
                backgroundColor: "transparent",
                flex: "1",
                position: "relative",
                lineHeight: "24px",
                color: "#101828",
                textAlign: "left",
                display: "inline-block",
                minWidth: "250px",
                padding: "0",
                maxWidth: "calc(100% - 28px)",
              }}
              placeholder={textPlaceholder}
              type="text"
            />
          </div>
          {helpIcon && (
            <img
              style={{ height: "16px", width: "16px", position: "relative" }}
              alt=""
              src="/help-icon.svg"
            />
          )}
        </div>
      </div>
      <div
        style={{
          position: "relative",
          lineHeight: "20px",
          color: "#475467",
          display: "none",
        }}
      >
        This is a hint text to help user.
      </div>
    </div>
  );
};

export default InputField;
