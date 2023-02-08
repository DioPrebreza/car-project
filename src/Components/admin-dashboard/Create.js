import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useFirestore } from "../hooks/useFirestore";

const options = [
  { value: "audi", label: "audi" },
  { value: "bmw", label: "bmw" },
  { value: "mercedes", label: "mercedes" },
  { value: "VW", label: "VW" },
];

const Create = () => {
  const { addDocument } = useFirestore("brands");
  const [brand, setBrand] = useState("");

  const handleChange = (selectedOption) => {
    setBrand(selectedOption);
  };

  const handleSubmit = async () => {
    const brands = {
      brand,
    };
    console.log(brands);
    await addDocument(brands);
  };

  return (
    <div>
      <Select options={options} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Create;
