import { getRandomInt, startGame } from '../index.js';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export const playGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGame(rules, generateRound);
};