import { FunctionComponent } from "react";
import Container from "./Container";
import Container1 from "./Container1";

export type HeaderNavigationType = {
  className?: string;
};

const HeaderNavigation: FunctionComponent<HeaderNavigationType> = ({
  className = "",
}) => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        height: "137px",
        backgroundColor: "#fff",
        borderBottom: "1px solid #eaecf0",
        boxSizing: "border-box",
        overflow: "hidden",
        flexShrink: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
        maxWidth: "100%",
      }}
      className={className}
    >
      <img
        style={{
          width: "1440px",
          height: "1px",
          position: "absolute",
          margin: "0",
          top: "72px",
          left: "0px",
        }}
        loading="lazy"
        alt=""
        src="/divider.svg"
      />
      <header
        style={{
          width: "1280px",
          margin: "0",
          position: "absolute",
          top: "0px",
          left: "80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "1px",
          maxWidth: "100%",
          textAlign: "left",
          fontSize: "18px",
          color: "#101828",
          fontFamily: "Lato",
        }}
      >
        <Container />
        <Container1 />
      </header>
    </div>
  );
};

export default HeaderNavigation;
