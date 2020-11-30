const expect = require('chai').expect;

describe('checkForShip', () => {
  const checkForShip = require('../game_logic/ship_methods').checkForShip;
  let player;

  /* Using "before" we can use the same player variable for each test spec within this test suite,
     so we are DRY coding. */
  before(()=>{
    player = {
      ships: [
        {
          locations: [[0,0], [0, 1]]
        },
        {
          locations: [[1,0], [1, 1]]
        }
      ]
    };
  });

  it('should correctly report no ship at a given players coordinates', () => {
    expect(checkForShip(player, [9, 9])).to.be.false;
  });


  it('should correctly report a ship at the given coordinates', () => {
    expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
  });

  it('should handle ships located at more than one coordinate', () => {
    expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [9, 9])).to.be.false;
  });
  

  it('should handle checking multiple ships', () => {
    expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [1, 0])).to.deep.equal(player.ships[1]);
    expect(checkForShip(player, [1, 1])).to.deep.equal(player.ships[1]);
    expect(checkForShip(player, [9, 9])).to.be.false;
  });
});



describe('damageShip', () => {
  let damageShip = require('../game_logic/ship_methods').damageShip;

  it('should register damage on a given ship at a given location', () => {
    let ship = {
      locations: [[0, 0]],
      damage: []
    };

    damageShip(ship, [0, 0]);

    expect(ship.damage).to.not.empty;
    expect(ship.damage[0]).to.deep.equal([0, 0]);
  });
});


describe('fire', () => {
  let fire = require('../game_logic/ship_methods').fire;
  let player;

  /* using "beforeEach" is similar to using "before", "beforeEach" will overwrite the player variable
     before each spec. This way we can continue to use the same player variable for each spec within this suite.
     So we can be DRY coding. We are using "beforeEach" here because we are pushing to the damage array with 
     each successful call of the fire function that matched a ships location. */
  beforeEach(() => {
    player = {
      ships: [
        {
          locations: [[0, 0]],
          damage: []
        }
      ]
    };
  });

  // "after" runs at the very end of the test suite, after ALL test specs have finished.
  after(() => {
    console.log('entire test suite completed')
  });

  // "afterEach" runs after EACH test spec has compeleted in this test suite.
  afterEach(() => {
    console.log('one unit test completed')
  })

  it('should record damage on the given players ship at a given coordinate', () => {
    fire(player, [0, 0])
    expect(player.ships[0].damage[0]).to.deep.equal([0, 0])
  });

  it('should NOT record damage if there is no ship at given coordinates', () => {
    fire(player, [0, 1])
    expect(player.ships[0].damage).to.be.empty;
  });
});