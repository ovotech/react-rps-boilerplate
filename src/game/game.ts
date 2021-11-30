export type Gesture = "Rock" | "Paper" | "Scissors";
export const GESTURES: Array<Gesture> = ["Rock", "Paper", "Scissors"];
export type Result = "Player" | "Computer" | "Draw";

// TODO: Implement selection of computer gesture
export const generateComputerGesture = () => {
  const randomNumber = Math.floor(Math.random() * GESTURES.length);
  return GESTURES[randomNumber];
};

export enum GestureTypes {
  rock = "Rock",
  paper = "Paper",
  scissors = "Scissors",
}

const playerIsTheWinner = (
  playerGesture: Gesture,
  computerGesture: Gesture
): boolean =>
  (playerGesture === GestureTypes.rock &&
    computerGesture === GestureTypes.scissors) ||
  (playerGesture === GestureTypes.scissors &&
    computerGesture === GestureTypes.paper) ||
  (playerGesture === GestureTypes.paper &&
    computerGesture === GestureTypes.rock);

const resultsAreIdentical = (
  playerGesture: Gesture,
  computerGesture: Gesture
) =>
  (playerGesture === GestureTypes.paper &&
    computerGesture === GestureTypes.paper) ||
  (playerGesture === GestureTypes.rock &&
    computerGesture === GestureTypes.rock) ||
  (playerGesture === GestureTypes.scissors &&
    computerGesture === GestureTypes.scissors);

// rules
// rock beats scissors
// scissors beats paper
// paper beats rock
export const play = (
  playerGesture: Gesture,
  computerGesture: Gesture
): Result =>
  !playerIsTheWinner(playerGesture, computerGesture)
    ? resultsAreIdentical(playerGesture, computerGesture)
      ? "Draw"
      : "Computer"
    : "Player";
