import React, { useState } from "react";
import { Outcome } from "../game";
import { GameProvider } from "../context";

export const Game: React.FunctionComponent = ({ children }) => {
  const [outcome, setOutcome] = useState(Outcome.None);

  const context = {
    outcome,
    setOutcome,
  };

  return <GameProvider value={context}>{children}</GameProvider>;
};
