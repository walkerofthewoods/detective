//case intro (GiMagnifyingGlass)
// notes
//map (GiTreasureMap)
//newspaper (GiNewspaper)
//directory (FaRegAddressBook)
// informants
//chat (BsChatDots)

import React from "react";
import { Route, Routes } from "react-router-dom";

import { Directory, NavBar, Notes } from "./components";

const Board = () => {
  return (
    <div>
      <Routes>
        <Route path="/notes" element={<Notes />}></Route>
        <Route path="/map">{/* <Map /> */}</Route>
        <Route path="/paper">{/* <Paper /> */}</Route>
        <Route path="/directory" element={<Directory />}></Route>
        <Route path="/chat">{/* <Chat /> */}</Route>
        <Route path="/"></Route>
      </Routes>
      <NavBar />
    </div>
  );
};

export default Board;
