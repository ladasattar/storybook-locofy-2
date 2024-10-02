import { FunctionComponent } from "react";

export type LogoType = {
  className?: string;
};

const Logo: FunctionComponent<LogoType> = ({ className = "" }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "10px",
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
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <img
          style={{
            height: "40px",
            width: "40px",
            position: "relative",
            objectFit: "cover",
          }}
          loading="lazy"
          alt=""
          src="/icontoken@2x.png"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "2px 0px",
        }}
      >
        <a
          style={{
            textDecoration: "none",
            position: "relative",
            lineHeight: "28px",
            fontWeight: "600",
            color: "inherit",
            display: "inline-block",
            minWidth: "118px",
          }}
        >
          CHI Backstage
        </a>
      </div>
    </div>
  );
};

export default Logo;
