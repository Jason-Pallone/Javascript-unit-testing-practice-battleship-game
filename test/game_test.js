const expect = require('chai').expect;

describe('GAME INSTANCE FUNCTIONS', () => {
  describe('checkGameStatus', () => {
    const checkGameStatus = require('../game_logic/game_instance.js').checkGameStatus;
    it('should tell me when the game is over', () => {
      let players = [
        {
		  ships: [
		    {
			  locations: [[0, 0]],
			  damage: [[0, 0]]
		    }
		  ]
        }
      ];
      const actual = checkGameStatus(players);
      expect(actual).to.be.false;
    });
  });
});


describe('take turn', () => {
  const takeTurn = require('../game_logic/game_instance').takeTurn;
  let guess;
  
  beforeEach(() => {
    // We use this "guess" function stub to test the logic, before writing the real function.
    guess = () => [0, 0];
    player = {
      ships: [
        {
          locations: [[0, 0]],
          damage: []
        }
      ]
    }
  })

  it('should return false if the game ends', () => {
   const actual = takeTurn(player, guess);
   expect(actual).to.be.false;
  })
})