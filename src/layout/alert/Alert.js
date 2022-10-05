import * as React from "react";
import Alert from "@mui/material/Alert";
import "./Alert.scss";
export default function AlertMessage(props) {
  const { text, type } = props;
  return (
    <div className="alert-container">
      <Alert severity={type}>{text}</Alert>
    </div>
  );
}
