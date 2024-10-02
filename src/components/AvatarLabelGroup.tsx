import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type AvatarLabelGroupType = {
  className?: string;
  avatar?: string;
  eventName?: string;
  supportingText?: boolean;

  /** Style props */
  propBorderRadius?: CSSProperties["borderRadius"];
  propPosition?: CSSProperties["position"];
  propTextDecoration?: CSSProperties["textDecoration"];
  propColor?: CSSProperties["color"];
  propTextDecoration1?: CSSProperties["textDecoration"];
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const AvatarLabelGroup: FunctionComponent<AvatarLabelGroupType> = ({
  className = "",
  avatar,
  propBorderRadius,
  propPosition,
  eventName,
  propTextDecoration,
  propColor,
  supportingText,
  propTextDecoration1,
}) => {
  const avatarIconStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", propBorderRadius),
      ...getStyleValue("position", propPosition),
    };
  }, [propBorderRadius, propPosition]);

  const eventNameStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("textDecoration", propTextDecoration),
      ...getStyleValue("color", propColor),
    };
  }, [propTextDecoration, propColor]);

  const supportingTextStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("textDecoration", propTextDecoration1),
    };
  }, [propTextDecoration1]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "12px",
        textAlign: "left",
        fontSize: "16px",
        color: "#101828",
        fontFamily: "Lato",
      }}
      className={className}
    >
      <img
        alt=""
        src={avatar}
        style={{
          height: "40px",
          width: "40px",
          borderRadius: "8px",
          objectFit: "cover",
          ...avatarIconStyle,
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <a
          style={{
            textDecoration: "none",
            position: "relative",
            lineHeight: "24px",
            fontWeight: "600",
            color: "inherit",
            ...eventNameStyle,
          }}
        >
          {eventName}
        </a>
        {!supportingText && (
          <div
            style={{
              position: "relative",
              fontSize: "14px",
              lineHeight: "20px",
              color: "#475467",
              whiteSpace: "nowrap",
              ...supportingTextStyle,
            }}
          >
            Organizer
          </div>
        )}
      </div>
    </div>
  );
};

export default AvatarLabelGroup;
