// import type { Game, Move } from "boardgame.io";
import { INVALID_MOVE } from "boardgame.io/core";
import { useNavigate } from "react-router-dom";

export const Detective = {
  //this is a react hook and needs to be in a react function
  const navigate = useNavigate();
  
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
      navigate(`/directory/${location}`);
    },
    
    solveCase: (G, ctx) => {
      console.log(G.leadsFollowed);
      //Series 1 and 2 questions
      //Holmes' explanation
      //Scoring
    },
  },
};
