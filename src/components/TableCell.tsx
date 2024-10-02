import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type TableCellType = {
  className?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const TableCell: FunctionComponent<TableCellType> = ({
  className = "",
  propFlex,
}) => {
  const tableCellStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("flex", propFlex),
    };
  }, [propFlex]);

  return (
    <div
      style={{
        borderBottom: "1px solid #eaecf0",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "16px 16px 14px",
        gap: "4px",
        ...tableCellStyle,
      }}
      className={className}
    >
      <div
        style={{
          borderRadius: "8px",
          overflow: "hidden",
          display: "none",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
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
          src="/copy01.svg"
        />
      </div>
      <div
        style={{
          borderRadius: "8px",
          overflow: "hidden",
          display: "none",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
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
          src="/downloadcloud02.svg"
        />
      </div>
      <div
        style={{
          borderRadius: "8px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
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
          src="/trash01.svg"
        />
      </div>
      <div
        style={{
          borderRadius: "8px",
          overflow: "hidden",
          display: "none",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
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
          src="/edit01.svg"
        />
      </div>
    </div>
  );
};

export default TableCell;
