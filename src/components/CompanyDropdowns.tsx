import { FunctionComponent, useMemo, type CSSProperties } from "react";
import AvatarLabelGroup from "./AvatarLabelGroup";

export type CompanyDropdownsType = {
  className?: string;
  avatar?: string;
  eventName?: string;
  supportingText?: boolean;
  propBorderRadius?: string;
  propPosition?: string;
  propTextDecoration?: string;
  propColor?: string;
  propTextDecoration1?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const CompanyDropdowns: FunctionComponent<CompanyDropdownsType> = ({
  className = "",
  propFlex,
  avatar,
  eventName,
  supportingText,
  propBorderRadius,
  propPosition,
  propTextDecoration,
  propColor,
  propTextDecoration1,
}) => {
  const companyDropdownsStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("flex", propFlex),
    };
  }, [propFlex]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        textAlign: "left",
        fontSize: "16px",
        color: "#101828",
        fontFamily: "Lato",
        ...companyDropdownsStyle,
      }}
      className={className}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "8px",
        }}
      >
        <AvatarLabelGroup
          avatar={avatar}
          propBorderRadius={propBorderRadius}
          propPosition={propPosition}
          eventName={eventName}
          propTextDecoration={propTextDecoration}
          propColor={propColor}
          supportingText={supportingText}
          propTextDecoration1={propTextDecoration1}
        />
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
      </div>
    </div>
  );
};

export default CompanyDropdowns;
