import { FunctionComponent } from "react";

export type TagCountType = {
  className?: string;
};

const TagCount: FunctionComponent<TagCountType> = ({ className = "" }) => {
  return (
    <div
      style={{
        width: "16px",
        margin: "0",
        position: "absolute",
        top: "4px",
        right: "4px",
        borderRadius: "3px",
        backgroundColor: "#da2d20",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0px 3px",
        boxSizing: "border-box",
        zIndex: "1",
        textAlign: "center",
        fontSize: "12px",
        color: "#fff",
        fontFamily: "Lato",
      }}
      className={className}
    >
      <a
        style={{
          textDecoration: "none",
          position: "relative",
          lineHeight: "18px",
          fontWeight: "500",
          color: "inherit",
          display: "inline-block",
          minWidth: "9px",
        }}
      >
        5
      </a>
    </div>
  );
};

export default TagCount;
