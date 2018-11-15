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
function printNumber2(number) {
    var placeholder2 = document.getElementById('placeholder2');
    placeholder2.innerHTML = number;
}
function printNumber3(number) {
    var placeholder3 = document.getElementById('placeholder3');
    placeholder3.innerHTML = number;
}
function printNumber4(number) {
    var placeholder4 = document.getElementById('placeholder4');
    placeholder4.innerHTML = number;
}
function printNumber5(number) {
    var placeholder5 = document.getElementById('placeholder5');
    placeholder5.innerHTML = number;
}


document.addEventListener("DOMContentLoaded", function(e){
    var button = document.getElementById('button');
    console.log(button);

    button.onclick = function () {
        var result = dice.roll();
        printNumber(result);
        var result2 = dice.roll();
        printNumber2(result2);
        var result3 = dice.roll();
        printNumber3(result3);
        var result4 = dice.roll();
        printNumber4(result4);
        var result5 = dice.roll();
        printNumber5(result5);
    };
});

