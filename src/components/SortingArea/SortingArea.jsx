import React from "react";
import SortElement from "../SortElement/SortElement";

export default function SortingArea(props) {
  const elements = props.values.map(value => {
    return <SortElement height={value.height} key={value.id} width={5} />;
  });

  return <div className="sorting-area">{elements}</div>;
}
