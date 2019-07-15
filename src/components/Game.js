import React, { Component } from "react";
import { GESTURES, play } from "../game/game";

const initialState = {
  winner: ""
};

export default class Game extends Component {
  state = initialState;

  play(playerGesture) {
    const result = play(playerGesture);
    this.setState(result);
  }

  reset = () => {
    this.setState(initialState);
  };

  render() {
    return (
      <div>
        <h1>Rock, Paper, Scissors</h1>

        <div>
          {this.state.winner === "" && <div>Pick a gesture:</div>}

          {this.state.winner === "Draw" && <div>It's a draw!</div>}

          {this.state.winner !== "" && this.state.winner !== "Draw" && (
            <div>Winner: {this.state.winner}!</div>
          )}

          {this.state.winner !== "" && <button onClick={() => this.reset()}>Again!</button>}
        </div>

        <div>
          {this.state.winner === "" &&
            GESTURES.map(w => (
              <button onClick={() => this.play(w)} key={w}>
                {w}
              </button>
            ))}
        </div>
      </div>
    );
  }
}
