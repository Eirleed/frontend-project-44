#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

const getRandomNumber = () => Math.floor(Math.random() * 100); 

const isEven = (num) => num % 2 === 0;

const brainEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = greetUser();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const questionNumber = getRandomNumber();
    console.log(`Question: ${questionNumber}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return; 
    }

    console.log('Correct!');
    correctAnswers += 1;
  }

  console.log(`Congratulations, ${name}!`); 
};

brainEvenGame();


import { playGame } from '../bin/logika.js';

playGame();