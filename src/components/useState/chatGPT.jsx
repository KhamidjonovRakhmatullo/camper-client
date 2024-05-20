import React, { useState } from "react";
import { campcar } from "../mock/mockdata";
import { caravan } from "../mock/caravandata";

const ChatGPTComponent = () => {

  ///////
  const data = caravan.maindata;
  
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  const handleCompanyChange = (companyName) => {
    const isSelected = selectedCompanies.includes(companyName);
    setSelectedCompanies(
      isSelected
        ? selectedCompanies.filter((company) => company !== companyName)
        : [...selectedCompanies, companyName]
    );
  };

  const filteredData = data.filter(
    (item) =>
      selectedCompanies.length === 0 ||
      selectedCompanies.includes(item.caravan.company)
  );


  

  return (
    <div>
      <div>
        <h1>다온티앤티</h1>
        <input
          onChange={() => handleCompanyChange("다온티앤티")}
          type="checkbox"
          style={{ width: "20px", height: "20px" }}
        />
      </div>

      <div>
        <h1>제일모빌</h1> {/* Replace with your second company name */}
        <input
          onChange={() => handleCompanyChange("제일모빌")}
          type="checkbox"
          style={{ width: "20px", height: "20px" }}
        />
      </div>

      <div>
        <h1>영남캠핑카</h1> {/* Replace with your third company name */}
        <input
          onChange={() => handleCompanyChange("영남캠핑카")}
          type="checkbox"
          style={{ width: "20px", height: "20px" }}
        />
      </div>

      {/* ... (repeat the above structure for a few more companies) */}

      <div>
        {filteredData.map((value, key) => {
          return <div key={key}>{value.caravan.company}</div>;
        })}
      </div>
    </div>
  );
};

export default ChatGPTComponent;
