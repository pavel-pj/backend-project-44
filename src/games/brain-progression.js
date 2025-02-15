import * as engine from '../index.js';

const brainProgressionDataQuestion = () => {
  const first = engine.getRandomInt(1, 100);
  const amount = engine.getRandomInt(9, 15);
  const step = engine.getRandomInt(3, 6);
  const position = engine.getRandomInt(1, amount);
  const array = [];

  let i = 0;
  let correctAnswer = '';
  while (i < amount) {
    let number = '';
    if (i !== position) {
      number = first + i * step;
    } else {
      correctAnswer = String(first + i * step);
      number = '..';
    }

    array.push(number);
    i += 1;
  }
  const ask = array.join(' ');
  return { ask, correctAnswer };
};

const brainProgressionProgram = () => {
  const name = engine.greeting();
  console.log('What number is missing in the progression?');
  engine.engine('brainProgressionDataQuestion', name);
};

export { brainProgressionProgram, brainProgressionDataQuestion };
