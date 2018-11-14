var dice = {
    sides: 6,
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
}

function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
}


document.addEventListener("DOMContentLoaded", function(e){
    var button = document.getElementById('button');
    console.log(button);

    button.onclick = function () {
        var result = dice.roll();
        printNumber(result);
    };
});

var valueP1_1 = document.getElementById("player1_ones"); //skapa variabel som tar ut värdet från P1 ettor
valueP1_1.addEventListener("change", updateValue); //händer när eventet "change" alltså när vi ändrar i inputen
function updateValue() {
    document.getElementById("totalvalue").totalvalue += valueP1_1; 
} // funktionen som adderar allting