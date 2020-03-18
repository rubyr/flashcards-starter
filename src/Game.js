const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Round = require('./round');
const Deck = require('./deck');
const Card = require('./Card');

class Game {
  constructor() {
    this.currentRound = undefined;
  }

  printMessage(deck, round) {
    // eslint-disable-next-line no-console
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    const cards = [];
    prototypeQuestions.forEach(thing => {
      const card = new Card();
      Object.assign(card, thing);
      cards.push(card);
    });
    const deck = new Deck(cards);
    this.currentRound = new Round(deck);
    this.printMessage(deck, this.currentRound);
  }
}

module.exports = Game;