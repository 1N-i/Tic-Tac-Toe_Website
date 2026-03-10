let btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9
btn1 = btn3 = btn7 = btn9 = false
btn2 = btn4 = btn6 = btn8 = "false"
btn5 = "False"

let player = "X"

/*
 1 | 2 | 3
---|---|---
 4 | 5 | 6
---|---|---
 7 | 8 | 9
*/

function checkVictory() {
    if (btn1 === btn2 && btn2 === btn3){
        const winner = document.getElementById("winText")
        winner.innerHTML = `Victory of "${player}"`
    }
    if (btn4 === btn5 && btn5 === btn6){
        const winner = document.getElementById("winText")
        winner.innerHTML = `Victory of "${player}"`
    }
    if (btn7 === btn8 && btn8 === btn9){
        const winner = document.getElementById("winText")
        winner.innerHTML = `Victory of "${player}"`
    }
    if (btn1 === btn4 && btn4 === btn7){
        const winner = document.getElementById("winText")
        winner.innerHTML = `Victory of "${player}"`
    }
    if (btn2 === btn5 && btn5 === btn8){
        const winner = document.getElementById("winText")
        winner.innerHTML = `Victory of "${player}"`
    }
    if (btn3 === btn6 && btn6 === btn9){
        const winner = document.getElementById("winText")
        winner.innerHTML = `Victory of "${player}"`
    }
    if (btn1 === btn5 && btn5 === btn9){
        const winner = document.getElementById("winText")
        winner.innerHTML = `Victory of "${player}"`
    }
    if (btn3 === btn5 && btn5 === btn7){
        const winner = document.getElementById("winText")
        winner.innerHTML = `Victory of "${player}"`
    }
}

function switchPlayer(play, text) {
    text.innerHTML = `Player "${player}" turn`
    if (player === "X"){
        player = "O"
    } else {
        player = "X"
    }
    play.innerHTML = player
    checkVictory()
}

function place1(){
    if (btn1 === false){
        const play = document.getElementById("bt1")
        const text = document.getElementById("playerText")
        btn1 = player
        switchPlayer(play, text)
    }
}

function place2(){
    if (btn2 === "false"){
        const play = document.getElementById("bt2")
        const text = document.getElementById("playerText")
        btn2 = player
        switchPlayer(play, text)
    }
}

function place3(){
    if (btn3 === false){
        const play = document.getElementById("bt3")
        const text = document.getElementById("playerText")
        btn3 = player
        switchPlayer(play, text)
    }
}

function place4(){
    if (btn4 === "false"){
        const play = document.getElementById("bt4")
        const text = document.getElementById("playerText")
        btn4 = true
        switchPlayer(play, text)
    }
}

function place5(){
    if (btn5 === "False"){
        const play = document.getElementById("bt5")
        const text = document.getElementById("playerText")
        btn5 = true
        switchPlayer(play, text)
    }
}

function place6(){
    if (btn6 === "false"){
        const play = document.getElementById("bt6")
        const text = document.getElementById("playerText")
        btn6 = true
        switchPlayer(play, text)
    }
}

function place7(){
    if (btn7 === false){
        const play = document.getElementById("bt7")
        const text = document.getElementById("playerText")
        btn7 = true
        switchPlayer(play, text)
    }
}

function place8(){
    if (btn8 === "false"){
        const play = document.getElementById("bt8")
        const text = document.getElementById("playerText")
        btn8 = true
        switchPlayer(play, text)
    }
}

function place9(){
    if (btn9 === false){
        const play = document.getElementById("bt9")
        const text = document.getElementById("playerText")
        btn9 = true
        switchPlayer(play, text)
    }
}