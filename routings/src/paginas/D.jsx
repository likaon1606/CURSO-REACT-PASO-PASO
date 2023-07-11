import React from "react";
import { useParams } from "react-router-dom";

const D = () => {
  const dato = useParams();

  return <div>{dato.letra}</div>;
};

export default D;
