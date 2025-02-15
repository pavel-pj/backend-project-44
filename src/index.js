import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log('Hello, '.concat(name));
  return name;
};

function getRandomInt(min, max) {
  const minF = Math.ceil(min);
  const maxF = Math.floor(max);
  return Math.floor(Math.random() * (maxF - minF + 1)) + minF;
}
const question = (ask, correctAnswer) => {
  console.log(`Question : ${ask}`);
  const answer = readlineSync.question('Your answer :');

  if (correctAnswer === answer) {
    return { result: true, answer };
  }
  return { result: false, answer };
};
const engine = (callback, name) => {
  const questions = 3;
  let iter = 0;

  for (iter; iter < questions; iter += 1) {
    const { ask, correctAnswer } = callback();
    const { result, answer } = question(ask, correctAnswer);

    if (result) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again,${name}!`);
      break;
    }
  }
  if (iter === questions) {
    console.log(`Congratulations,${name}!`);
  }
};

export {
  greeting,
  question,
  getRandomInt,
  engine,
};
