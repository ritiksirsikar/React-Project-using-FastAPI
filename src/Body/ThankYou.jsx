import React from "react";
import { useParams } from "react-router-dom";

function ThankYou() {
  const { title } = useParams();
  return <h1>Thank you for buying {title}</h1>;
}

export default ThankYou;
