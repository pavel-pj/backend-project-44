import * as engine from '../index.js';

const isPrime = (number) => {
  let i = number - 1;
  while (i > 1) {
    if (number % i === 0) return false;
    i -= 1;
  }
  return true;
};
const brainPrimeDataQuestion = () => {
  const ask = engine.getRandomInt(1, 1000);
  let correctAnswer = '';
  (isPrime(ask)) ? correctAnswer = 'yes' : correctAnswer = 'no';
  return { ask, correctAnswer };
};
const brainPrimeProgram = () => {
  const name = engine.greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  engine.engine('brainPrimeDataQuestion', name);
};

export { brainPrimeProgram, brainPrimeDataQuestion };
