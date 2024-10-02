import { FunctionComponent } from "react";

export type NavItemBase2Type = {
  className?: string;
  dot?: boolean;
  icon?: boolean;
  dropdown?: boolean;
  badge?: boolean;
};

const NavItemBase2: FunctionComponent<NavItemBase2Type> = ({
  className = "",
  dot = false,
  icon = false,
  dropdown = false,
  badge = false,
}) => {
  return (
    <div
      style={{
        borderRadius: "6px",
        backgroundColor: "#eaecf0",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "8px 12px",
        gap: "8px",
        textAlign: "left",
        fontSize: "16px",
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
            minWidth: "64px",
          }}
        >
          Coupons
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
            color: "#344154",
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

export default NavItemBase2;
