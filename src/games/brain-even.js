import * as engine from '../index.js';

const isEven = (number) => number % 2 === 0;
function makeDataQuestion() {
  const number = engine.getRandomInt(1, 100);
  const even = isEven(number);
  const correctAnswer = even ? 'yes' : 'no';
  return { ask: number, correctAnswer };
}

const brainEvenProgram = () => {
  const name = engine.greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  engine.engine(makeDataQuestion, name);
};

export { makeDataQuestion, brainEvenProgram };
