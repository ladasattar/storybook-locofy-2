import { FunctionComponent } from "react";

export type SectionFooterType = {
  className?: string;
  secondaryButton?: boolean;
};

const SectionFooter: FunctionComponent<SectionFooterType> = ({
  className = "",
  secondaryButton = false,
}) => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        flex: "1",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "20px",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "14px",
        color: "#475467",
        fontFamily: "Lato",
      }}
      className={className}
    >
      <img
        style={{
          alignSelf: "stretch",
          position: "relative",
          maxWidth: "100%",
          overflow: "hidden",
          maxHeight: "100%",
        }}
        loading="lazy"
        alt=""
        src="/divider2.svg"
      />
      <div
        style={{
          alignSelf: "stretch",
          flex: "1",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "20px",
          maxWidth: "100%",
        }}
      >
        {secondaryButton && (
          <div
            style={{
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
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
                lineHeight: "20px",
                fontWeight: "600",
              }}
            >
              Learn more
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
        )}
        <div
          style={{
            alignSelf: "stretch",
            flex: "1",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "12px",
            maxWidth: "100%",
            color: "#344154",
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
            Your account will be automatically charged
          </div>
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
              color: "#475467",
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
                lineHeight: "20px",
                fontWeight: "600",
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
              boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
              borderRadius: "8px",
              backgroundColor: "#fff",
              border: "1px solid #d0d5dd",
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
              src="/placeholder2.svg"
            />
            <div
              style={{
                position: "relative",
                lineHeight: "20px",
                fontWeight: "600",
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
              src="/placeholder2.svg"
            />
          </div>
          <button
            style={{
              cursor: "pointer",
              border: "1px solid #e83c70",
              padding: "10px 18px",
              backgroundColor: "#e83c70",
              alignSelf: "stretch",
              boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
              borderRadius: "8px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
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
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: "600",
                fontFamily: "Lato",
                color: "#fff",
                textAlign: "left",
                display: "inline-block",
                minWidth: "70px",
              }}
            >
              Next step
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionFooter;
