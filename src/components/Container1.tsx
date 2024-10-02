import { FunctionComponent } from "react";
import CompanyDropdowns from "./CompanyDropdowns";
import NavItemBase1 from "./NavItemBase1";
import NavItemBase from "./NavItemBase";
import NavItemBase2 from "./NavItemBase2";

export type Container1Type = {
  className?: string;
};

const Container1: FunctionComponent<Container1Type> = ({ className = "" }) => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "12px 32px",
        boxSizing: "border-box",
        maxWidth: "100%",
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
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "16px",
          maxWidth: "100%",
        }}
      >
        <CompanyDropdowns
          avatar="/avatar-1@2x.png"
          eventName="Dreamscape"
          supportingText
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "8px 0px 0px",
          }}
        >
          <div
            style={{
              width: "1px",
              height: "24px",
              position: "relative",
              backgroundColor: "#eaecf0",
            }}
          />
        </div>
        <nav
          style={{
            margin: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "4px",
            maxWidth: "100%",
            textAlign: "left",
            fontSize: "16px",
            color: "#344154",
            fontFamily: "Lato",
          }}
        >
          <NavItemBase1
            dot={false}
            icon={false}
            dropdown={false}
            badge={false}
            text="Dashboard"
            propDisplay="unset"
            propMinWidth="unset"
          />
          <NavItemBase
            dot={false}
            icon={false}
            dropdown={false}
            badge={false}
            text="POS"
            propDisplay="inline-block"
            propMinWidth="33px"
          />
          <NavItemBase
            dot={false}
            icon={false}
            dropdown={false}
            badge={false}
            text="Crew"
            propDisplay="unset"
            propMinWidth="unset"
          />
          <NavItemBase
            dot={false}
            icon={false}
            dropdown={false}
            badge={false}
            text="Stakeholders"
            propDisplay="inline-block"
            propMinWidth="93px"
          />
          <NavItemBase
            dot={false}
            icon={false}
            dropdown={false}
            badge={false}
            text="Reports"
            propDisplay="unset"
            propMinWidth="unset"
          />
          <NavItemBase
            dot={false}
            icon={false}
            dropdown={false}
            badge={false}
            text="Tickets"
            propDisplay="inline-block"
            propMinWidth="52px"
          />
          <NavItemBase2 dot icon dropdown badge />
          <NavItemBase1 dot icon dropdown badge text="Payments" />
          <NavItemBase dot icon dropdown badge text="VIP" />
        </nav>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          display: "none",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "8px",
          maxWidth: "100%",
          fontSize: "14px",
          color: "#344154",
        }}
      >
        <div
          style={{
            borderRadius: "12px",
            backgroundColor: "#98a2b3",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "2px",
          }}
        >
          <div
            style={{
              position: "relative",
              boxShadow:
                "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
              borderRadius: "50%",
              backgroundColor: "#fff",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              position: "relative",
              lineHeight: "20px",
              fontWeight: "500",
            }}
          >
            Admin mode
          </div>
          <div
            style={{
              position: "relative",
              lineHeight: "20px",
              color: "#475467",
              display: "none",
              whiteSpace: "nowrap",
            }}
          >
            Save my login details for next time.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container1;
