import { FunctionComponent } from "react";
import BreadcrumbButtonBase from "./BreadcrumbButtonBase";

export type BreadcrumbsType = {
  className?: string;
};

const Breadcrumbs: FunctionComponent<BreadcrumbsType> = ({
  className = "",
}) => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "left",
        fontSize: "14px",
        color: "#475467",
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
          gap: "8px",
        }}
      >
        <div
          style={{
            borderRadius: "6px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "4px",
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
            loading="lazy"
            alt=""
            src="/homeline.svg"
          />
        </div>
        <img
          style={{
            height: "16px",
            width: "16px",
            position: "relative",
            overflow: "hidden",
            flexShrink: "0",
          }}
          alt=""
          src="/chevronright.svg"
        />
        <BreadcrumbButtonBase
          propBackgroundColor="unset"
          text="Coupons"
          propFontWeight="500"
          propColor="#475467"
          textDisplay="unset"
          textMinWidth="unset"
        />
        <img
          style={{
            height: "16px",
            width: "16px",
            position: "relative",
            overflow: "hidden",
            flexShrink: "0",
          }}
          alt=""
          src="/chevronright.svg"
        />
        <div
          style={{
            borderRadius: "6px",
            display: "none",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "4px 8px",
          }}
        >
          <div
            style={{
              position: "relative",
              lineHeight: "20px",
              fontWeight: "500",
            }}
          >
            ...
          </div>
        </div>
        <img
          style={{
            height: "16px",
            width: "16px",
            position: "relative",
            overflow: "hidden",
            flexShrink: "0",
            display: "none",
          }}
          alt=""
          src="/chevronright.svg"
        />
        <div
          style={{
            borderRadius: "6px",
            display: "none",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "4px 7px",
          }}
        >
          <div
            style={{
              position: "relative",
              lineHeight: "20px",
              fontWeight: "500",
            }}
          >
            Another link
          </div>
        </div>
        <img
          style={{
            height: "16px",
            width: "16px",
            position: "relative",
            overflow: "hidden",
            flexShrink: "0",
            display: "none",
          }}
          alt=""
          src="/chevronright.svg"
        />
        <BreadcrumbButtonBase
          propBackgroundColor="#eaecf0"
          text="Create coupon"
          propFontWeight="600"
          propColor="#344154"
          textDisplay="inline-block"
          textMinWidth="92px"
        />
      </div>
    </div>
  );
};

export default Breadcrumbs;
