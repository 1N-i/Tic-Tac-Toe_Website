let btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9
btn1 = btn2 = btn3 = btn4 = btn5 = btn6 = btn7 = btn8 = btn9 = false

let player = "X"

function switchPlayer(play, text) {
    if (player === "X"){
        player = "O"
    } else {
        player = "X"
    }
    play.innerHTML = player
    text.innerHTML = `Player "${player}" turn`
}

function place1(){
    if (btn1 === false){
        const play = document.getElementById("bt1")
        const text = document.getElementById("text")
        switchPlayer(play, text)
        btn1 = true
    }
}

function place2(){
    if (btn2 === false){
        const play = document.getElementById("bt2")
        const text = document.getElementById("text")
        switchPlayer(play, text)
        btn2 = true
    }
}

function place3(){
    if (btn3 === false){
        const play = document.getElementById("bt3")
        const text = document.getElementById("text")
        switchPlayer(play, text)
        btn3 = true
    }
}

function place4(){
    if (btn4 === false){
        const play = document.getElementById("bt4")
        const text = document.getElementById("text")
        switchPlayer(play, text)
        btn4 = true
    }
}

function place5(){
    if (btn5 === false){
        const play = document.getElementById("bt5")
        const text = document.getElementById("text")
        switchPlayer(play, text)
        btn5 = true
    }
}

function place6(){
    if (btn6 === false){
        const play = document.getElementById("bt6")
        const text = document.getElementById("text")
        switchPlayer(play, text)
        btn6 = true
    }
}

function place7(){
    if (btn7 === false){
        const play = document.getElementById("bt7")
        const text = document.getElementById("text")
        switchPlayer(play, text)
        btn7 = true
    }
}

function place8(){
    if (btn8 === false){
        const play = document.getElementById("bt8")
        const text = document.getElementById("text")
        switchPlayer(play, text)
        btn8 = true
    }
}

function place9(){
    if (btn9 === false){
        const play = document.getElementById("bt9")
        const text = document.getElementById("text")
        switchPlayer(play, text)
        btn9 = true
    }
}