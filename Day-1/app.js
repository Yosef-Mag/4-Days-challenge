var test = function() {
    console.log('test')
}

var player1 = 'X';
var player2 = 'O';
var boxes = document.querySelectorAll('.gb') 

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

player1Turn = function() {
    document.getElementById('?').innerHTML = player1;
}
player2Turn = function() {
    document.getElementById('?').innerHTML = player2;
}
// loop over the hole bord boxes
// in first click add x
// second one o an so on ......
// chick if we have three xs or os in one of the 
// winning pos if true diclare winner
// if not and all boxes are fill draw 
var play = function() {
    console.log(boxes)
    for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function () {
        document.getElementById('b0').textContent = 'X';
        })
    } 
}
play()

// addEventListener("click", player1)
// addEventListener("click", )
// addEventListener("click", player1)
// addEventListener("click", )
// addEventListener("click", player1)
// addEventListener("click", )
// addEventListener("click", player1)
// addEventListener("click", )
// addEventListener("click", player1)
// addEventListener("click", )
// addEventListener("click", player1)
// addEventListener("click", )
// addEventListener("click", player1)
// addEventListener("click", )
// addEventListener("click", player1)
// addEventListener("click", )
// addEventListener("click", player1)
// addEventListener("click", )    