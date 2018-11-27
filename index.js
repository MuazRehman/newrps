// JavaScript File
var userScore = 0;
var computerScore = 0;
var userspan;
var computerspan;

window.onload = function(){
    var rock = document.querySelector("#rock");
    var paper = document.querySelector("#paper");
    var scissors = document.querySelector("#scissors");
rock.addEventListener('click',function (){
         game("r");
});

paper.addEventListener('click',function (){
         game("p");
});  

scissors.addEventListener('click',function (){
         game("s");
});

userspan = document.querySelector("#user-score");
computerspan = document.querySelector("#computer-score");
}


function getComputerChoice() {
    var choices = ['r','p','s'];
    var randomNumber=Math.floor(Math.random() *3);
return choices[randomNumber];

}
    
function win() {
    userspan.innerHTML = ++userScore;
    alert("You Won!");
}

function lose(){
    computerspan.innerHTML = ++computerScore;
    alert("You Lost");
}
    
function game(userchoice) {
    var computerChoice = getComputerChoice();
    switch (userchoice + computerChoice) {
        case "rs":
        win();
        break;
        case "pr":
        win();
        break;
        case "sp":
        win();
        break;
        default:
        lose();
}
}