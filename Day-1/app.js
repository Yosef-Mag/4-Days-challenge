var test = function() {
    console.log('test')
}
var boxes = document.querySelectorAll('.gb')
var player = 'X';

box0 = document.getElementById('b0');
box1 = document.getElementById('b1');
box2 = document.getElementById('b2');
box3 = document.getElementById('b3');
box4 = document.getElementById('b4');
box5 = document.getElementById('b5');
box6 = document.getElementById('b6');
box7 = document.getElementById('b7');
box8 = document.getElementById('b8');

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


// loop over the hole bord boxes
// in first click add x
// second one o an so on ......
// chick if we have three xs or os in one of the 
// winning pos if true diclare winner
// if not and all boxes are fill draw 


var play = function() {
    console.log(boxes)
    for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function() {
        box0.innerHTML = player
        box1.innerHTML = player
        box2.innerHTML = player
        box3.innerHTML = player
        box4.innerHTML = player
        box5.innerHTML = player
        box6.innerHTML = player
        box7.innerHTML = player
        box8.innerHTML = player
        winner();
        switchP();
    }, false)
    } 
}
play()

var playerHandler = function() {
    console.log('test')
}

var switchP = function() {
    if (player === 'X'){
        player = 'O';
    }
    else {
        player = 'X'
    }
}

var winner = function() {
    if (box0.value  === 'X' && box1.value === 'X' && box2.value === 'X') {
        alert('X Wins')
    }
    else if (box0.value === 'O' && box1.value === 'O' && box2.value === 'O') {
        alert('O Wins')
    }
    else if (box3.value === 'X' && box4.value === 'X' && box5.value === 'X') {
        alert('X Wins')
    }
    else if (box3.value === 'O' && box4.value === 'O' && box5.value === 'O') {
        alert('O Wins')
    }
    else if (box6.value === 'X' && box7.value === 'X' && box8.value === 'X') {
        alert('X Wins')
    }
    else if (box6.value === 'O' && box7.value === 'O' && box8.value === 'O') {
        alert('O Wins')
    }
    else if (box0.value === 'X' && box4.value === 'X' && box8.value === 'X') {
        alert('X Wins')
    }
    else if (box0.value === 'O' && box4.value === 'O' && box8.value === 'O') {
        alert('O Wins')
    }
    else if (box0.value === 'X' && box3.value === 'X' && box6.value === 'X') {
        alert('X Wins')
    }
    else if (box0.value === 'O' && box3.value === 'O' && box6.value === 'O') {
        alert('O Wins')
    }
    else if (box1.value === 'X' && box4.value === 'X' && box7.value === 'X') {
        alert('X Wins')
    }
    else if (box1.value === 'O' && box4.value === 'O' && box7.value === 'O') {
        alert('O Wins')
    }
    else if (box2.value === 'X' && box5.value === 'X' && box8.value === 'X') {
        alert('X Wins')
    }
    else if (box2.value === 'O' && box5.value === 'O' && box8.value === 'O') {
        alert('O Wins')
    }
    else if (box2.value === 'X' && box4.value === 'X' && box6.value === 'X') {
        alert('X Wins')
    }
    else if (box2.value === 'O' && box4.value === 'O' && box6.value === 'O') {
        alert('O Wins')
    }
    else if (document.getElementsByTagName('gb').value === true){
        alert('Draw')
    }
}