import React from "react";
import { useCollection } from "../../Hooks/useCollection";
import Dropdown from "./Dropdown";

const CarList = () => {
  const { documents, error } = useCollection("mercedes");
  console.log(documents);

  return <div>{documents && <Dropdown year={documents} />}</div>;
};

export default CarList;
