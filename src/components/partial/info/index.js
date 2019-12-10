import React from "react";
import "./style.sass";
function Info(props) {
  return (
    <div className="info p-4">
      <p>{props.mentor.description}</p>
    </div>
  );
}

export default Info;
