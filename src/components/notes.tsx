import caseData from "../data/cases";

const Notes = (exploredLeads) => {
  return (
    <>
      <h1>Introduction</h1>
      <p>{caseData.case1.intro}</p>
    </>
  );
};

export default Notes;

//TODO Make it so that when a new lead is explored, it is appended top of notes.
//TODO add feature allowing player to save highlighted text?
