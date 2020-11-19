import React, { useContext } from "react";
import styled from "styled-components";
import { GameContext } from "../context";
import { Gesture, gestures, icons } from "../game";

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
  const context = useContext(GameContext);

  return (
    <nav>
      {
        gestures.map(g => (
          <Button onClick={() => context.setPlayerGesture(g)}>
            <span>{`${icons.get(g)} ${Gesture[g]}`}</span>
          </Button>
        ))
      }
    </nav>
  );
};