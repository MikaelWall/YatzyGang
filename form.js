document.addEventListener("DOMContentLoaded", function (event) {
    console.log(1);
    var userProfile = [];

    let playerA = {
        userID: 123,
        username: "Yatzy Master 1337",
        password: "cirkus123",
        name: "Thomas Bean",
        highscore: 374
    };

    userProfile.push(playerA);

    let playerB = {
        userID: 124,
        username: "Dice Destroyer",
        password: "beansucks",
        name: "Tony Hawk",
        highscore: 373
    };

    userProfile.push(playerB);

    var totalPoints = [];

    /* let btn = document.getElementById("calcSum");
 
     function updateValue(event) {
         var totalValue = parseInt(document.getElementById("player1_ones").value);
         document.getElementById("player1:_totalSum").value = totalValue;
     }
 
     btn.addEventListener("click", updateValue);*/

    var valueP1_1 = document.getElementById("player1_ones");
    var valueP1_2 = document.getElementById("player1_twos");
    var valueP1_3 = document.getElementById("player1_threes");
    var valueP1_4 = document.getElementById("player1_fours");
    var valueP1_5 = document.getElementById("player1_fives");
    var valueP1_6 = document.getElementById("player1_sixes");

    var valueP2_1 = document.getElementById("player2_ones");
    var valueP2_2 = document.getElementById("player2_twos");
    var valueP2_3 = document.getElementById("player2_threes");
    var valueP2_4 = document.getElementById("player2_fours");
    var valueP2_5 = document.getElementById("player2_fives");
    var valueP2_6 = document.getElementById("player2_sixes");

    var valueP3_1 = document.getElementById("player3_ones");
    var valueP3_2 = document.getElementById("player3_twos");
    var valueP3_3 = document.getElementById("player3_threes");
    var valueP3_4 = document.getElementById("player3_fours");
    var valueP3_5 = document.getElementById("player3_fives");
    var valueP3_6 = document.getElementById("player3_sixes");

    var valueP4_1 = document.getElementById("player4_ones");
    var valueP4_2 = document.getElementById("player4_twos");
    var valueP4_3 = document.getElementById("player4_threes");
    var valueP4_4 = document.getElementById("player4_fours");
    var valueP4_5 = document.getElementById("player4_fives");
    var valueP4_6 = document.getElementById("player4_sixes");

    console.log(valueP1_1);
    //Player 1
    valueP1_1.addEventListener("change", updateValue1);
    valueP1_2.addEventListener("change", updateValue1);
    valueP1_3.addEventListener("change", updateValue1);
    valueP1_4.addEventListener("change", updateValue1);
    valueP1_5.addEventListener("change", updateValue1);
    valueP1_6.addEventListener("change", updateValue1);

    //Player 2
    valueP2_1.addEventListener("change", updateValue2);
    valueP2_2.addEventListener("change", updateValue2);
    valueP2_3.addEventListener("change", updateValue2);
    valueP2_4.addEventListener("change", updateValue2);
    valueP2_5.addEventListener("change", updateValue2);
    valueP2_6.addEventListener("change", updateValue2);

    //Player 3
    valueP3_1.addEventListener("change", updateValue3);
    valueP3_2.addEventListener("change", updateValue3);
    valueP3_3.addEventListener("change", updateValue3);
    valueP3_4.addEventListener("change", updateValue3);
    valueP3_5.addEventListener("change", updateValue3);
    valueP3_6.addEventListener("change", updateValue3);

    //Player 4
    valueP4_1.addEventListener("change", updateValue4);
    valueP4_2.addEventListener("change", updateValue4);
    valueP4_3.addEventListener("change", updateValue4);
    valueP4_4.addEventListener("change", updateValue4);
    valueP4_5.addEventListener("change", updateValue4);
    valueP4_6.addEventListener("change", updateValue4);


    function updateValue1() {
        let sum1 = 0;
        sum1 += parseInt(valueP1_1.value);
        sum1 += parseInt(valueP1_2.value);
        sum1 += parseInt(valueP1_3.value);
        sum1 += parseInt(valueP1_4.value);
        sum1 += parseInt(valueP1_5.value);
        sum1 += parseInt(valueP1_6.value);
        document.getElementById("player1_bonussum").value = sum1;
        if (sum1 >= 63){
        document.getElementById("player1_bonus").value = 50;
        }
    }

    function updateValue2() {
        let sum2 = 0;
        sum2 += parseInt(valueP2_1.value);
        sum2 += parseInt(valueP2_2.value);
        sum2 += parseInt(valueP2_3.value);
        sum2 += parseInt(valueP2_4.value);
        sum2 += parseInt(valueP2_5.value);
        sum2 += parseInt(valueP2_6.value);
        document.getElementById("player2_bonussum").value = sum2;
        if (sum2 >= 63){
            document.getElementById("player2_bonus").value = 50;
            }
    }

    function updateValue3() {
        let sum3 = 0;
        sum3 += parseInt(valueP3_1.value);
        sum3 += parseInt(valueP3_2.value);
        sum3 += parseInt(valueP3_3.value);
        sum3 += parseInt(valueP3_4.value);
        sum3 += parseInt(valueP3_5.value);
        sum3 += parseInt(valueP3_6.value);
        document.getElementById("player3_bonussum").value = sum3;
        if (sum3 >= 63){
            document.getElementById("player3_bonus").value = 50;
            }
    }
         

        function updateValue4() {
        let sum4 = 0;
        sum4 += parseInt(valueP4_1.value);
        sum4 += parseInt(valueP4_2.value);
        sum4 += parseInt(valueP4_3.value);
        sum4 += parseInt(valueP4_4.value);
        sum4 += parseInt(valueP4_5.value);
        sum4 += parseInt(valueP4_6.value);
        document.getElementById("player4_bonussum").value = sum4;
        if (sum4 >= 63){
            document.getElementById("player4_bonus").value = 50;
            }

    }

});
