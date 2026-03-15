let btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9
btn1 = btn2 = btn3 = btn4 = btn5 = btn6 = btn7 = btn8 = btn9 = false
let player = "X"
const text = document.getElementById("playerText")
text.innerHTML = `Player "${player}" turn`
let game = true

function checkVictory() {
    let gameWon = false
    if (btn1 === btn2 && btn2 === btn3 && btn3 !== false){
        gameWon = true
    }
    else if (btn4 === btn5 && btn5 === btn6 && btn6 !== false){
        gameWon = true
    }
    else if (btn7 === btn8 && btn8 === btn9 && btn9 !== false){
        gameWon = true
    }
    else if (btn1 === btn4 && btn4 === btn7 && btn7 !== false){
        gameWon = true
    }
    else if (btn2 === btn5 && btn5 === btn8 && btn8 !== false){
        gameWon = true
    }
    else if (btn3 === btn6 && btn6 === btn9 && btn9 !== false){
        gameWon = true
    }
    else if (btn1 === btn5 && btn5 === btn9 && btn9 !== false){
        gameWon = true
    }
    else if (btn3 === btn5 && btn5 === btn7 && btn7 !== false){
        gameWon = true
    }
    return gameWon
}

function switchPlayer(play, text) {
    play.innerHTML = player
    if (checkVictory() === true){
        const winner = document.getElementById("winText")
        winner.innerHTML = `Victory of "${player}"`
        winner.style.color = "black"
        winner.style.visibility = "visible";
        game = false
    } else {
        if (player === "X"){
            player = "O"
        } else {
            player = "X"
        }
        text.innerHTML = `Player "${player}" turn`
    }
}

function place1(){
    if (btn1 === false && game === true){
        const play = document.getElementById("bt1")
        const text = document.getElementById("playerText")
        btn1 = player
        switchPlayer(play, text)
    }
}

function place2(){
    if (btn2 === false && game === true){
        const play = document.getElementById("bt2")
        const text = document.getElementById("playerText")
        btn2 = player
        switchPlayer(play, text)
    }
}

function place3(){
    if (btn3 === false && game === true){
        const play = document.getElementById("bt3")
        const text = document.getElementById("playerText")
        btn3 = player
        switchPlayer(play, text)
    }
}

function place4(){
    if (btn4 === false && game === true){
        const play = document.getElementById("bt4")
        const text = document.getElementById("playerText")
        btn4 = player
        switchPlayer(play, text)
    }
}

function place5(){
    if (btn5 === false && game === true){
        const play = document.getElementById("bt5")
        const text = document.getElementById("playerText")
        btn5 = player
        switchPlayer(play, text)
    }
}

function place6(){
    if (btn6 === false && game === true){
        const play = document.getElementById("bt6")
        const text = document.getElementById("playerText")
        btn6 = player
        switchPlayer(play, text)
    }
}

function place7(){
    if (btn7 === false && game === true){
        const play = document.getElementById("bt7")
        const text = document.getElementById("playerText")
        btn7 = player
        switchPlayer(play, text)
    }
}

function place8(){
    if (btn8 === false && game === true){
        const play = document.getElementById("bt8")
        const text = document.getElementById("playerText")
        btn8 = player
        switchPlayer(play, text)
    }
}

function place9(){
    if (btn9 === false && game === true){
        const play = document.getElementById("bt9")
        const text = document.getElementById("playerText")
        btn9 = player
        switchPlayer(play, text)
    }
}