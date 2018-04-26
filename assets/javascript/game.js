// declare variables
var onePlayer = document.getElementById("1-player");
var twoPlayer = document.getElementById("2-player");
var wins = 0;
var loss = 0;

var imgSrc = document.getElementById("hangmanImg");



function play(word, hint){
    var currentLetterText = "";
    var letterIndex = 0;
    var guessLetters = [];
    var guessLettersC = [];
    var guessRemain = 12;
    var guessCorrect = 0;
    var editUnderline = "";
    var correctGuess = [];
    var hasSpace = false;
    imgSrc.innerHTML = "<img src = \"assets/images/0.png\" alt = \"hanging man\" />";
    //set underline length for html
    var pickedWordUnderline = "";
    for (var i = 0; i < word.length; i++){
       if(word.split("")[i] == " "){
           pickedWordUnderline += " -";
           correctGuess[i] = " -"
           guessCorrect++;
           console.log(guessCorrect + " 24");
       }
       else{
           pickedWordUnderline += " _";
           correctGuess[i] = " _";
       }
    } 

    //inner html
    document.getElementById("wordGuess").innerHTML = 
    "<div class = \"col-lg-12\">"+
        "<div class = \"row\">" +
            "<div class = \"col-lg-12\" id = \"myWord\">" +
                "<h2 class = \"text-center underline\" id = \"underlineText\">" + pickedWordUnderline + "</h2>" +
            "</div>" + 
        "</div>" +
        "<div class = \"row\">" +
            "<div class = \"col-lg-4\" id = \"letterGuessDiv\">" + 
                "<div class = \"row\">" +
                    "<div class = \"col-lg-12\">" +
                        "<h2 class = \"text-center\"> Letters Guessed: </h2>" + 
                    "</div>" +
                "</div>" +
                "<div class = \"row\">" +
                    "<div class = \"col-lg-12\">" +    
                        "<h2><span id = \"letterGuessed\" class = \"text-center\"> Press any letter key to start! </span></h2>" +
                    "</div>" +
                "</div>" +
            "</div>" +
            "<div class = \"col-lg-4\">" +
                "<div class = \"row\">" +
                    "<div class = \"col-lg-12\">" +
                        "<div class = \"row\">" +
                            "<div class = \"col-lg-12\">" +
                                "<h2 class = \"text-center\">Wins: <span id = \"winText\">" + wins + "</span></h2>" +
                            "</div>" +
                        "</div>" +
                        "<div class = \"row\">" + 
                            "<div class = \"col-lg-12\">" +
                                "<h2 class = \"text-center\"> Losses: <span id = \"lossText\">" + loss + "</span></h2>" +
                            "</div>" + 
                        "</div>" + 
                        "<div class = \"row\">" +
                            "<div class = \"col-lg-12\">" +
                                "<h2 class = \"text-center\"> Guesses remaining: <span id = \"remainText\">" + guessRemain + "</span></h2>" +
                            "</div>" + 
                        "</div>" + 
                    "</div>" +
                "</div>" +
            "</div>" +
            "<div class = \"col-lg-4\" id = \"hintHTML\">" +
            "</div>" +
        "</div>" +
    "</div>";

    // add guessed letter to array of previous guesses

    // funtion when guess is commited
    function onGuess(guess){
        var wordSplit = word.split("");
        console.log(word.length + " line 84");


        console.log("76 into func")
        if(guessLetters.indexOf(guess) == -1 && guessLettersC.indexOf(guess) == -1){
            if (word.indexOf(guess) != -1){
                guessLettersC.push(guess);
                console.log("90" + guessCorrect);
                for(var i = 0; i < wordSplit.length; i++){
                    if(guess == wordSplit[i]){
                        correctGuess[i] = guess;
                        guessCorrect++;
                    }
                }
                pickedWordUnderline = "";
                for(var i = 0; i < correctGuess.length; i++){
                    pickedWordUnderline += " " + correctGuess[i];
                }
                console.log(pickedWordUnderline, word.indexOf(guess));
                document.getElementById("underlineText").textContent = pickedWordUnderline;
            }else {
                console.log("80 in");
                guessLetters.push(guess);
                if(currentLetterText !== ""){
                    console.log(guessLetters[letterIndex]);
                    currentLetterText += " " + guessLetters[letterIndex];
                }else{
                    console.log(guessLetters[letterIndex] + letterIndex + "bing");                    
                    currentLetterText = guessLetters[letterIndex];
                }


                letterIndex++;
                console.log(currentLetterText);
                document.getElementById("letterGuessed").textContent = currentLetterText;
                guessRemain--;
                document.getElementById("remainText").textContent = guessRemain;
            }
            if(guessRemain == 5){
                document.getElementById("hintHTML").innerHTML = 
                "<h2 class = \"hintText text-center\"> Hint: </h2> <br>" + hint;
            }
            if(guessRemain == 10){
                imgSrc.innerHTML = "<img src = \"assets/images/1.png\" alt = \"step one of hanging man\" />";
            }else if(guessRemain == 8){
                imgSrc.innerHTML = "<img src = \"assets/images/2.png\" alt = \"step 2 of hanging man\" />";
            }else if(guessRemain == 6){
                imgSrc.innerHTML = "<img src = \"assets/images/3.png\" alt = \"step 3 of hanging man\" />";
            }else if(guessRemain == 4){
                imgSrc.innerHTML = "<img src = \"assets/images/4.png\" alt = \"step 4 of hanging man\" />";
            }else if(guessRemain == 2){
                imgSrc.innerHTML = "<img src = \"assets/images/5.png\" alt = \"step 5 of hanging man\" />";
            }else if(guessRemain == 0){
                imgSrc.innerHTML = "<img src = \"assets/images/6.png\" alt = \"last step of hanging man\" />";
                loss++;
                document.getElementById("lossText").textContent = loss;
                document.getElementById("underlineText").textContent = word;
                document.getElementById("letterGuessDiv").innerHTML = 
                "<h2 class = \"congratsText\"> Sorry you lose!! </h2>"+
                "<h3> Play again? </h2>" +
                "<div class=\"col-lg-2 offset-lg-4\">" +
                    "<button type=\"button\" id= \"1-player2\" class=\"btn btn-outline-dark\" onclick=\"\">1 Player</button>" +
                "</div>" +
                "<div class=\"col-lg-2\">" +
                    "<button type=\"button\" id=\"2-player2\" class=\"btn btn-outline-dark\">2 Player</button>" +
                "</div>";
                var onePlayer2 = document.getElementById("1-player2");
                onePlayer2.onclick = function ply12(){
                    console.log("does it.");
                    play1();
                }
            }
            if(guessCorrect == word.length){
                console.log("Win In 118");
                wins++;
                document.getElementById("hintHTML").innerHTML = 
                "<h2 class = \"hintText text-center\"> Hint: </h2> <br>" + hint;
                document.getElementById("letterGuessDiv").innerHTML = 
                "<h2 class = \"congratsText\"> Congradulations You Win!!!! </h2>"+
                "<h3> Play again? </h2>" +
                "<div class=\"col-lg-2 offset-lg-4\">" +
                    "<button type=\"button\" id= \"1-player2\" class=\"btn btn-outline-dark\" onclick=\"\">1 Player</button>" +
                "</div>" +
                "<div class=\"col-lg-2\">" +
                    "<button type=\"button\" id=\"2-player2\" class=\"btn btn-outline-dark\">2 Player</button>" +
                "</div>";
                document.getElementById("winText").textContent = wins;
                var onePlayer2 = document.getElementById("1-player2");
                onePlayer2.onclick = function ply12(){
                    console.log("does it.");
                    play1();
                }


            }
        }
    }
    

    document.onkeyup = function myfunc(event){
        onGuess(event.key);
    }

}
// 1 player game
function play1(){
    console.log("in");
    // define arrays of possible words
    var wordsObj = {
        "ariel pink": "pop music from alternate time line.",
        "boards of canada": "scottish brother duo.",
        "animal collective": "move to new york, start a noise band with your roomates, smoke cloves, listen to animal collective.",
        "tame impala": "ausi ausi ausi, oy oy oy.",
        "broadcast": "michael, michael michael",
        "john maus": "whachu gunna do with all that money.",
        "joy division": "very under appreciated band.",
        words: ["ariel pink", "boards of canada", "animal collective", "tame impala", "broadcast", "john maus", "joy division"]
    }

    // pick word
    var pickedWord = wordsObj.words[Math.floor(Math.random() * wordsObj.words.length)];
    console.log(wordsObj[pickedWord]);

    play(pickedWord, wordsObj[pickedWord]);
}
// 2 player game 
function play2(){


}
onePlayer.onclick = function ply1(){
    play1();
}

twoPlayer.onclick = function ply2(){
    play2();
}




// 2 player game