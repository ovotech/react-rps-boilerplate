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

export const play = (
  playerGesture: Gesture,
  computerGesture: Gesture
): Result => {
  // rules
  // rock beats scissors
  if (
    playerGesture === GestureTypes.rock &&
    computerGesture === GestureTypes.scissors
  )
    return "Player";

  // scissors beats paper
  if (
    playerGesture === GestureTypes.scissors &&
    computerGesture === GestureTypes.paper
  )
    return "Player";

  // paper beats rock
  if (
    playerGesture === GestureTypes.paper &&
    computerGesture === GestureTypes.rock
  )
    return "Player";
  // if values are identical -> draw
  if (resultsAreIdentical(playerGesture, computerGesture)) return "Draw";

  return "Computer";
};
