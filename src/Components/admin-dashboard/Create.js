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
  const { addDocument } = useFirestore("cars");
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [productionYear, setProductionYear] = useState("");

  const handleChange = (selectedOption) => {
    setBrand(selectedOption);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const car = {
      brand,
      type,
      productionYear,
    };
    console.log(car);
    await addDocument(car);

    setBrand("");
    setType("");
    setProductionYear("");
  };

  return (
    <div>
      <h2>Shto veturën:</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Marka e veturës</span>
          <Select options={options} onChange={handleChange} />
        </label>
        <label>
          <span>Lloji i veturës</span>
          <input
            required
            type="text"
            onChange={(e) => {
              setType(e.target.value);
            }}
            value={type}
          />
        </label>
        <label>
          <span>Viti i prodhimit</span>
          <input
            required
            type="text"
            onChange={(e) => {
              setProductionYear(e.target.value);
            }}
            value={productionYear}
          />
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Create;
