function game() {


    alert("<-------- WELCOME TO THE GAME ------->")
    alert("The Game will  be of 5 Rounds")

    let playerscore = 0;
    let computerscore = 0;


    //<------------ Making One Round ------------ >  

    function round() {
        let playerSelection = prompt("Rock , Paper or Scissors ? ");
        

        //<------------ Getting Choice From Computer ------------ >  

        let x = Math.floor(Math.random() * 3);
        console.log(x);
        function getComputerChoice() {
            if (x == 0) {
                return "Rock";
            } else if (x == 1) {
                return "Paper";
            }
            else {
                return "Scissor";
            }
        }
        console.log(getComputerChoice());

        let computerSelection = getComputerChoice();


        if (playerSelection == "Rock" && computerSelection == "Paper") {
            computerscore += 1;
            return ("You Lose! Paper beats Rock");
        } else if (playerSelection == "Paper" && computerSelection == "Scissor") {
            computerscore += 1;
            return ("You Lose! Scissor beats Paper");
        } else if (playerSelection == "Scissor" && computerSelection == "Rock") {
            computerscore += 1;
            return ("You Lose! Rock beats Scissor");
        }
        else if (playerSelection == "Rock" && computerSelection == "Scissor") {
            playerscore += 1;
            return ("You Won! Rock beats Scissor");
        }
        else if (playerSelection == "Paper" && computerSelection == "Rock") {
            playerscore += 1;
            return ("You Won! Paper beats Rock");
        }
        else if (playerSelection == "Scissor" && computerSelection == "Paper") {
            playerscore += 1;
            return ("You Won! Scissor beats Paper");
        }
        else if (playerSelection == "Scissor" && computerSelection == "Scissor") {
            return ("Draw");
        }
        else if (playerSelection == "Rock" && computerSelection == "Rock") {
            return ("Draw");
        }
        else {
            return "Draw";
        }


    }

    for (let i = 0; i < 5; i++) {
        round()
        if (i == 4) {
            console.log("The playerscore is ",playerscore);
            console.log("The Computer score is ",computerscore);

            if (playerscore > computerscore) {
                alert("YOU WON!");
                console.log("you won");
            } else {
                alert("YOU LOSE!");
                console.log("you lose");
            }
        }
    }
}