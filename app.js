


const wordLength = 6;
var validWords = {}; //make Hashmap
var validSeedWords = [];
var mainWord;





for (let i = 0; i < dictionary.length; i++){
    if (dictionary[i].length > 3 && dictionary[i].length <= 6){
        validWords[dictionary[i]] = true; //= to asign key and value
        if(dictionary[i].length == 6){
            validSeedWords.push(dictionary[i]);
        }
    }
}

let randWord = Math.floor(Math.random()*validSeedWords.length);
mainWord = validSeedWords[randWord];

//Populate Hashmap
console.log(mainWord);
console.log

//list of letters 
var letterList = [];
for(let i = 0; i < wordLength; i ++){
letterList.push((mainWord).substring(i ,i+1));
}

var letterBase = letterList
letterList.forEach(function(entry){
    console.log(entry);
});










//tester
//for(let i = 0; i < letterList.length; i++){
//    console.log(letterList[i]);
//}


var a =1;
var b =1;
var c =1;
var d =1;
var e =1;
var f =1;
var runningTotal = 0;
while (f < 6 ){
    console.log(a + b +c + d+ e+ f)
    runningTotal++
    console.log("running total " + runningTotal);
    console.log("End condition " + this.f);
    a++
    if (a > 6){
        b++
        a=0;
        if(b > 6){
            c++
            b = 0;
            if (c > 6){
                d++
                c = 0;
                if(d > 6){
                    e++;
                    d = 0;
                    if(e > 6){
                        f++
                        e = 0;
                    }
                }
            }
        }
    }


}
    

 
 