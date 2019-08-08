export type Gesture = "Rock" | "Paper" | "Scissors";
export const GESTURES: Array<Gesture> = ["Rock", "Paper", "Scissors"];
export type Result = "Player" | "Computer" | "Draw";

// TODO: Implement selection of computer gesture
const generateComputerGesture = () => "Rock";

export const play = (playerGesture: Gesture): Result => {
  const computerGesture = generateComputerGesture();

  // TODO: Implement game logic to calculate winner
  return "Player";
};
