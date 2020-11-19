import { createContext } from "react";
import { Outcome, Gesture } from "../game";

export interface IGameContext {
  outcome: Outcome;
  playerGesture: Gesture | null;
  setPlayerGesture: (gesture: Gesture) => void;
}

export const GameContext = createContext<IGameContext>(
  {
    outcome: Outcome.None,
    playerGesture: null,
    setPlayerGesture: () => { },
  }
);

export const GameProvider = GameContext.Provider;
export const GameConsumer = GameContext.Consumer;