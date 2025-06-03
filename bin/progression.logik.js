import { getRandomInt, startGame } from '../index.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const generateRound = () => {
  const progressionLength = 10;
  const start = getRandomInt(1, 50);
  const step = getRandomInt(1, 10);
  const progression = generateProgression(start, step, progressionLength);
  const hiddenIndex = getRandomInt(0, progressionLength - 1);
  const correctAnswer = String(progression[hiddenIndex]);
  
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export const playGame = () => {
  const rules = 'What number is missing in the progression?';
  startGame(rules, generateRound);
};