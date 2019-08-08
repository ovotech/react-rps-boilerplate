import * as React from "react";
import { play, weapons, Weapon, Result } from "../game/game";

type State = {
  winner: Result;
  hasPlayed: boolean;
};

export default class Game extends React.Component<{}, State> {
  state = {
    winner: "Draw" as Result,
    hasPlayed: false
  };

  play(playerWeapon: Weapon) {
    const computerWeapon = weapons[Math.floor(Math.random() * weapons.length)];
    const winner = play(playerWeapon, computerWeapon);

    this.setState({ winner, hasPlayed: true });
  }

  render() {
    return (
      <div>
        <h1>Rock, Paper, Scissors</h1>
        <h2>Pick a weapon:</h2>
        <div>
          {weapons.map(w => (
            <button onClick={() => this.play(w)} key={w}>
              {w}
            </button>
          ))}
        </div>
        {this.state.winner && this.state.hasPlayed && (
          <div>
            {this.state.winner !== "Draw" && (
              <h3>Winner: {this.state.winner}!</h3>
            )}
            {this.state.winner === "Draw" && <h3>It's a draw!</h3>}
          </div>
        )}
      </div>
    );
  }
}
