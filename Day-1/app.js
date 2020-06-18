var test = function() {
    console.log('test')
}
var boxes = document.querySelectorAll('.gb')
var player = 'X';



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