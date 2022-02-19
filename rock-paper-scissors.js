let playerScore = 0
let computerScore = 0
//const winningScore = 5 //Orginally I was going to have a score to play to to win, but I actually found it more fun for it to go on forever
startGame()


function incrementPlayerScore() {
    playerScore += 1
}

function incrementComputerScore() {
    computerScore += 1
}

function startGame() {//simply creates the UI, and plays the game using the logic from other functions
    playerScore = 0
    computerScore = 0

    const body = document.querySelector('body')

    const rock = document.createElement('button')
    const paper = document.createElement('button')
    const scissors = document.createElement('button')
    const player = document.createElement('h2')
    const computer = document.createElement('h2')

    rock.id = 'Rock'
    rock.textContent = rock.id
    paper.id = 'Paper'
    paper.textContent = paper.id
    scissors.id = 'Scissors'
    scissors.textContent = scissors.id
    player.textContent = `Your score is: ${playerScore}`
    computer.textContent = `The comptuer's score is: ${computerScore}`

    body.append(rock)
    body.append(paper)
    body.append(scissors)
    body.append(player)
    body.append(computer)


    const div = document.createElement('div')
    const div_player = document.createElement('p')
    const div_computer = document.createElement('p')
    const div_result = document.createElement('p')

    div.append(div_player)
    div.append(div_computer)
    div.append(div_result)
    body.append(div)

    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
        //const body = document.querySelector('body')
        computerMove = computerPlay()

        div_player.textContent = `You chose ${button.id}!`
        div_computer.textContent = `The computer chose ${computerMove}!`
        div_result.textContent = round(button.id, computerMove)  
        
        
        player.textContent = `Your score is: ${playerScore}`
        computer.textContent = `The comptuer's score is: ${computerScore}`

        })
})
}


function computerPlay()//returns rock, paper, or scissors  
    {
        let choices = ['Rock', 'Paper', 'Scissors']
        return choices[Math.floor(Math.random() * 3)] 
    }


function round(playerSelection, computerSelection = computerPlay()) { //plays a singly round
    let win = 0; //0 = lose, 1 = win, 2 = draw
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
        return `Error, invalid answer: You wrote ${playerSelection}, the computer wrote ${computerSelection}`//no longer occurs because there is no user input anymore
    switch (win) {
        case 0:
            incrementComputerScore()
            return `You Lost! ${computerSelection} beats ${playerSelection}!`
        case 1: 
            incrementPlayerScore()
            return `You Won! ${playerSelection} beats ${computerSelection}!`
        case 2:
            return `Draw! ${computerSelection} ties with ${playerSelection}!`
        }
    }


