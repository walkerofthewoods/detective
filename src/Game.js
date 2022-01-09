// import type { Game, Move } from "boardgame.io";
import { INVALID_MOVE } from "boardgame.io/core";

export const Detective = {
  //returns initial value of G
  setup: () => ({ leadsFollowed: [], lettersObtained: [] }),

  turn: {
    minMoves: 1,
    maxMoves: 1,
  },

  moves: {
    followLead: (G, ctx, location) => {
      if (G.leadsFollowed.includes(location)) {
        return INVALID_MOVE;
      }
      G.leadsFollowed.push(location);
    },

    solveCase: (G, ctx) => {
      console.log(G.leadsFollowed);
    },
  },
};
