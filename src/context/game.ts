import { createContext } from "react";
import { Outcome } from "../game";

export interface IGameContext {
  outcome: Outcome;
  setOutcome: (outcome: Outcome) => void;
}

export const GameContext = createContext<IGameContext>({
  outcome: Outcome.None,
  setOutcome: () => {},
});

export const GameProvider = GameContext.Provider;
export const GameConsumer = GameContext.Consumer;
