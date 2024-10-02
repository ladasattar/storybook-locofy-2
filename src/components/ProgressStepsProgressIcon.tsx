import { FunctionComponent } from "react";
import StepBase1 from "./StepBase1";
import StepBase from "./StepBase";

export type ProgressStepsProgressIconType = {
  className?: string;
};

const ProgressStepsProgressIcon: FunctionComponent<
  ProgressStepsProgressIconType
> = ({ className = "" }) => {
  return (
    <div
      style={{
        flex: "1",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "0px 20px",
        boxSizing: "border-box",
        maxWidth: "100%",
        textAlign: "center",
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
          alignItems: "flex-start",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          alignContent: "flex-start",
          position: "relative",
          gap: "16px",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            width: "672px",
            margin: "0",
            position: "absolute",
            top: "15px",
            left: "calc(50% - 336px)",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            maxWidth: "100%",
            rowGap: "20px",
          }}
        >
          <div
            style={{
              height: "2px",
              flex: "1",
              position: "relative",
              backgroundColor: "#eaecf0",
              minWidth: "218px",
              maxWidth: "100%",
            }}
          />
          <div
            style={{
              height: "2px",
              flex: "1",
              position: "relative",
              backgroundColor: "#eaecf0",
              minWidth: "218px",
              maxWidth: "100%",
            }}
          />
        </div>
        <StepBase1
          stepIconBase="/-step-icon-base.svg"
          text="Configure"
          propColor="#d6396c"
          supportingText="Set coupon properties"
          propColor1="#e83c70"
        />
        <StepBase1
          stepIconBase="/-step-icon-base-1.svg"
          text="Distribute"
          supportingText="Select recipients"
        />
        <StepBase />
      </div>
    </div>
  );
};

export default ProgressStepsProgressIcon;
