import readlineSync from 'readline-sync';

const brainEven = () => {

    const questions = 3;
    const name = greeting();

    console.log('Answer "yes" if the number is even, otherwise answer "no".');


    let iter = 0;
    for (iter; iter < questions; iter ++) {
        const {result, answer, correctAnswer} = questionIsEven();
        if (result) {
            console.log('Correct!');
        }
        else {
            console.log(answer +' is wrong answer ;(. Correct answer was \'' + correctAnswer + '\'.');
            console.log('Let\'s try again, ' + name + '!');
            break;
        }
    }
    if (iter === questions) {
        console.log('Congratulations, ' + name + '!');
    }


}

const greeting = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name?');
    console.log('Hello, '.concat(name));
    return name;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const questionIsEven = () => {

  const number = getRandomInt(1,100);
  const even = isEven(number);
  const correctAnswer = even ? 'yes' : 'no';

  console.log('Question : ' + number);
  const answer = readlineSync.question('Your answer :');

  if (correctAnswer === answer) {
       return { result:true,answer,correctAnswer };
  }

  return { result:false,answer,correctAnswer };


}

const isEven = (number) => {
    return number % 2 === 0;
}

export default brainEven;