let userName = 'Zawardo';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

let userQuestion = 'Am I the world?';

if (userQuestion && userName){
  console.log(`${userName} asks ${userQuestion.toLowerCase()}`);
}
else if (userQuestion) {
  console.log(userQuestion);
}
else if (userName) {
  console.log(`You don\'t have any questions for me ${userName}?`);
}
else{
  console.log(`You don\'t have any questions for me?`);
}


let randomNumber = Math.floor(Math.random()*8);
let eightBall = '';

switch (randomNumber){
  case 0 :
    eightBall = 'It is certain';
    break;
  case 1 :
    eightBall = 'It is decidedly so';
    break;
  case 2 :
    eightBall = 'Reply hazy try again';
    break;
  case 3 :
    eightBall = 'Cannot predict now';
    break;
  case 4 :
    eightBall = 'Do not count on it';
    break;
  case 5 :
    eightBall = 'My sources say no';
    break;
  case 6 :
    eightBall = 'Outlook not so good';
    break; 
  case 7 :
    eightBall = 'Signs point to yes';
    break; 
}

userQuestion ? console.log(eightBall) : console.log('--End of program.--');

