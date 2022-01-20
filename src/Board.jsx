//case intro (GiMagnifyingGlass)
// notes
//map (GiTreasureMap)
//newspaper (GiNewspaper)
//directory (FaRegAddressBook)
// informants
//chat (BsChatDots)

import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Directory, NavBar, Notes } from "./components";

const CellFrame = styled.div`
  background-color: greenyellow;
  border-color: green;
  /* display: inline-block; */
  max-width: 750px;
  max-height: 1100px;
  margin: auto;
`;

const Board = () => {
  return (
    <CellFrame>
      <Routes>
        <Route path="/notes" element={<Notes />}></Route>
        <Route path="/map">{/* <Map /> */}</Route>
        <Route path="/paper">{/* <Paper /> */}</Route>
        <Route path="/directory" element={<Directory />}></Route>
        <Route path="/chat">{/* <Chat /> */}</Route>
        <Route path="/"></Route>
      </Routes>
      <NavBar />
    </CellFrame>
  );
};

export default Board;
