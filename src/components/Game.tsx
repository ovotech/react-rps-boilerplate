import React, { useEffect, useState } from "react";
import { determineOutcome, Gesture, Outcome } from "../game";
import { GameProvider } from "../context";

export const Game: React.FunctionComponent = ({ children }) => {
  const [outcome, setOutcome] = useState(Outcome.None);
  const [playerGesture, setPlayerGesture] = useState<Gesture | null>(null);

  useEffect(() => {
    if (playerGesture !== null) {
      setOutcome(determineOutcome(playerGesture));
    }
  }, [playerGesture])

  const context = {
    outcome,
    playerGesture,
    setPlayerGesture,
  };

  return (
    <GameProvider value={context}>
      {children}
    </GameProvider>
  );
};
