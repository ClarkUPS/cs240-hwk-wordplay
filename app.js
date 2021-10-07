//Length of words
var wordLength = 6;

//Array for inital valid words
var validWords = new Array();

//array for list of 6 letter words
var validSeedWords = new Array();

//array used for scrambling the word for printout
var tempArray = new Array();
//Shuffled state of the root word
var shuffledWord;

//list for the final list of words
var finalWordList = new Array();

//hash for indiviual words (old)
var tempHash = new Map();

//array of blank words
var wordsAndBlanks = new Array(); //print out array of hidden words and words that have been sucsessfully guessed

//A sumple feild for the number of correct guesses the player has receaved
var correctWordGuesses = 0;

//Root Word
var mainWord; //stores the value of the root word

//Stores rootword letters in array
var letterList = new Array();

//Puts words of length 3 to 6 in array to shrink down dictionary
//Adds to valid seed words if words are length 6 or more
for (let i = 0; i < dictionary.length; i++) {
  if (dictionary[i].length >= 3 && dictionary[i].length <= 6) {
    validWords.push(dictionary[i]); //to add words to array
    if (dictionary[i].length == 6) {
      validSeedWords.push(dictionary[i]);
    }
  }
}

//selects random word and set to main word
let randWord = Math.floor(Math.random() * validSeedWords.length);
mainWord = validSeedWords[randWord];

//################### TESTING #######################

// mainWord = "glide";
// validWords.length = 0;
// validWords.push("gdl");

//################### TESTING #######################
mainWord = "argyll";
//Splits the main word up into individual letters
letterList = mainWord.split("");

// for (entry of letterListDuplicates) {
//   console.log(entry);
// }

//Loop though all the final /////ERROR HERE
//To Hashmap to check for duplicate letters
//Function to turn word into hashmap <letter,freq>
function createHashmaps(wordToHash) {
  let tempMap = new Map();
  for (let i = 0; i < wordToHash.length; i++) {
    if (tempMap.has(wordToHash[i])) {
      tempMap.set(wordToHash[i], tempMap.get(wordToHash[i]) + 1);
    } else {
      tempMap.set(wordToHash[i], 1);
    }
  }
  return tempMap;
}

// for (entry of createHashmaps(mainWord)) {
//   console.log(entry);
// }

//Test

//Refines the vaild words down by adding those which share all common letters
//COMMON LETTER REFINE

var correctLetterWords = new Array();
//Loop to check and make sure words match
var mainWordHashMap = createHashmaps(mainWord);
//Test letters in each word agains main word hashmap
//boolean to check for
for (let i = 0; i < validWords.length; i++) {
  let validLetters = true;
  //loop through each letter

  let currWord = validWords[i];
  for (let j = 0; j < currWord.length; j++) {
    if (!mainWordHashMap.has(currWord[j])) {
      validLetters = false;
      break;
    }
  }
  if (validLetters == true) {
    correctLetterWords.push(validWords[i]);
  }
}
alert("valid words length" + validWords.length);
alert("valid correct letterwords length" + correctLetterWords.length);
console.log(correctLetterWords);
//Common Letter Refine print

// for (let i = 0; i < correctLetterWords.length; i++) {
//   console.log(correctLetterWords[i]);
// }

alert();

//Need to refine further by checking number of times each letter comes up
//REFINE LETTER FREQ
//PUSH TO FINAL
for (let i = 0; i < correctLetterWords.length; i++) {
  let testerWordHashMap = createHashmaps(correctLetterWords[i]);
  let validLetterCount = true;
  console.log("Current word: " + correctLetterWords[i]);
  for (let j = 0; j < letterList.length; j++) {
    //check to make sure each letter is less than or equal to in number than that of the main word hashmap
    console.log("working on letter: " + letterList[j]);
    console.log("Main word: has letter?" + mainWordHashMap.get(letterList[j]));
    console.log("Tester word as letter" + testerWordHashMap.get(letterList[j]));
    if (
      mainWordHashMap.get(letterList[j]) >=
        testerWordHashMap.get(letterList[j]) ||
      testerWordHashMap.get(letterList[j]) == undefined
    ) {
      //Do noting
    } else {
      console.log("=====ERROR=====");
      //Change boolean to false
      validLetterCount = false;
      break;
    }
  }
  if (validLetterCount == true) {
    finalWordList.push(correctLetterWords[i]);
  }
}

console.log("correct letter words: " + correctLetterWords.length);
console.log("Final word list: " + finalWordList.length);
alert();
//Game Processing

//finalWordList.push("cat");
//finalWordList.push("fish");

//Create array of blank letter lengths
for (let i = 0; i < finalWordList.length; i++) {
  let blanks = new Array();
  for (let j = 0; j < finalWordList[i].length; j++) {
    blanks += "-";
  }
  wordsAndBlanks.push(blanks);
}

//sh0uffle time
//function to shuffle sort array
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  array.sort(() => Math.random() - 0.5);
  array.sort(() => Math.random() - 0.5);
  array.sort(() => Math.random() - 0.5);
  array.sort(() => Math.random() - 0.5);
  array.sort(() => Math.random() - 0.5);
}

//shuffle array and combine word
//copy the array down
var tempArray = letterList.slice(0);

shuffle(tempArray);
shuffledWord =
  tempArray[0] +
  tempArray[1] +
  tempArray[2] +
  tempArray[3] +
  tempArray[4] +
  tempArray[5];

//print out both the words and the blanks
for (let i = 0; i < finalWordList.length; i++) {
  //console.log(finalWordList[i]);
}
//console.log(finalWordList.length);
//console.log(correctWordGuesses);
while (correctWordGuesses < finalWordList.length) {
  //Print out letter
  console.log("Letters Avalable: " + shuffledWord); //broken
  console.log(mainWord);
  //Print out blanks
  for (let i = 0; i < wordsAndBlanks.length; i++) {
    console.log(wordsAndBlanks[i]);
  }
  //logic of the game
  let playerInput = prompt("Make a guess!");
  if (playerInput == null) {
    break;
  }

  if (finalWordList.includes(playerInput)) {
    //update blanks
    let tempIndex = finalWordList.indexOf(playerInput);
    wordsAndBlanks.splice(tempIndex, 1, playerInput);

    alert("You got a word!");
    correctWordGuesses++;
  } else {
    alert("Sorry, that is not a word :'(");
  }

  console.clear();
}

//Clear for final screen
console.clear();

//Ending text and results!
if (correctWordGuesses == finalWordList.length) {
  console.log("Wow, you got all of them! You Win!");
} else {
  console.log(
    "You got " + correctWordGuesses + " out of " + finalWordList.length
  );
}

console.log("");

for (let i = 0; i < finalWordList.length; i++) {
  console.log(finalWordList[i]);
}
