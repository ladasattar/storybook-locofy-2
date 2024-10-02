import { FunctionComponent } from "react";
import Logo from "./Logo";
import TagCount from "./TagCount";
import CompanyDropdowns from "./CompanyDropdowns";

export type ContainerType = {
  className?: string;
};

const Container: FunctionComponent<ContainerType> = ({ className = "" }) => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 32px",
        boxSizing: "border-box",
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
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Logo />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "16px",
          maxWidth: "100%",
          textAlign: "center",
          fontSize: "12px",
          color: "#fff",
        }}
      >
        <button
          style={{
            cursor: "pointer",
            border: "1px solid #a6f4c5",
            padding: "8px 14px",
            backgroundColor: "#ecfdf3",
            flex: "0.7727",
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
            }}
            alt=""
            src="/wallet03.svg"
          />
          <a
            style={{
              textDecoration: "none",
              position: "relative",
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: "600",
              fontFamily: "Lato",
              color: "#037a48",
              textAlign: "left",
              display: "inline-block",
              minWidth: "73px",
            }}
          >
            $11,527.20
          </a>
        </button>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            position: "relative",
            gap: "4px",
          }}
        >
          <div
            style={{
              height: "40px",
              boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
              borderRadius: "6px",
              backgroundColor: "#fff",
              border: "1px solid #d0d5dd",
              boxSizing: "border-box",
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "8px 9px",
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
              src="/bell01.svg"
            />
          </div>
          <TagCount />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              height: "40px",
              boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
              borderRadius: "6px",
              backgroundColor: "#fff",
              border: "1px solid #d0d5dd",
              boxSizing: "border-box",
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "8px 9px",
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
              src="/settings01.svg"
            />
          </div>
        </div>
        <CompanyDropdowns
          propFlex="1"
          avatar="/avatar.svg"
          eventName="Crania"
          supportingText
          propBorderRadius="200px"
          propPosition="relative"
          propTextDecoration="unset"
          propColor="#344154"
          propTextDecoration1="none"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              height: "40px",
              boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
              borderRadius: "6px",
              backgroundColor: "#fff",
              border: "1px solid #d0d5dd",
              boxSizing: "border-box",
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "8px 9px",
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
              src="/power01.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
