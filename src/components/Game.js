import React, { Component } from "react";
import { WEAPONS, play } from "../game/game";

export default class Game extends Component {
  state = {
    winner: false
  };
  play(playerWeapon) {
    const result = play(playerWeapon);

    this.setState(result);
  }
  reset() {}
  render() {
    return (
      <div>
        <h1>Rock, Paper, Scissors</h1>
        <h2>Pick a weapon:</h2>
        <div>
          {WEAPONS.map(w => (
            <button onClick={() => this.play(w)} key={w}>
              {w}
            </button>
          ))}
        </div>
        {this.state.winner && (
          <div>
            {this.state.winner !== "Draw" && (
              <h3>Winner: {this.state.result}!</h3>
            )}
            {this.state.winner === "Draw" && <h3>It's a draw!</h3>}
            <button onClick={this.reset}>Again!</button>
          </div>
        )}
      </div>
    );
  }
}
