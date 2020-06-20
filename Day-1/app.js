var test = function() {
    console.log('test')
}

// starting move
var player = 'X';

// calling the pos for winning fun
var boxes = document.querySelectorAll('.gb')
// calling the pos
var box0 = document.getElementById('b0');
var box1 = document.getElementById('b1');
var box2 = document.getElementById('b2');
var box3 = document.getElementById('b3');
var box4 = document.getElementById('b4');
var box5 = document.getElementById('b5');
var box6 = document.getElementById('b6');
var box7 = document.getElementById('b7');
var box8 = document.getElementById('b8');

// winning pos
var winningCompo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];

// adding X/O 
var play = function () {
    box0.addEventListener("click", function() {
        box0.innerHTML = player
        switchP();
        winner();
    });
    
    box1.addEventListener("click", function() {
        box1.innerHTML = player
        winner();
        switchP();
    })
    
    box2.addEventListener("click", function() {
        box2.innerHTML = player
        winner();
        switchP();
    })
    
    box3.addEventListener("click", function() {
        box3.innerHTML = player
        winner();
        switchP();
    })
    
    box4.addEventListener("click", function() {
        box4.innerHTML = player
        winner();
        switchP();
    })
    
    box5.addEventListener("click", function() {
        box5.innerHTML = player
        winner();
        switchP();
    })
    
    box6.addEventListener("click", function() {
        box6.innerHTML = player
        winner();
        switchP();
    })
    
    box7.addEventListener("click", function() {
        box7.innerHTML = player
        winner();
        switchP();
    })
    
    box8.addEventListener("click", function() {
        box8.innerHTML = player
        winner();
        switchP();
    })
    
    
var switchP = function() { 
    if (player === 'X'){
        player = 'O';
}
        else {
            player = 'X'
        }
    }
    
    var winner = function() {
        if (box0.value === "X" && box1.value === "X" ) {
            console.log("X Wins")
        }
    }
}
    play()