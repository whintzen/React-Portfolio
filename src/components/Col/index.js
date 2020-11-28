import React from "react";

function Col(props) {
  const size = props.size.split(" ").map(size => "col-" + size).join(" ");
  // const id = "";

  // return <div className={size} id={id}>{props.children}</div>;
  return <div className={size}>{props.children}</div>;
}

export default Col;
