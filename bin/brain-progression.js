#!/usr/bin/env node
import readlineSync from 'readline-sync'

const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i)
  }
  return progression
}

const playProgressionGame = () => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  console.log('What number is missing in the progression?')

  const roundsCount = 3

  for (let i = 0; i < roundsCount; i += 1) {
    const progressionLength = Math.floor(Math.random() * 6) + 5 // 5-10 чисел
    const start = Math.floor(Math.random() * 10) + 1
    const step = Math.floor(Math.random() * 5) + 1
    const hiddenIndex = Math.floor(Math.random() * progressionLength)

    const progression = generateProgression(start, step, progressionLength)
    const correctAnswer = progression[hiddenIndex].toString()

    const progressionWithHidden = [...progression]
    progressionWithHidden[hiddenIndex] = '..'
    const question = progressionWithHidden.join(' ')

    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${userName}!`)
}

playProgressionGame()