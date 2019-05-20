export const GESTURES = ["Rock", "Paper", "Scissors"];

const selectComputerGesture = () => {
  // TODO: Implement random selection of computer gesture
  return "Rock";
};

export const play = playerGesture => {
  const computerGesture = selectComputerGesture();

  // TODO: Implement game logic to calculate winner

  return {
    winner: ""
  };
};
