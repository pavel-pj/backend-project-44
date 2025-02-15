import * as engine from '../index.js';

const createNumbers = () => {
  const num1 = engine.getRandomInt(1, 100);
  const num2 = engine.getRandomInt(1, 100);
  return { num1, num2 };
};
const getGcd = (num1, num2) => {
  let max = 0;

  (num1 > num2) ? max = num1 : max = num2;

  for (let i = max; i >= 1; i -= 1) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
      return i;
    }
  }
  return 1;
};
const brainGcdDataQuestion = () => {
  const { num1, num2 } = createNumbers();
  const correctAnswer = String(getGcd(num1, num2));
  let ask = `${num1} ${num2}`;
  return { ask, correctAnswer };
};
const brainGcdProgram = () => {
  const name = engine.greeting();
  console.log('Find the greatest common divisor of given numbers.');
  engine.engine('brainGcdDataQuestion', name);
};

export { brainGcdProgram, brainGcdDataQuestion };
