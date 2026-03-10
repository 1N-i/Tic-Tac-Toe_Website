let but1, but2, but3, but4, but5, but6, but7, but8, but9
but1 = but2 = but3 = but4 = but5 = but6 = but7 = but8 = but9 = false

let player = "X"

function switchPlayer() {
    if (player === "X"){
        player = "O"
    } else {
        player = "X"
    }
}

function place1(){
    if (but1 === false){
        const elementResult = document.getElementById("bt1")
        elementResult.innerHTML = player
        switchPlayer()
        but1 = true
    }
}

function place2(){
    if (but2 === false){
        const elementResult = document.getElementById("bt2")
        elementResult.innerHTML = player
        switchPlayer()
        but2 = true
    }
}

function place3(){
    if (but3 === false){
        const elementResult = document.getElementById("bt3")
        elementResult.innerHTML = player
        switchPlayer()
        but3 = true
    }
}

function place4(){
    if (but4 === false){
        const elementResult = document.getElementById("bt4")
        elementResult.innerHTML = player
        switchPlayer()
        but4 = true
    }
}

function place5(){
    if (but5 === false){
        const elementResult = document.getElementById("bt5")
        elementResult.innerHTML = player
        switchPlayer()
        but5 = true
    }
}

function place6(){
    if (but6 === false){
        const elementResult = document.getElementById("bt6")
        elementResult.innerHTML = player
        switchPlayer()
        but6 = true
    }
}

function place7(){
    if (but7 === false){
        const elementResult = document.getElementById("bt7")
        elementResult.innerHTML = player
        switchPlayer()
        but7 = true
    }
}

function place8(){
    if (but8 === false){
        const elementResult = document.getElementById("bt8")
        elementResult.innerHTML = player
        switchPlayer()
        but8 = true
    }
}

function place9(){
    if (but9 === false){
        const elementResult = document.getElementById("bt9")
        elementResult.innerHTML = player
        switchPlayer()
        but9 = true
    }
}