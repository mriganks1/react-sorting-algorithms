import React from "react";

export default function SortElement(props) {
  return (
    <div
      style={{
        height: props.height,
        backgroundColor: props.comparing ? "lightpink" : "lightgreen",
        width: props.width,
        margin: "0px 1px"
      }}
    ></div>
  );
}
