import caseData from "./data/cases";
import React from "react";

const Notes = () => {
  return (
    <div>
      Introduction{"\n"}
      {caseData.case1.intro}
    </div>
  );
};

export default Notes;
