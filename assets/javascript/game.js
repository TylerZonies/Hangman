// declare variables
var onePlayer = document.getElementById("1-player");
var twoPlayer = document.getElementById("2-player");

function play(word = pickedWord, hint = wordObj[pickedWord]){
    var wins = 0;
    var loss = 0;
    var guessLetters = [];
    var guessRemain = 12;
    var guessCorrect = 0;
    //set underline length for html
    var pickedWordUnderline = "";
    for (var i = 0; i < word.length; i++){
       if(word.indexOf(" ") == i){
           pickedWordUnderline += "     ";
       }
       else{
           pickedWordUnderline += " _";
       }
    } 

    //inner html
    document.getElementById("wordGuess").innerHTML = 
    "<div class = \"col-lg-12\">"+
        "<div class = \"row\">" +
            "<div class = \"col-lg-4 offset-lg-4\" id = \"myWord\">" +
                "<h2 class = \"text-center underline\" >" + pickedWordUnderline + "</h2>" +
            "</div>" + 
        "</div>" +
        "<div class = \"row\">" +
            "<div class = \"col-lg-4\">" + 
                "<div class = \"row\">" +
                    "<div class = \"col-lg-12\">" +
                        "<h2 class = \"text-center\"> Letters Guessed: </h2>" + 
                    "</div>" +
                "</div>" +
                "<div class = \"row\">" +
                    "<div class = \"col-lg-12\">" +    
                        "<span id = \"letterGuessed\" class = \"text-center\"> Press any letter key to start! </span>" +
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

    // set functions used in main
    // function for checking if 
    function checkChar(){

    }
    // function 
            



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