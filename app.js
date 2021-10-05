
const wordLength = 6;
let validWords = new Map(); //make Hashmap
var validSeedWords = [];
var sucsessfulWordScramble = [];
var mainWord;




//refine words by length
//Populate Hashmap
for (let i = 0; i < dictionary.length; i++){
    if (dictionary[i].length >= 3 && dictionary[i].length <= 6){
        validWords.set(dictionary[i]); //= to asign key and value
        if(dictionary[i].length == 6){
            validSeedWords.push(dictionary[i]);
        }
    }
}
//selecty random word
let randWord = Math.floor(Math.random()*validSeedWords.length);
mainWord = validSeedWords[randWord];

console.log(mainWord);

//list of letters 
var letterList = [];
for(let i = 0; i < wordLength; i ++){
letterList.push((mainWord).substring(i ,i+1));
}

for












//tester
//for(let i = 0; i < letterList.length; i++){
//    console.log(letterList[i]);
//}


var a =0;
var b =0;
var c =0;
var d =0;
var e =0;
var f =0;
const layer1 = 120;
const layer2 = 24
const layer3 = 6
const layer4 = 2
const layer5 = 1




console.log(letterList);


function checkHashmap(){
if(runningTotal < 216){
    
    threeLetterWord = (letterList[a]+letterList[b]+letterList[c]);
    console.log(threeLetterWord)
    console.log(validWords.has(threeLetterWord));
    if(validWords.has(threeLetterWord)){
        validWords.push(threeLetterWord);
        console.log("sucsess!")
    }
        //sucsessfulWordScramble
    
}

}

console.log("length "+validWords.size)

   
console.log(validWords.has("abase"));

 
 