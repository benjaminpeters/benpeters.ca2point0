import React from "react";
import "./dock-item.css";

export default function(props) {
  return (
    <div
      className={props.className + " item"}
      onClick={props.onClick}
      style={{
        width: `${props.width}px`,
        height: `${props.width}px`
      }}
    >
      {props.children}
    </div>
  );
}
