import caseData from "../data/cases";
import React from "react";

const Notes = () => {
  return (
    <>
      <h2>Introduction</h2>
      <div>{caseData.case1.intro}</div>
    </>
  );
};

export default Notes;
