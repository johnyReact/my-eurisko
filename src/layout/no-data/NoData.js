import * as React from "react";
import "./NoData.scss";
export default function AlertMessage(props) {
  const { title } = props;
  return (
    <div className="no-data-container">
      <h2>{title}</h2>
    </div>
  );
}
