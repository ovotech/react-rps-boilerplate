export const WEAPONS = ["Rock", "Paper", "Scissors"];

const selectComputerWeapon = () => {
  // TODO: Implement random selection of computer weapon
  return "Rock";
};

export const play = playerWeapon => {
  const computerWeapon = selectComputerWeapon();

  // TODO: Implement game logic to calculate winner

  return {
    winner: ""
  };
};
