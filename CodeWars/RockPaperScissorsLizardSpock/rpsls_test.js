const assert=require('chai').assert

describe('rock paper scissors lizard spock', function() {
  
  it('player 1 Wins', function() {
    assert.strictEqual(rpsls('rock', 'lizard'), 'Player 1 Won!');
    assert.strictEqual(rpsls('paper', 'rock'), 'Player 1 Won!');
    assert.strictEqual(rpsls('scissors', 'lizard'), 'Player 1 Won!');
    assert.strictEqual(rpsls('lizard', 'paper'), 'Player 1 Won!');
    assert.strictEqual(rpsls('spock', 'rock'), 'Player 1 Won!');
  });

  it('player 2 wins', function() {
    assert.strictEqual(rpsls('lizard','scissors'), 'Player 2 Won!');
    assert.strictEqual(rpsls('spock','lizard'), 'Player 2 Won!');
    assert.strictEqual(rpsls('paper','lizard'), 'Player 2 Won!');
    assert.strictEqual(rpsls('scissors','spock'), 'Player 2 Won!');
    assert.strictEqual(rpsls('rock','spock'), 'Player 2 Won!');

  });

  it('draw', function() {
    assert.strictEqual(rpsls('rock', 'rock'), 'Draw!');
    assert.strictEqual(rpsls('spock', 'spock'), 'Draw!');
  });
});