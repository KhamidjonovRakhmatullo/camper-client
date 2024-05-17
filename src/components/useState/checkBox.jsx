import React, { useState } from "react";
import { campcar } from "../mock/mockdata";

const CheckBoxComponent = () => {
  const data = campcar.maindata;
  const [showFilteredCompany, setShowFilteredCompany] = useState(false);
  //   console.log(showFilteredCompany);

  const filteredData = showFilteredCompany
    ? data.filter((item) => item.car.company === "다온티앤티")
    : data;
  console.log(filteredData);
  return (
    <div>
      <div>
        <h1>다온티앤티</h1>
        <input
          onChange={(e) => setShowFilteredCompany(e.target.checked)}
          type="checkbox"
          style={{ width: "20px", height: "20px" }}
        />
      </div>

      <div>
        {filteredData.map((value, key) => {
          return <div key={key}>{value.car.location}</div>;
        })}
      </div>
    </div>
  );
};

export default CheckBoxComponent;
