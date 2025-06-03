import { getRandomInt, startGame } from '../index.js';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export const playGame = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  startGame(rules, generateRound);
};