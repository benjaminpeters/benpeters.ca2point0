import React from "react";

export default function(props) {
  let style = Object.assign(
    {
      position: "absolute",
      width: "100%",
      height: `${props.height}px`,
      boxSizing: "border-box",
      border: props.debug ? "1px solid red" : null,
      zIndex: 0,
      backgroundColor: "#ccc",
      opacity: 0.6,
      borderRadius: "4px 4px 0 0",
      boxShadow: "1px 1px 50px 4px rgba(0,0,0,.8)"
    },
    (() => {
      switch (props.magnifyDirection) {
        case "up":
          return { bottom: 0 };
        case "down":
          return { top: 0 };
        case "center":
          return { top: "50%", transform: "translateY(-50%)" };
      }
    })()
  );

  return <div className={props.className} style={style} />;
}
