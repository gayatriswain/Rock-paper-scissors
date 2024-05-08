let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorep = document.querySelector("#user-score");
const compscorep = document.querySelector("#comp-score");

const genComputerChoice = () => {
 const options = ["rock", "paper", "scisscors"];
 const randomval = Math.floor(Math.random() *3);
 return options[randomval];
};


const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game was draw, play again.";
    msg.style.backgroundColor= "yellow";
    msg.style.color = "black";
};

const showWinner = (userWin , userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userscorep.innerText = userScore;
        console.log("you win");
        msg.innerText = ` You Win! ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor= "green";
    }else{
        compScore++;
        compscorep.innerText = compScore;
        console.log("you lose");
        msg.innerText =  `You Lose! ${compChoice} beats ${userChoice} `;
        msg.style.backgroundColor= "red";
    }
};

const playGame = (userChoice) => {  
    console.log("user choice = ", userChoice);
    const compChoice =  genComputerChoice();
    console.log("comp choice = ", compChoice);


    if(userChoice === compChoice){
      drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
           userWin =  compChoice === "paper" ?false : true;

        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false: true;
        }else{
          userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
