import React, { FC, useState } from "react";
import { play, GESTURES, Gesture, generateComputerGesture } from "../game/game";

export const Game: FC<{}> = () => {
  const [winner, setWinner] = useState("Draw");
  const [hasPlayed, setHasPlayed] = useState(false);

  const playTheGame = (playerGesture: Gesture) => {
    setWinner(play(playerGesture, generateComputerGesture()));
    setHasPlayed(true);
  };

  return (
    <div>
      <h1>Rock, Paper, Scissors</h1>
      <h2>Make your selection:</h2>
      <div>
        {GESTURES.map((w) => (
          <button onClick={() => playTheGame(w)} key={w}>
            {w}
          </button>
        ))}
      </div>
      {winner && hasPlayed && (
        <div>
          {winner !== "Draw" && <h3>Winner: {winner}!</h3>}
          {winner === "Draw" && <h3>It's a draw!</h3>}
        </div>
      )}
    </div>
  );
};
