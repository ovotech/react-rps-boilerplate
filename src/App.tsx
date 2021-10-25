import * as React from "react";
import { Game, GameOutcome, GameControls, GameWrapper } from "./components";

class App extends React.Component {
  render() {
    return (
      <GameWrapper>
        <Game>
          <header>
            <h1>Kaluza Interview Exercise</h1>
          </header>
          <GameControls />
          <GameOutcome />
        </Game>
      </GameWrapper>
    );
  }
}

export default App;
