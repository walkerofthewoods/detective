import React from "react";
import caseData from "../data/cases";

const Newspaper = () => {
  const articles = caseData.case1.newspaper.articles.map((issue) => {
    return (
      <>
        <h2>{issue.title}</h2>
        <body>{issue.text}</body>
      </>
    );
  });

  return (
    <>
      <h1>London Times</h1>
      {articles}
    </>
  );
};

export default Newspaper;
