import { FunctionComponent } from "react";
import HeaderNavigation from "../components/HeaderNavigation";
import Breadcrumbs from "../components/Breadcrumbs";
import FrameComponent from "../components/FrameComponent";
import Button1 from "../components/Button1";
import TextareaInputField from "../components/TextareaInputField";
import ButtonGroup from "../components/ButtonGroup";
import Slider1 from "../components/Slider1";
import InputField from "../components/InputField";
import SectionHeader1 from "../components/SectionHeader1";
import TableCell from "../components/TableCell";
import TableHeaderCell from "../components/TableHeaderCell";
import Pagination1 from "../components/Pagination1";
import SectionFooter from "../components/SectionFooter";

const CreateConfigure: FunctionComponent = () => {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        lineHeight: "normal",
        letterSpacing: "normal",
      }}
    >
      <HeaderNavigation />
      <main
        style={{
          alignSelf: "stretch",
          backgroundColor: "#fcfcfd",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "48px 0px",
          boxSizing: "border-box",
          gap: "32px",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "0px 80px",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0px 32px",
            }}
          >
            <Breadcrumbs />
          </div>
        </div>
        <FrameComponent />
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
          }}
        >
          <form
            style={{
              margin: "0",
              flex: "1",
              borderRadius: "12px",
              backgroundColor: "#fff",
              border: "1px solid #eaecf0",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0px 0px 22px",
              gap: "24px",
              maxWidth: "100%",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                borderBottom: "1px solid #eaecf0",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "24px 24px 22px",
                gap: "16px",
              }}
            >
              <h1
                style={{
                  margin: "0",
                  position: "relative",
                  fontSize: "30px",
                  lineHeight: "38px",
                  fontWeight: "600",
                  fontFamily: "Lato",
                  color: "#101828",
                  textAlign: "left",
                }}
              >
                Coupon title
              </h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "7px 0px 0px",
                }}
              >
                <img
                  style={{
                    width: "24px",
                    height: "24px",
                    position: "relative",
                    overflow: "hidden",
                    flexShrink: "0",
                  }}
                  loading="lazy"
                  alt=""
                  src="/edit03.svg"
                />
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0px 24px",
                boxSizing: "border-box",
                maxWidth: "100%",
              }}
            >
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  flexWrap: "wrap",
                  alignContent: "flex-start",
                  gap: "24px",
                  maxWidth: "100%",
                }}
              >
                <div
                  style={{
                    flex: "1",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "16px",
                    minWidth: "372px",
                    maxWidth: "100%",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "20px",
                      maxWidth: "100%",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "stretch",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "16px",
                        maxWidth: "100%",
                      }}
                    >
                      <div
                        style={{
                          flex: "1",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "center",
                          gap: "4px",
                          maxWidth: "100%",
                        }}
                      >
                        <div
                          style={{
                            alignSelf: "stretch",
                            position: "relative",
                            fontSize: "18px",
                            lineHeight: "28px",
                            fontWeight: "600",
                            fontFamily: "Lato",
                            color: "#101828",
                            textAlign: "left",
                          }}
                        >
                          Properties
                        </div>
                        <div
                          style={{
                            position: "relative",
                            fontSize: "14px",
                            lineHeight: "20px",
                            fontFamily: "Lato",
                            color: "#475467",
                            textAlign: "left",
                            display: "none",
                          }}
                        >
                          Manage your team members and their account permissions
                          here.
                        </div>
                      </div>
                      <div
                        style={{
                          display: "none",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          gap: "12px",
                          maxWidth: "100%",
                        }}
                      >
                        <Button1
                          iconTrailing={false}
                          iconLeading={false}
                          buttonAlignSelf="unset"
                          buttonBoxShadow="unset"
                          buttonBackgroundColor="unset"
                          buttonBorder="unset"
                          buttonBorderRadius="8px"
                          buttonPadding="10px 15px"
                          plus="/placeholder.svg"
                          text="Tertiary"
                          textColor="#475467"
                          textDisplay="unset"
                          textMinWidth="unset"
                          placeholder="/placeholder.svg"
                        />
                        <Button1
                          iconTrailing={false}
                          iconLeading={false}
                          buttonAlignSelf="unset"
                          buttonBoxShadow="unset"
                          buttonBackgroundColor="#fff0f5"
                          buttonBorder="1px solid #fff0f5"
                          buttonBorderRadius="8px"
                          buttonPadding="8px 15px"
                          plus="/placeholder1.svg"
                          text="Secondary"
                          textColor="#d6396c"
                          textDisplay="unset"
                          textMinWidth="unset"
                          placeholder="/placeholder1.svg"
                        />
                        <Button1
                          iconTrailing={false}
                          iconLeading={false}
                          buttonAlignSelf="unset"
                          buttonBoxShadow="0px 1px 2px rgba(16, 24, 40, 0.05)"
                          buttonBackgroundColor="#fff"
                          buttonBorder="1px solid #d0d5dd"
                          buttonBorderRadius="8px"
                          buttonPadding="8px 15px"
                          plus="/placeholder2.svg"
                          text="Secondary"
                          textColor="#344154"
                          textDisplay="unset"
                          textMinWidth="unset"
                          placeholder="/placeholder2.svg"
                        />
                        <Button1
                          iconTrailing={false}
                          iconLeading={false}
                          buttonAlignSelf="unset"
                          buttonBoxShadow="0px 1px 2px rgba(16, 24, 40, 0.05)"
                          buttonBackgroundColor="#e83c70"
                          buttonBorder="1px solid #e83c70"
                          buttonBorderRadius="8px"
                          buttonPadding="8px 14px"
                          plus="/placeholder3.svg"
                          text="Primary"
                          textColor="#fff"
                          textDisplay="unset"
                          textMinWidth="unset"
                          placeholder="/placeholder3.svg"
                        />
                      </div>
                      <div
                        style={{
                          display: "none",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                        }}
                      >
                        <img
                          style={{
                            width: "20px",
                            height: "20px",
                            position: "relative",
                            overflow: "hidden",
                            flexShrink: "0",
                          }}
                          alt=""
                          src="/dotsvertical.svg"
                        />
                      </div>
                    </div>
                    <img
                      style={{
                        alignSelf: "stretch",
                        position: "relative",
                        maxWidth: "100%",
                        overflow: "hidden",
                        maxHeight: "100%",
                        display: "none",
                      }}
                      alt=""
                      src="/divider1.svg"
                    />
                  </div>
                  <TextareaInputField />
                </div>
                <div
                  style={{
                    flex: "1",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "16px",
                    minWidth: "372px",
                    maxWidth: "100%",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "20px",
                      maxWidth: "100%",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "stretch",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "16px",
                        maxWidth: "100%",
                      }}
                    >
                      <div
                        style={{
                          flex: "1",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "center",
                          gap: "4px",
                          maxWidth: "100%",
                        }}
                      >
                        <div
                          style={{
                            alignSelf: "stretch",
                            position: "relative",
                            fontSize: "18px",
                            lineHeight: "28px",
                            fontWeight: "600",
                            fontFamily: "Lato",
                            color: "#101828",
                            textAlign: "left",
                          }}
                        >
                          Coupon type
                        </div>
                        <div
                          style={{
                            position: "relative",
                            fontSize: "14px",
                            lineHeight: "20px",
                            fontFamily: "Lato",
                            color: "#475467",
                            textAlign: "left",
                            display: "none",
                          }}
                        >
                          Manage your team members and their account permissions
                          here.
                        </div>
                      </div>
                      <div
                        style={{
                          display: "none",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          gap: "12px",
                          maxWidth: "100%",
                        }}
                      >
                        <Button1
                          iconTrailing={false}
                          iconLeading={false}
                          buttonAlignSelf="unset"
                          buttonBoxShadow="unset"
                          buttonBackgroundColor="unset"
                          buttonBorder="unset"
                          buttonBorderRadius="8px"
                          buttonPadding="10px 15px"
                          plus="/placeholder.svg"
                          text="Tertiary"
                          textColor="#475467"
                          textDisplay="unset"
                          textMinWidth="unset"
                          placeholder="/placeholder.svg"
                        />
                        <Button1
                          iconTrailing={false}
                          iconLeading={false}
                          buttonAlignSelf="unset"
                          buttonBoxShadow="unset"
                          buttonBackgroundColor="#fff0f5"
                          buttonBorder="1px solid #fff0f5"
                          buttonBorderRadius="8px"
                          buttonPadding="8px 15px"
                          plus="/placeholder1.svg"
                          text="Secondary"
                          textColor="#d6396c"
                          textDisplay="unset"
                          textMinWidth="unset"
                          placeholder="/placeholder1.svg"
                        />
                        <Button1
                          iconTrailing={false}
                          iconLeading={false}
                          buttonAlignSelf="unset"
                          buttonBoxShadow="0px 1px 2px rgba(16, 24, 40, 0.05)"
                          buttonBackgroundColor="#fff"
                          buttonBorder="1px solid #d0d5dd"
                          buttonBorderRadius="8px"
                          buttonPadding="8px 15px"
                          plus="/placeholder2.svg"
                          text="Secondary"
                          textColor="#344154"
                          textDisplay="unset"
                          textMinWidth="unset"
                          placeholder="/placeholder2.svg"
                        />
                        <Button1
                          iconTrailing={false}
                          iconLeading={false}
                          buttonAlignSelf="unset"
                          buttonBoxShadow="0px 1px 2px rgba(16, 24, 40, 0.05)"
                          buttonBackgroundColor="#e83c70"
                          buttonBorder="1px solid #e83c70"
                          buttonBorderRadius="8px"
                          buttonPadding="8px 14px"
                          plus="/placeholder3.svg"
                          text="Primary"
                          textColor="#fff"
                          textDisplay="unset"
                          textMinWidth="unset"
                          placeholder="/placeholder3.svg"
                        />
                      </div>
                      <div
                        style={{
                          display: "none",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                        }}
                      >
                        <img
                          style={{
                            width: "20px",
                            height: "20px",
                            position: "relative",
                            overflow: "hidden",
                            flexShrink: "0",
                          }}
                          alt=""
                          src="/dotsvertical.svg"
                        />
                      </div>
                    </div>
                    <img
                      style={{
                        alignSelf: "stretch",
                        position: "relative",
                        maxWidth: "100%",
                        overflow: "hidden",
                        maxHeight: "100%",
                        display: "none",
                      }}
                      alt=""
                      src="/divider1.svg"
                    />
                  </div>
                  <ButtonGroup />
                  <Slider1 />
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                maxWidth: "100%",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 24px",
                  boxSizing: "border-box",
                  gap: "16px",
                  maxWidth: "100%",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "20px",
                    maxWidth: "100%",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "16px",
                      maxWidth: "100%",
                    }}
                  >
                    <div
                      style={{
                        flex: "1",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        gap: "4px",
                        maxWidth: "100%",
                      }}
                    >
                      <div
                        style={{
                          alignSelf: "stretch",
                          position: "relative",
                          fontSize: "18px",
                          lineHeight: "28px",
                          fontWeight: "600",
                          fontFamily: "Lato",
                          color: "#101828",
                          textAlign: "left",
                        }}
                      >
                        Validity
                      </div>
                      <div
                        style={{
                          position: "relative",
                          fontSize: "14px",
                          lineHeight: "20px",
                          fontFamily: "Lato",
                          color: "#475467",
                          textAlign: "left",
                          display: "none",
                          maxWidth: "100%",
                        }}
                      >
                        Manage your team members and their account permissions
                        here.
                      </div>
                    </div>
                    <div
                      style={{
                        display: "none",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "12px",
                        maxWidth: "100%",
                      }}
                    >
                      <Button1
                        iconTrailing={false}
                        iconLeading={false}
                        buttonAlignSelf="unset"
                        buttonBoxShadow="unset"
                        buttonBackgroundColor="unset"
                        buttonBorder="unset"
                        buttonBorderRadius="8px"
                        buttonPadding="10px 15px"
                        plus="/placeholder.svg"
                        text="Tertiary"
                        textColor="#475467"
                        textDisplay="unset"
                        textMinWidth="unset"
                        placeholder="/placeholder.svg"
                      />
                      <Button1
                        iconTrailing={false}
                        iconLeading={false}
                        buttonAlignSelf="unset"
                        buttonBoxShadow="unset"
                        buttonBackgroundColor="#fff0f5"
                        buttonBorder="1px solid #fff0f5"
                        buttonBorderRadius="8px"
                        buttonPadding="8px 15px"
                        plus="/placeholder1.svg"
                        text="Secondary"
                        textColor="#d6396c"
                        textDisplay="unset"
                        textMinWidth="unset"
                        placeholder="/placeholder1.svg"
                      />
                      <Button1
                        iconTrailing={false}
                        iconLeading={false}
                        buttonAlignSelf="unset"
                        buttonBoxShadow="0px 1px 2px rgba(16, 24, 40, 0.05)"
                        buttonBackgroundColor="#fff"
                        buttonBorder="1px solid #d0d5dd"
                        buttonBorderRadius="8px"
                        buttonPadding="8px 15px"
                        plus="/placeholder2.svg"
                        text="Secondary"
                        textColor="#344154"
                        textDisplay="unset"
                        textMinWidth="unset"
                        placeholder="/placeholder2.svg"
                      />
                      <Button1
                        iconTrailing={false}
                        iconLeading={false}
                        buttonAlignSelf="unset"
                        buttonBoxShadow="0px 1px 2px rgba(16, 24, 40, 0.05)"
                        buttonBackgroundColor="#e83c70"
                        buttonBorder="1px solid #e83c70"
                        buttonBorderRadius="8px"
                        buttonPadding="8px 14px"
                        plus="/placeholder3.svg"
                        text="Primary"
                        textColor="#fff"
                        textDisplay="unset"
                        textMinWidth="unset"
                        placeholder="/placeholder3.svg"
                      />
                    </div>
                    <div
                      style={{
                        display: "none",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                      }}
                    >
                      <img
                        style={{
                          width: "20px",
                          height: "20px",
                          position: "relative",
                          overflow: "hidden",
                          flexShrink: "0",
                        }}
                        alt=""
                        src="/dotsvertical.svg"
                      />
                    </div>
                  </div>
                  <img
                    style={{
                      alignSelf: "stretch",
                      position: "relative",
                      maxWidth: "100%",
                      overflow: "hidden",
                      maxHeight: "100%",
                      display: "none",
                    }}
                    alt=""
                    src="/divider2.svg"
                  />
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    flexWrap: "wrap",
                    alignContent: "flex-start",
                    gap: "24px",
                    maxWidth: "100%",
                  }}
                >
                  <InputField
                    helpIcon={false}
                    label="Valid period"
                    propDisplay="inline-block"
                    propMinWidth="75px"
                    clock="/calendar.svg"
                    textPlaceholder="22-12-2023 - 24-12-2023"
                  />
                  <InputField
                    helpIcon
                    label="Valid time on each valid day"
                    clock="/clock.svg"
                    textPlaceholder="20:00 - 21:00"
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                maxWidth: "100%",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 24px",
                  boxSizing: "border-box",
                  gap: "16px",
                  maxWidth: "100%",
                }}
              >
                <SectionHeader1
                  propMinWidth="437px"
                  userTableLabel="Eligible menus"
                  propFlex="1"
                  text="Add menus"
                  propMinWidth1="81px"
                  divider="/divider2.svg"
                  closeAlignSelf="unset"
                  closeTop="unset"
                  closePosition="unset"
                  propOverflow="hidden"
                  propWidth="49px"
                  propFlex1="unset"
                  propMinWidth2="unset"
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    boxShadow:
                      "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
                    borderRadius: "12px",
                    backgroundColor: "#fff",
                    border: "1px solid #eaecf0",
                    boxSizing: "border-box",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    maxWidth: "100%",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      backgroundColor: "#fff",
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
                        flex: "1",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        minWidth: "582px",
                        maxWidth: "100%",
                      }}
                    >
                      <div
                        style={{
                          alignSelf: "stretch",
                          backgroundColor: "#f9fafb",
                          borderBottom: "1px solid #eaecf0",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          padding: "13px 24px 11px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            gap: "4px",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              fontSize: "12px",
                              lineHeight: "18px",
                              fontWeight: "500",
                              fontFamily: "Lato",
                              color: "#475467",
                              textAlign: "left",
                              display: "inline-block",
                              minWidth: "33px",
                            }}
                          >
                            Name
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
                            src="/arrowdown.svg"
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          borderBottom: "1px solid #eaecf0",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          padding: "16px 740px 14px 24px",
                          gap: "12px",
                        }}
                      >
                        <img
                          style={{
                            height: "40px",
                            width: "40px",
                            position: "relative",
                            borderRadius: "100px",
                          }}
                          loading="lazy"
                          alt=""
                          src="/category-icon.svg"
                        />
                        <div
                          style={{
                            position: "relative",
                            fontSize: "14px",
                            lineHeight: "20px",
                            fontWeight: "500",
                            fontFamily: "Lato",
                            color: "#101828",
                            textAlign: "left",
                            display: "inline-block",
                            minWidth: "80px",
                          }}
                        >
                          Bar Payment
                        </div>
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          borderBottom: "1px solid #eaecf0",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          padding: "16px 741px 14px 24px",
                          gap: "12px",
                        }}
                      >
                        <img
                          style={{
                            height: "40px",
                            width: "40px",
                            position: "relative",
                            borderRadius: "100px",
                            objectFit: "cover",
                          }}
                          loading="lazy"
                          alt=""
                          src="/category-icon-1@2x.png"
                        />
                        <div
                          style={{
                            position: "relative",
                            fontSize: "14px",
                            lineHeight: "20px",
                            fontWeight: "500",
                            fontFamily: "Lato",
                            color: "#101828",
                            textAlign: "left",
                            display: "inline-block",
                            minWidth: "79px",
                          }}
                        >
                          Token Topup
                        </div>
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          borderBottom: "1px solid #eaecf0",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          padding: "16px 752px 14px 24px",
                          gap: "12px",
                        }}
                      >
                        <img
                          style={{
                            height: "40px",
                            width: "40px",
                            position: "relative",
                            borderRadius: "100px",
                          }}
                          loading="lazy"
                          alt=""
                          src="/category-icon-2.svg"
                        />
                        <div
                          style={{
                            position: "relative",
                            fontSize: "14px",
                            lineHeight: "20px",
                            fontWeight: "500",
                            fontFamily: "Lato",
                            color: "#101828",
                            textAlign: "left",
                            display: "inline-block",
                            minWidth: "68px",
                          }}
                        >
                          VIP charge
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "200px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                      }}
                    >
                      <div
                        style={{
                          alignSelf: "stretch",
                          backgroundColor: "#f9fafb",
                          borderBottom: "1px solid #eaecf0",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          padding: "13px 24px 11px",
                        }}
                      >
                        <input
                          style={{
                            width: "47px",
                            border: "none",
                            outline: "none",
                            backgroundColor: "transparent",
                            height: "18px",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            fontFamily: "Lato",
                            fontWeight: "500",
                            fontSize: "12px",
                            color: "#475467",
                          }}
                          placeholder="Products"
                          type="text"
                        />
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          flex: "1",
                          borderBottom: "1px solid #eaecf0",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          padding: "26px 24px 24px",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            fontSize: "14px",
                            lineHeight: "20px",
                            fontFamily: "Lato",
                            color: "#475467",
                            textAlign: "left",
                            display: "inline-block",
                            minWidth: "18px",
                          }}
                        >
                          20
                        </div>
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          borderBottom: "1px solid #eaecf0",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          padding: "26px 24px 24px",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            fontSize: "14px",
                            lineHeight: "20px",
                            fontFamily: "Lato",
                            color: "#475467",
                            textAlign: "left",
                            display: "inline-block",
                            minWidth: "10px",
                          }}
                        >
                          6
                        </div>
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          borderBottom: "1px solid #eaecf0",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          padding: "26px 24px 24px",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            fontSize: "14px",
                            lineHeight: "20px",
                            fontFamily: "Lato",
                            color: "#475467",
                            textAlign: "left",
                            display: "inline-block",
                            minWidth: "10px",
                          }}
                        >
                          7
                        </div>
                      </div>
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
                          alignSelf: "stretch",
                          height: "44px",
                          backgroundColor: "#f9fafb",
                          borderBottom: "1px solid #eaecf0",
                          boxSizing: "border-box",
                        }}
                      />
                      <TableCell propFlex="1" />
                      <TableCell propFlex="unset" />
                      <TableCell propFlex="unset" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                maxWidth: "100%",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 24px",
                  boxSizing: "border-box",
                  gap: "16px",
                  maxWidth: "100%",
                }}
              >
                <SectionHeader1
                  userTableLabel="Eligible products"
                  text="Add products"
                  divider="/divider2.svg"
                  closeAlignSelf="unset"
                  closeTop="unset"
                  closePosition="unset"
                  propOverflow="hidden"
                  propWidth="49px"
                  propFlex1="unset"
                  propMinWidth2="unset"
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    boxShadow:
                      "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
                    borderRadius: "12px",
                    backgroundColor: "#fff",
                    border: "1px solid #eaecf0",
                    boxSizing: "border-box",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    maxWidth: "100%",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      backgroundColor: "#fff",
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
                        flex: "1",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        minWidth: "582px",
                        maxWidth: "100%",
                      }}
                    >
                      <div
                        style={{
                          alignSelf: "stretch",
                          backgroundColor: "#f9fafb",
                          borderBottom: "1px solid #eaecf0",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          padding: "13px 24px 11px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            gap: "4px",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              fontSize: "12px",
                              lineHeight: "18px",
                              fontWeight: "500",
                              fontFamily: "Lato",
                              color: "#475467",
                              textAlign: "left",
                              display: "inline-block",
                              minWidth: "33px",
                            }}
                          >
                            Name
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
                            src="/arrowdown.svg"
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          borderBottom: "1px solid #eaecf0",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          padding: "16px 759px 14px 24px",
                          gap: "12px",
                        }}
                      >
                        <img
                          style={{
                            height: "40px",
                            width: "40px",
                            borderRadius: "200px",
                            objectFit: "cover",
                          }}
                          loading="lazy"
                          alt=""
                          src="/avatar-2@2x.png"
                        />
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            gap: "4px",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              fontSize: "14px",
                              lineHeight: "20px",
                              fontWeight: "500",
                              fontFamily: "Lato",
                              color: "#101828",
                              textAlign: "left",
                              display: "inline-block",
                              minWidth: "62px",
                            }}
                          >
                            Red Wine
                          </div>
                          <div
                            style={{
                              borderRadius: "16px",
                              backgroundColor: "#fef3f2",
                              display: "none",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              padding: "1px 8px",
                              mixBlendMode: "multiply",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                fontSize: "12px",
                                lineHeight: "18px",
                                fontWeight: "500",
                                fontFamily: "Lato",
                                color: "#b42318",
                                textAlign: "center",
                              }}
                            >
                              20%
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          borderBottom: "1px solid #eaecf0",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          padding: "16px 745px 14px 24px",
                          gap: "12px",
                        }}
                      >
                        <img
                          style={{
                            height: "40px",
                            width: "40px",
                            borderRadius: "200px",
                            objectFit: "cover",
                          }}
                          loading="lazy"
                          alt=""
                          src="/avatar-3@2x.png"
                        />
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            gap: "4px",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              fontSize: "14px",
                              lineHeight: "20px",
                              fontWeight: "500",
                              fontFamily: "Lato",
                              color: "#101828",
                              textAlign: "left",
                              display: "inline-block",
                              minWidth: "76px",
                            }}
                          >
                            White Wine
                          </div>
                          <div
                            style={{
                              borderRadius: "16px",
                              backgroundColor: "#fef3f2",
                              display: "none",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              padding: "1px 8px",
                              mixBlendMode: "multiply",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                fontSize: "12px",
                                lineHeight: "18px",
                                fontWeight: "500",
                                fontFamily: "Lato",
                                color: "#b42318",
                                textAlign: "center",
                              }}
                            >
                              20%
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          borderBottom: "1px solid #eaecf0",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          padding: "16px 759px 14px 24px",
                          gap: "12px",
                        }}
                      >
                        <img
                          style={{
                            height: "40px",
                            width: "40px",
                            borderRadius: "200px",
                            objectFit: "cover",
                          }}
                          loading="lazy"
                          alt=""
                          src="/avatar-2@2x.png"
                        />
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            gap: "4px",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              fontSize: "14px",
                              lineHeight: "20px",
                              fontWeight: "500",
                              fontFamily: "Lato",
                              color: "#101828",
                              textAlign: "left",
                              display: "inline-block",
                              minWidth: "62px",
                            }}
                          >
                            Red Wine
                          </div>
                          <div
                            style={{
                              borderRadius: "16px",
                              backgroundColor: "#fef3f2",
                              display: "none",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              padding: "1px 8px",
                              mixBlendMode: "multiply",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                fontSize: "12px",
                                lineHeight: "18px",
                                fontWeight: "500",
                                fontFamily: "Lato",
                                color: "#b42318",
                                textAlign: "center",
                              }}
                            >
                              20%
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          borderBottom: "1px solid #eaecf0",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          padding: "16px 745px 14px 24px",
                          gap: "12px",
                        }}
                      >
                        <img
                          style={{
                            height: "40px",
                            width: "40px",
                            borderRadius: "200px",
                            objectFit: "cover",
                          }}
                          loading="lazy"
                          alt=""
                          src="/avatar-3@2x.png"
                        />
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            gap: "4px",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              fontSize: "14px",
                              lineHeight: "20px",
                              fontWeight: "500",
                              fontFamily: "Lato",
                              color: "#101828",
                              textAlign: "left",
                              display: "inline-block",
                              minWidth: "76px",
                            }}
                          >
                            White Wine
                          </div>
                          <div
                            style={{
                              borderRadius: "16px",
                              backgroundColor: "#fef3f2",
                              display: "none",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              padding: "1px 8px",
                              mixBlendMode: "multiply",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                fontSize: "12px",
                                lineHeight: "18px",
                                fontWeight: "500",
                                fontFamily: "Lato",
                                color: "#b42318",
                                textAlign: "center",
                              }}
                            >
                              20%
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          borderBottom: "1px solid #eaecf0",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          padding: "16px 759px 14px 24px",
                          gap: "12px",
                        }}
                      >
                        <img
                          style={{
                            height: "40px",
                            width: "40px",
                            borderRadius: "200px",
                            objectFit: "cover",
                          }}
                          loading="lazy"
                          alt=""
                          src="/avatar-2@2x.png"
                        />
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            gap: "4px",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              fontSize: "14px",
                              lineHeight: "20px",
                              fontWeight: "500",
                              fontFamily: "Lato",
                              color: "#101828",
                              textAlign: "left",
                              display: "inline-block",
                              minWidth: "62px",
                            }}
                          >
                            Red Wine
                          </div>
                          <div
                            style={{
                              borderRadius: "16px",
                              backgroundColor: "#fef3f2",
                              display: "none",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              padding: "1px 8px",
                              mixBlendMode: "multiply",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                fontSize: "12px",
                                lineHeight: "18px",
                                fontWeight: "500",
                                fontFamily: "Lato",
                                color: "#b42318",
                                textAlign: "center",
                              }}
                            >
                              20%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "200px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                      }}
                    >
                      <TableHeaderCell />
                      <div
                        style={{
                          alignSelf: "stretch",
                          flex: "1",
                          borderBottom: "1px solid #eaecf0",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          padding: "26px 24px 24px",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            fontSize: "14px",
                            lineHeight: "20px",
                            fontFamily: "Lato",
                            color: "#475467",
                            textAlign: "left",
                          }}
                        >
                          Small Glass
                        </div>
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          borderBottom: "1px solid #eaecf0",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          padding: "26px 24px 24px",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            fontSize: "14px",
                            lineHeight: "20px",
                            fontFamily: "Lato",
                            color: "#475467",
                            textAlign: "left",
                          }}
                        >
                          Small Glass
                        </div>
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          borderBottom: "1px solid #eaecf0",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          padding: "26px 24px 24px",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            fontSize: "14px",
                            lineHeight: "20px",
                            fontFamily: "Lato",
                            color: "#475467",
                            textAlign: "left",
                          }}
                        >
                          Small Glass
                        </div>
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          borderBottom: "1px solid #eaecf0",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          padding: "26px 24px 24px",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            fontSize: "14px",
                            lineHeight: "20px",
                            fontFamily: "Lato",
                            color: "#475467",
                            textAlign: "left",
                          }}
                        >
                          Small Glass
                        </div>
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          borderBottom: "1px solid #eaecf0",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          padding: "26px 24px 24px",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            fontSize: "14px",
                            lineHeight: "20px",
                            fontFamily: "Lato",
                            color: "#475467",
                            textAlign: "left",
                          }}
                        >
                          Small Glass
                        </div>
                      </div>
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
                          alignSelf: "stretch",
                          height: "44px",
                          backgroundColor: "#f9fafb",
                          borderBottom: "1px solid #eaecf0",
                          boxSizing: "border-box",
                        }}
                      />
                      <TableCell propFlex="1" />
                      <TableCell propFlex="unset" />
                      <TableCell propFlex="unset" />
                      <TableCell propFlex="unset" />
                      <TableCell />
                    </div>
                  </div>
                  <Pagination1 />
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "69px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "0px 24px",
                boxSizing: "border-box",
                maxWidth: "100%",
              }}
            >
              <SectionFooter secondaryButton={false} />
            </div>
          </form>
        </section>
      </main>
      <footer
        style={{
          alignSelf: "stretch",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "48px 80px",
          boxSizing: "border-box",
          maxWidth: "100%",
          textAlign: "left",
          fontSize: "16px",
          color: "#667085",
          fontFamily: "Lato",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            alignContent: "center",
            padding: "0px 31px 0px 32px",
            boxSizing: "border-box",
            gap: "32px",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              flex: "1",
              position: "relative",
              lineHeight: "24px",
              display: "inline-block",
              minWidth: "210px",
              maxWidth: "100%",
            }}
          >
            © 2024 EventCHI. All rights reserved.
          </div>
          <button
            style={{
              cursor: "pointer",
              border: "1.5px solid #039855",
              padding: "2px 8px 2px 10px",
              backgroundColor: "transparent",
              height: "28px",
              borderRadius: "16px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "6px",
            }}
          >
            <img
              style={{
                height: "8px",
                width: "8px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
              }}
              alt=""
              src="/-dot.svg"
            />
            <div
              style={{
                position: "relative",
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: "500",
                fontFamily: "Lato",
                color: "#037a48",
                textAlign: "center",
              }}
            >
              Platform status
            </div>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default CreateConfigure;
