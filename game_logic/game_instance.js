const fire = require('./ship_methods').fire;

function checkGameStatus(player) {
  return false;
}


function takeTurn(opposingPlayer, guessFunction) {
  const coordinates = guessFunction();
  fire(opposingPlayer, coordinates)
  const gameOver = checkGameStatus();

  return gameOver;
}

module.exports.checkGameStatus = checkGameStatus;
module.exports.takeTurn = takeTurn;