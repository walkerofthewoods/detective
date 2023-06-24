import { Client } from "boardgame.io/react";
import { Detective } from "./Game";
import { Local } from "boardgame.io/multiplayer";
import Board from "./Board";
import { BrowserRouter as Router } from "react-router-dom";

const DetectiveClient = Client({
  game: Detective,
  board: Board,
  multiplayer: Local({ persist: true }),
  numPlayers: 1,
  // disableUndo: true,
});

const App = () => (
  <Router>
    <DetectiveClient playerID="0" />
  </Router>
);

export default App;
