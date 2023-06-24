import { Route, Routes } from "react-router-dom";
import { Directory, Map, NavBar, Notes, Newspaper } from "./components";

import type { BoardProps } from "boardgame.io/react";
import type { MyGameState } from "./Game.ts";

// const CellFrame = styled.div`
//   max-width: 400px;
//   max-height: 1100px;
//   margin: auto;
// `;

// interface MyGameProps extends BoardProps<MyGameState> {
//   // Additional custom properties for your component
// }

const Board = (props: any) => {
  return (
    <div className="max-w-sm">
      <Routes>
        <Route path="/notes" element={<Notes />}></Route>
        <Route path="/map" element={<Map />}></Route>
        <Route path="/paper" element={<Newspaper />}></Route>
        <Route path="/directory" element={<Directory />}></Route>
        <Route path="/chat">{/* <Chat /> */}</Route>
        <Route path="/"></Route>
      </Routes>
      <NavBar />
    </div>
  );
};

export default Board;
