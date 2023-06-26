import React from "react";
import caseData from "../data/cases";

const Newspaper = () => {
  const articles = caseData.case1.newspaper.articles.map((article) => {
    return (
      <React.Fragment key={article.title}>
        <h1>{article.title}</h1>
        <p>{article.text}</p>
      </React.Fragment>
    );
  });

  return (
    <>
      <h1>London Times</h1>
      <h1>{caseData.case1.newspaper.edition}</h1>
      {articles}
    </>
  );
};

export default Newspaper;

//TODO add feature allowing saved highlights?
