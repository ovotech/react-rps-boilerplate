import { GestureTypes, play } from "./game";

describe("Game logic", () => {
  it.each`
    player                   | computer                 | outcome       | winner
    ${GestureTypes.rock}     | ${GestureTypes.scissors} | ${"Player"}   | ${"winner"}
    ${GestureTypes.scissors} | ${GestureTypes.paper}    | ${"Player"}   | ${"winner"}
    ${GestureTypes.paper}    | ${GestureTypes.rock}     | ${"Player"}   | ${"winner"}
    ${GestureTypes.paper}    | ${GestureTypes.paper}    | ${"Draw"}     | ${"draw"}
    ${GestureTypes.scissors} | ${GestureTypes.rock}     | ${"Computer"} | ${"loser"}
    ${GestureTypes.paper}    | ${GestureTypes.scissors} | ${"Computer"} | ${"loser"}
    ${GestureTypes.rock}     | ${GestureTypes.paper}    | ${"Computer"} | ${"loser"}
  `(
    "should return player as the $winner when player is $player and computer is $computer",
    ({ player, computer, outcome }) => {
      expect.assertions(1);
      const result = play(player, computer);
      expect(result).toBe(outcome);
    }
  );
});
