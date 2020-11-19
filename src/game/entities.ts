export enum Gesture {
  Rock,
  Paper,
  Scissors,
  // TODO:
  // For the extension, uncomment the following lines:
  // 
  // Lizard,
  // Spock,
}

export enum Outcome {
  None,
  Win,
  Loss,
  Draw
}

export const icons = new Map<Gesture, string>(
  [
    [Gesture.Rock, "\u270A"],
    [Gesture.Paper, "\u270B"],
    [Gesture.Scissors, "\u270C"],
    // TODO:
    // For the extension, uncomment the following lines:
    // 
    // [Gesture.Lizard, "\u1F98E"],
    // [Gesture.Spock, "\u1F596"],
  ]
);

export const gestures: Gesture[] = [
  Gesture.Rock,
  Gesture.Paper,
  Gesture.Scissors,
  // TODO:
  // For the extension, uncomment the following lines:
  // 
  // Gesture.Lizard,
  // Gesture.Spock,
];