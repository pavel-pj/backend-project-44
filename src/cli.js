import readlineSync from 'readline-sync';

export const cliQuestion = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log('Hello, '.concat(name));
};

export default cliQuestion;
