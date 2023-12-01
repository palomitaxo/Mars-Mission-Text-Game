//intro
alert('Hello!')

//intro game
alert('Starting your Mars Adventure!');
alert('Booting up...');
alert('All systems go!');
alert("Let's start!");

//ask user for info
const username = prompt("Hi there. What's your name?");
alert(`Hi, ${username} --- Welcome to The Mars Adventure Game.`);

// Explain game
alert(`Hi, ${username} --- Welcome to The Mars Adventure Game.`);
alert('Yesterday, you received a call from your good friend at NASA.');
alert("They need someone to go to Mars this weekend, and YOU'VE been chosen!!");

//ask user que
let excited = prompt('Are you excited? Type Y or N');

//response intake
if (excited === 'Y') {
    alert("I knew you'd say that. It's so cool that you're going to Mars!");
  }
  
  if (excited === 'N') {
    alert("Well, it's too late to back out now.");
  }

//prompt user for number of suitcase
alert("It's time to pack for your trip to Mars.");
let numSuitcases = prompt('How many suitcases do you plan to bring?');

//turn function into number
numSuitcases = Number(numSuitcases);

//conditional statement to inform user
if (numSuitcases > 2) {
    alert("That's way too many. You'll have to pack more lightly.");
    alert('Please try to fit your stuff into 2 suitcases.');
  } else {
    alert("Perfect. You'll certainly fit in the spaceship!");
  }


//ask if they brought a pet!
alert("You're allowed to bring one companion animal with you.");

const companionType = prompt('What kind of companion animal would you like to bring?');

let companionName = prompt("What is your companion's name?");

let firstLetter = companionName[0];
firstLetter = firstLetter.toUpperCase();

let otherLetters = companionName.slice(1);
otherLetters = otherLetters.toLowerCase();

companionName = firstLetter + otherLetters;

// Confirm animal
alert(`Cool, so you're bringing ${companionName} the ${companionType}.`);

//spaceship decor prompt
alert('NASA has a interior design team offering to outfit your space ship.');
alert(`You have a couple of options for the interior decor of your ship. Your options are:
A  Sleek, modern minimalism
B  Retro/vintage space age
C  Victorian-era steampunk
`);

let decorChoice = prompt('Which decor would you like? Choose A, B, or C.');

let decor;
if (decorChoice === 'A') {
  decor = 'modern minimalist';
} else if (decorChoice === 'B') {
  decor = 'retro';
} else if (decorChoice === 'C') {
  decor = 'steampunk';
}

alert(`${username} and ${companionName}, surfing the celestial abyss, in a ${decor} spaceship.`);

alert('5...');
alert('4...');
alert('3...');
alert('2...');
alert('1...');
alert('*** LIFTOFF ***');




