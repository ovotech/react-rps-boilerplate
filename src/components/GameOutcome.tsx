import React, { useContext } from "react";
import { GameContext } from "../context";
import { Outcome } from "../game";

export const GameOutcome: React.FunctionComponent = () => {
  const context = useContext(GameContext);
  const outcomeText = {
    [Outcome.None]: "Haven't played yet",
    [Outcome.Win]: "Player wins",
    [Outcome.Loss]: "Computer wins",
    [Outcome.Draw]: "Draw",
  };

  return (
    <main>
      {outcomeText[context.outcome]}
    </main>
  );
};