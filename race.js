let raceNumber = Math.floor(Math.random() * 1000);
let registered = false;
const runnersAge = 19;

if (runnersAge > 18 && registered){
  raceNumber += 1000;
}

if (runnersAge > 18 && registered){
  console.log (`Your race number is ${raceNumber} and your race starts at 9:30am`);
}
else if (runnersAge > 18){
  console.log (`Your race number is ${raceNumber} and your race starts at 11:00am`);
}
else if (runnersAge < 18){
    console.log (`Your race number is ${raceNumber} and your race starts at 12:30pm`);
}
else {
    console.log ('Please see the registration desk.');
}
