export const GESTURES = ["Rock", "Paper", "Scissors"];

const selectComputerGesture = () => {
  return GESTURES[Math.floor(Math.random() * 3)];
};

export const getResult = (playerGesture, computerGesture) => {
  if(playerGesture === 'Rock' && computerGesture === 'Rock') {
    return "Draw"
  }
  if(playerGesture === 'Rock' && computerGesture === 'Paper') {
    return "Computer"
  }
  if(playerGesture === 'Rock' && computerGesture === 'Scissors') {
    return "Player"
  }

  if(playerGesture === 'Paper' && computerGesture === 'Rock') {
    return "Player"
  }
  if(playerGesture === 'Paper' && computerGesture === 'Paper') {
    return "Draw"
  }
  if(playerGesture === 'Paper' && computerGesture === 'Scissors') {
    return "Computer"
  }

  if(playerGesture === 'Scissors' && computerGesture === 'Rock') {
    return "Computer"
  }
  if(playerGesture === 'Scissors' && computerGesture === 'Paper') {
    return "Player"
  }
  if(playerGesture === 'Scissors' && computerGesture === 'Scissors') {
    return "Draw"
  }
};

export const play = playerGesture => {
  const computerGesture = selectComputerGesture();
  const result = getResult(playerGesture,computerGesture);
  return {
    winner: result
  };
};
