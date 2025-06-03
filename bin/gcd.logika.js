import { getRandomInt, startGame } from '../index.js';

const findGCD = (a, b) => {
  if (!b) return a;
  return findGCD(b, a % b);
};

const generateRound = () => {
  const a = getRandomInt(1, 100);
  const b = getRandomInt(1, 100);
  const question = `${a} ${b}`;
  const correctAnswer = String(findGCD(a, b));
  return [question, correctAnswer];
};

export const playGame = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  startGame(rules, generateRound);
};