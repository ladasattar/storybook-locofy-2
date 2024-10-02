import { FunctionComponent } from "react";
import ProgressStepsProgressIcon from "./ProgressStepsProgressIcon";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "0px 112px",
        boxSizing: "border-box",
        maxWidth: "100%",
        textAlign: "center",
        fontSize: "16px",
        color: "#344154",
        fontFamily: "Lato",
      }}
      className={className}
    >
      <ProgressStepsProgressIcon />
    </section>
  );
};

export default FrameComponent;
