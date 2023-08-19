import React from "react";
import './errormsg.module.css'

export default function ErrorMsg({ message }) {
  return <div style={{ color: "red" }}>{message}</div>;
}
