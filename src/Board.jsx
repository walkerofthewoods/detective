import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Directory, NavBar, Notes, Newspaper } from "./components";

const CellFrame = styled.div`
  max-width: 400px;
  max-height: 1100px;
  margin: auto;
`;

const Board = () => {
  return (
    <CellFrame>
      <Routes>
        <Route path="/notes" element={<Notes />}></Route>
        <Route path="/map">{/* <Map /> */}</Route>
        <Route path="/paper" element={<Newspaper />}></Route>
        <Route path="/directory" element={<Directory />}></Route>
        <Route path="/chat">{/* <Chat /> */}</Route>
        <Route path="/"></Route>
      </Routes>
      <NavBar />
    </CellFrame>
  );
};

export default Board;
