function computerPlay()//returns rock, paper, or scissors  
    {
        let choices = ['Rock', 'Paper', 'Scissors']
        return choices[Math.floor(Math.random() * 3)] 
    }

function capitalize(word) {//takes a string and makes the first letter capital, and everything else lowercase
        return (
          word.substr(0, 1).toUpperCase() + word.substr(1, word.length - 1).toLowerCase()
        )
        }

function round(playerSelection, computerSelection = computerPlay()) { //plays a singly round
    let win = 0; //0 = lose, 1 = win, 2 = draw
    //playerSelection = capitalize(playerSelection); //this is now useless because I do it in game
    if (playerSelection === computerSelection){
        win = 2;
    }
    else if (playerSelection === 'Rock'){
        if (computerSelection === 'Scissors')
            win = 1;//rock beats scissors, no need to change 0 if you lose
    }
    else if (playerSelection === 'Paper'){
        if (computerSelection === 'Rock')
        win = 1;
    }
    else if (playerSelection === 'Scissors'){
        if (computerSelection === 'Paper')
        win = 1;
    }
    else 
        return `Error, invalid answer: You wrote ${playerSelection}, the computer wrote ${computerSelection}`
    switch (win) {
        case 0:
            return `You Lost! ${computerSelection} beats ${playerSelection}!`
        case 1: 
            return `You Won! ${playerSelection} beats ${computerSelection}!`
        case 2:
            return `Draw! ${computerSelection} ties with ${playerSelection}!`
        }
    }

function game() {//plays five rounds
  console.log('Welcome to Rock Paper Scissors! You will play 5 rounds with the computer, good luck!')
  let playerSelection = ''
  let playerScore = 0
  let computerScore = 0
  let roundResult = ''
  for(let i = 0; i < 5; i++){
      playerSelection = capitalize(prompt('What do you choose? (Rock, Paper, or Scissors): '))
      //while(playerSelection !== 'Rock' || playerSelection !== 'Paper' || playerSelection !== 'Scissors') //prompt doesn't wait for a response so this turned into an infinite loop
           // console.log('Please enter a valid value!')
           // playerSelection = capitalize(prompt('What do you choose? (Rock, Paper, or Scissors): '))
      roundResult = round(playerSelection)
      console.log(roundResult)
      if(roundResult.substr(0, 5) == 'You W')
        playerScore++;
      else if(roundResult.substr(0, 5) == 'You L')
        computerScore++;
      console.log(`The current score is: ${playerScore} player : ${computerScore} computer `)
  }
  switch (true) {
    case playerScore === computerScore:
          console.log("It's a draw!")
          break;
    case playerScore > computerScore:
          console.log("You Win!")
          break;     
    case playerScore < computerScore:
          console.log("You Lose!")
          break;
  }
}

game()
