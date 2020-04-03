import React from "react";
import SortElement from "../SortElement/SortElement";

export default function SortingArea(props) {
  const elements = props.values.map((value, i) => {
    return (
      <SortElement
        height={value.height}
        key={i}
        width={5}
        comparing={value.comparing}
      />
    );
  });

  return <div className="sorting-area">{elements}</div>;
}
