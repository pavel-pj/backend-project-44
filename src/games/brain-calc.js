import * as engine from '../index.js';

const add = (num1, num2) => num1 + num2;
const substract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const createNumbers = () => {
  const num1 = engine.getRandomInt(1, 100);
  const num2 = engine.getRandomInt(1, 100);
  return { num1, num2 };
};
const getRandomOperation = () => {
  const value = engine.getRandomInt(1, 3); // 1 - plus; 2 - minus; 3 = multiply
  return value;
};
const brainCalcDataQuestion = () => {
  const { num1, num2 } = createNumbers();
  const operationType = getRandomOperation();
  let correctAnswer = 0;
  let ask = '';
  if (operationType === 1) {
    correctAnswer = String(add(num1, num2));
    ask = `${num1} + ${num2};`;
  } else if (operationType === 2) {
    correctAnswer = String(substract(num1, num2));
    ask = `${num1} - ${num2}`;
  } else if (operationType === 3) {
    correctAnswer = String(multiply(num1, num2));
    ask = `${num1} * ${num2}`;
  }
  return { ask, correctAnswer };
};

const brainCalcProgram = () => {
  const name = engine.greeting();
  console.log('What is the result of the expression?');
  engine.engine(brainCalcDataQuestion, name);
};

export { brainCalcProgram, brainCalcDataQuestion };
