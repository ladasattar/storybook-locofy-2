import { FunctionComponent } from "react";
import PaginationButtonGroupBase from "./PaginationButtonGroupBase";

export type Pagination1Type = {
  className?: string;
};

const Pagination1: FunctionComponent<Pagination1Type> = ({
  className = "",
}) => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        borderTop: "1px solid #eaecf0",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 24px 16px",
        maxWidth: "100%",
        gap: "20px",
        textAlign: "left",
        fontSize: "14px",
        color: "#344154",
        fontFamily: "Lato",
      }}
      className={className}
    >
      <div
        style={{
          height: "44px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "8px",
        }}
      >
        <div
          style={{
            position: "relative",
            lineHeight: "20px",
            fontWeight: "500",
            display: "inline-block",
            minWidth: "55px",
          }}
        >
          Viewing:
        </div>
        <div
          style={{
            alignSelf: "stretch",
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "8px",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "6px",
            }}
          >
            <div
              style={{
                position: "relative",
                lineHeight: "20px",
                fontWeight: "500",
                display: "none",
                whiteSpace: "nowrap",
              }}
            >
              Team member
            </div>
            <div
              style={{
                alignSelf: "stretch",
                flex: "1",
                boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                borderRadius: "8px",
                backgroundColor: "#fff",
                border: "1px solid #d0d5dd",
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "8px 13px",
                gap: "8px",
                textAlign: "center",
                fontSize: "16px",
                color: "#667085",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <div
                  style={{
                    flex: "1",
                    position: "relative",
                    lineHeight: "24px",
                    display: "inline-block",
                    minWidth: "11px",
                  }}
                >
                  5
                </div>
              </div>
              <div
                style={{
                  display: "none",
                  flexDirection: "row",
                  alignItems: "baseline",
                  justifyContent: "flex-start",
                  gap: "4px",
                  textAlign: "left",
                  color: "#e83c70",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "600",
                  }}
                >
                  $3,00
                </div>
                <div
                  style={{
                    position: "relative",
                    fontSize: "14px",
                    textDecoration: "line-through",
                    lineHeight: "20px",
                    color: "#475467",
                  }}
                >
                  $1,50
                </div>
              </div>
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
          <div
            style={{
              position: "relative",
              lineHeight: "20px",
              color: "#475467",
              display: "none",
            }}
          >
            This is a hint text to help user.
          </div>
        </div>
        <div
          style={{
            position: "relative",
            lineHeight: "20px",
            fontWeight: "500",
            display: "inline-block",
            minWidth: "42px",
          }}
        >
          of 100
        </div>
      </div>
      <div
        style={{
          boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
          borderRadius: "8px",
          border: "1px solid #d0d5dd",
          boxSizing: "border-box",
          overflowX: "auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          maxWidth: "100%",
        }}
      >
        <button
          style={{
            cursor: "pointer",
            border: "none",
            padding: "10px 15px",
            backgroundColor: "#fff",
            borderRight: "1px solid #d0d5dd",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
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
            alt=""
            src="/arrowleft.svg"
          />
          <div
            style={{
              position: "relative",
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: "600",
              fontFamily: "Lato",
              color: "#344154",
              textAlign: "left",
            }}
          >
            Previous
          </div>
        </button>
        <div
          style={{
            backgroundColor: "#f9fafb",
            borderRight: "1px solid #d0d5dd",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px 15px",
            color: "#1d2939",
          }}
        >
          <div
            style={{
              position: "relative",
              lineHeight: "20px",
              fontWeight: "600",
              display: "inline-block",
              minWidth: "10px",
            }}
          >
            1
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            borderRight: "1px solid #d0d5dd",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px 15px",
          }}
        >
          <div
            style={{
              position: "relative",
              lineHeight: "20px",
              fontWeight: "600",
              display: "inline-block",
              minWidth: "10px",
            }}
          >
            2
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            borderRight: "1px solid #d0d5dd",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px 15px",
          }}
        >
          <div
            style={{
              position: "relative",
              lineHeight: "20px",
              fontWeight: "600",
              display: "inline-block",
              minWidth: "10px",
            }}
          >
            3
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            borderRight: "1px solid #d0d5dd",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px 14px",
          }}
        >
          <div
            style={{
              position: "relative",
              lineHeight: "20px",
              fontWeight: "600",
              display: "inline-block",
              minWidth: "11px",
            }}
          >
            ...
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            borderRight: "1px solid #d0d5dd",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px 15px",
          }}
        >
          <div
            style={{
              position: "relative",
              lineHeight: "20px",
              fontWeight: "600",
              display: "inline-block",
              minWidth: "10px",
            }}
          >
            8
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            borderRight: "1px solid #d0d5dd",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px 15px",
          }}
        >
          <div
            style={{
              position: "relative",
              lineHeight: "20px",
              fontWeight: "600",
              display: "inline-block",
              minWidth: "10px",
            }}
          >
            9
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            borderRight: "1px solid #d0d5dd",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px 11px",
          }}
        >
          <div
            style={{
              position: "relative",
              lineHeight: "20px",
              fontWeight: "600",
              display: "inline-block",
              minWidth: "18px",
            }}
          >
            10
          </div>
        </div>
        <PaginationButtonGroupBase />
      </div>
    </div>
  );
};

export default Pagination1;
