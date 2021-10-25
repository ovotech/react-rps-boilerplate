import React, { useContext } from "react";
import styled from "styled-components";
import { GameContext } from "../context";
import { Gesture, gestures, icons, Outcome } from "../game";

const Button = styled.button`
  font-size: 1em;
  margin-left: 0.5em;
  line-height: 1.5em;

  span {
    line-height: 1.5em;
  }

  :first-child {
    margin-left: 0px;
  }
`;

export const GameControls: React.FunctionComponent = () => {
  const { setOutcome } = useContext(GameContext);

  const handleGestureSelection = (playerGesture: Gesture) => {
    // TODO:
    // Set the outcome based on the game logic
    //
    setOutcome(Outcome.None);
  };

  return (
    <nav>
      {gestures.map((g) => (
        // TODO:
        // Run gesture selection based on button clicks
        //
        <Button onClick={() => {}}>
          <span>{`${icons.get(g)} ${Gesture[g]}`}</span>
        </Button>
      ))}
    </nav>
  );
};
