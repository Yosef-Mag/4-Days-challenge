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
        boxes[i].innerHTML = player
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
    if ($(box0).val() === 'X' && $(box1).val() === 'X' && $(box2).val() === 'X') {
        alert('X Wins')
    }
    if ($(box0).val() === 'O' && $(box1).val() === 'O' && $(box2).val() === 'O') {
        alert('O Wins')
    }
    if ($(box3).val() === 'X' && $(box4).val() === 'X' && $(box5).val() === 'X') {
        alert('X Wins')
    }
    if ($(box3).val() === 'O' && $(box4).val() === 'O' && $(box5).val() === 'O') {
        alert('O Wins')
    }
    if ($(box6).val() === 'X' && $(box7).val() === 'X' && $(box8).val() === 'X') {
        alert('X Wins')
    }
    if ($(box6).val() === 'O' && $(box7).val() === 'O' && $(box8).val() === 'O') {
        alert('O Wins')
    }
    if ($(box0).val() === 'X' && $(box4).val() === 'X' && $(box8).val() === 'X') {
        alert('X Wins')
    }
    if ($(box0).val() === 'O' && $(box4).val() === 'O' && $(box8).val() === 'O') {
        alert('O Wins')
    }
    if ($(box0).val() === 'X' && $(box3).val() === 'X' && $(box6).val() === 'X') {
        alert('X Wins')
    }
    if ($(box0).val() === 'O' && $(box3).val() === 'O' && $(box6).val() === 'O') {
        alert('O Wins')
    }
    if ($(box1).val() === 'X' && $(box4).val() === 'X' && $(box7).val() === 'X') {
        alert('X Wins')
    }
    if ($(box1).val() === 'O' && $(box4).val() === 'O' && $(box7).val() === 'O') {
        alert('O Wins')
    }
    if ($(box2).val() === 'X' && $(box5).val() === 'X' && $(box8).val() === 'X') {
        alert('X Wins')
    }
    if ($(box2).val() === 'O' && $(box5).val() === 'O' && $(box8).val() === 'O') {
        alert('O Wins')
    }
    if ($(box2).val() === 'X' && $(box4).val() === 'X' && $(box6).val() === 'X') {
        alert('X Wins')
    }
    if ($(box2).val() === 'O' && $(box4).val() === 'O' && $(box6).val() === 'O') {
        alert('O Wins')
    }
}