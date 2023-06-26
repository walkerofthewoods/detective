import { Route, Routes } from "react-router-dom";
import { Directory, Map, NavBar, Notes, Newspaper } from "./components";

import type { BoardProps } from "boardgame.io/react";
import type { MyGameState } from "./Game.ts";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
interface MyGameProps extends BoardProps<MyGameState> {
  // Additional custom properties for your component
}

const Board = (props: MyGameProps) => {
  return (
    <div className="m-auto max-h-[1100px] max-w-[400px]">
      <Routes>
        <Route path="/notes" element={<Notes />}></Route>
        <Route path="/map" element={<Map />}></Route>
        <Route path="/paper" element={<Newspaper />}></Route>
        <Route path="/directory" element={<Directory />}></Route>
        {/* <Route path="/chat"><Chat /></Route> */}
        <Route path="/"></Route>
      </Routes>
      <NavBar />
    </div>
  );
};

export default Board;
