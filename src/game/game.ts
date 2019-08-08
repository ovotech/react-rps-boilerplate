export type Weapon = "Rock" | "Paper" | "Scissors";
export const weapons: Array<Weapon> = ["Rock", "Paper", "Scissors"];
export type Result = "Player" | "Computer" | "Draw";

export const play = (playerWeapon: Weapon, computerWeapon: Weapon): Result => {
  // TODO: Implement game logic to calculate winner
  return "Player";
};
