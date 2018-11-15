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

        //Player 1
    var valueP1_1 = document.getElementById("player1_ones");
    var valueP1_2 = document.getElementById("player1_twos");
    var valueP1_3 = document.getElementById("player1_threes");
    var valueP1_4 = document.getElementById("player1_fours");
    var valueP1_5 = document.getElementById("player1_fives");
    var valueP1_6 = document.getElementById("player1_sixes");
    var valueP1_1p = document.getElementById("player1_pair");
    var valueP1_2p = document.getElementById("player1_2pair");
    var valueP1_3p = document.getElementById("player1_3OfKind");
    var valueP1_4p = document.getElementById("player1_4OfKind");
    var valueP1_sS = document.getElementById("player1_smallStraight");
    var valueP1_lS = document.getElementById("player1_largeStraight");
    var valueP1_fH = document.getElementById("player1_fullHouse");
    var valueP1_ch = document.getElementById("player1_chance");
    var valueP1_yatzy = document.getElementById("player1_yatzy");

        //Player 2
    var valueP2_1 = document.getElementById("player2_ones");
    var valueP2_2 = document.getElementById("player2_twos");
    var valueP2_3 = document.getElementById("player2_threes");
    var valueP2_4 = document.getElementById("player2_fours");
    var valueP2_5 = document.getElementById("player2_fives");
    var valueP2_6 = document.getElementById("player2_sixes");
    var valueP2_1p = document.getElementById("player2_pair");
    var valueP2_2p = document.getElementById("player2_2pair");
    var valueP2_3p = document.getElementById("player2_3OfKind");
    var valueP2_4p = document.getElementById("player2_4OfKind");
    var valueP2_sS = document.getElementById("player2_smallStraight");
    var valueP2_lS = document.getElementById("player2_largeStraight");
    var valueP2_fH = document.getElementById("player2_fullHouse");
    var valueP2_ch = document.getElementById("player2_chance");
    var valueP2_yatzy = document.getElementById("player2_yatzy");

        //Player 3
    var valueP3_1 = document.getElementById("player3_ones");
    var valueP3_2 = document.getElementById("player3_twos");
    var valueP3_3 = document.getElementById("player3_threes");
    var valueP3_4 = document.getElementById("player3_fours");
    var valueP3_5 = document.getElementById("player3_fives");
    var valueP3_6 = document.getElementById("player3_sixes");
    var valueP3_1p = document.getElementById("player3_pair");
    var valueP3_2p = document.getElementById("player3_2pair");
    var valueP3_3p = document.getElementById("player3_3OfKind");
    var valueP3_4p = document.getElementById("player3_4OfKind");
    var valueP3_sS = document.getElementById("player3_smallStraight");
    var valueP3_lS = document.getElementById("player3_largeStraight");
    var valueP3_fH = document.getElementById("player3_fullHouse");
    var valueP3_ch = document.getElementById("player3_chance");
    var valueP3_yatzy = document.getElementById("player3_yatzy");

        //Player 4
    var valueP4_1 = document.getElementById("player4_ones");
    var valueP4_2 = document.getElementById("player4_twos");
    var valueP4_3 = document.getElementById("player4_threes");
    var valueP4_4 = document.getElementById("player4_fours");
    var valueP4_5 = document.getElementById("player4_fives");
    var valueP4_6 = document.getElementById("player4_sixes");
    var valueP4_1p = document.getElementById("player4_pair");
    var valueP4_2p = document.getElementById("player4_2pair");
    var valueP4_3p = document.getElementById("player4_3OfKind");
    var valueP4_4p = document.getElementById("player4_4OfKind");
    var valueP4_sS = document.getElementById("player4_smallStraight");
    var valueP4_lS = document.getElementById("player4_largeStraight");
    var valueP4_fH = document.getElementById("player4_fullHouse");
    var valueP4_ch = document.getElementById("player4_chance");
    var valueP4_yatzy = document.getElementById("player4_yatzy");

    //Player 1
    valueP1_1.addEventListener("change", updateValue1);
    valueP1_2.addEventListener("change", updateValue1);
    valueP1_3.addEventListener("change", updateValue1);
    valueP1_4.addEventListener("change", updateValue1);
    valueP1_5.addEventListener("change", updateValue1);
    valueP1_6.addEventListener("change", updateValue1);
    valueP1_1p.addEventListener("change", updateValue1);
    valueP1_2p.addEventListener("change", updateValue1);
    valueP1_3p.addEventListener("change", updateValue1);
    valueP1_4p.addEventListener("change", updateValue1);
    valueP1_sS.addEventListener("change", updateValue1);
    valueP1_lS.addEventListener("change", updateValue1);
    valueP1_fH.addEventListener("change", updateValue1);
    valueP1_ch.addEventListener("change", updateValue1);
    valueP1_yatzy.addEventListener("change", updateValue1);

    //Player 2
    valueP2_1.addEventListener("change", updateValue2);
    valueP2_2.addEventListener("change", updateValue2);
    valueP2_3.addEventListener("change", updateValue2);
    valueP2_4.addEventListener("change", updateValue2);
    valueP2_5.addEventListener("change", updateValue2);
    valueP2_6.addEventListener("change", updateValue2);
    valueP2_1p.addEventListener("change", updateValue2);
    valueP2_2p.addEventListener("change", updateValue2);
    valueP2_3p.addEventListener("change", updateValue2);
    valueP2_4p.addEventListener("change", updateValue2);
    valueP2_sS.addEventListener("change", updateValue2);
    valueP2_lS.addEventListener("change", updateValue2);
    valueP2_fH.addEventListener("change", updateValue2);
    valueP2_ch.addEventListener("change", updateValue2);
    valueP2_yatzy.addEventListener("change", updateValue2);

    //Player 3
    valueP3_1.addEventListener("change", updateValue3);
    valueP3_2.addEventListener("change", updateValue3);
    valueP3_3.addEventListener("change", updateValue3);
    valueP3_4.addEventListener("change", updateValue3);
    valueP3_5.addEventListener("change", updateValue3);
    valueP3_6.addEventListener("change", updateValue3);
    valueP3_1p.addEventListener("change", updateValue3);
    valueP3_2p.addEventListener("change", updateValue3);
    valueP3_3p.addEventListener("change", updateValue3);
    valueP3_4p.addEventListener("change", updateValue3);
    valueP3_sS.addEventListener("change", updateValue3);
    valueP3_lS.addEventListener("change", updateValue3);
    valueP3_fH.addEventListener("change", updateValue3);
    valueP3_ch.addEventListener("change", updateValue3);
    valueP3_yatzy.addEventListener("change", updateValue3);

    //Player 4
    valueP4_1.addEventListener("change", updateValue4);
    valueP4_2.addEventListener("change", updateValue4);
    valueP4_3.addEventListener("change", updateValue4);
    valueP4_4.addEventListener("change", updateValue4);
    valueP4_5.addEventListener("change", updateValue4);
    valueP4_6.addEventListener("change", updateValue4);
    valueP4_1p.addEventListener("change", updateValue4);
    valueP4_2p.addEventListener("change", updateValue4);
    valueP4_3p.addEventListener("change", updateValue4);
    valueP4_4p.addEventListener("change", updateValue4);
    valueP4_sS.addEventListener("change", updateValue4);
    valueP4_lS.addEventListener("change", updateValue4);
    valueP4_fH.addEventListener("change", updateValue4);
    valueP4_ch.addEventListener("change", updateValue4);
    valueP4_yatzy.addEventListener("change", updateValue4);


    function updateValue1() {
        let sum1 = 0;
        sum1 += parseInt(valueP1_1.value);
        sum1 += parseInt(valueP1_2.value);
        sum1 += parseInt(valueP1_3.value);
        sum1 += parseInt(valueP1_4.value);
        sum1 += parseInt(valueP1_5.value);
        sum1 += parseInt(valueP1_6.value);
        document.getElementById("player1_bonussum").value = sum1;
        if (sum1 >= 63) {
            sum1 += 50;
            document.getElementById("player1_bonus").value = 50;
        }
        if (sum1 < 63) {
            document.getElementById("player1_bonus").value = 0;
        }
        sum1 += parseInt(valueP1_1p.value);
        sum1 += parseInt(valueP1_2p.value);
        sum1 += parseInt(valueP1_3p.value);
        sum1 += parseInt(valueP1_4p.value);
        sum1 += parseInt(valueP1_sS.value);
        sum1 += parseInt(valueP1_lS.value);
        sum1 += parseInt(valueP1_fH.value);
        sum1 += parseInt(valueP1_ch.value);
        sum1 += parseInt(valueP1_yatzy.value);
        document.getElementById("player1_totalSum").value = sum1;
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
        if (sum2 >= 63) {
            sum2 += 50;
            document.getElementById("player2_bonus").value = 50;
        }
        if (sum2 < 63) {
            document.getElementById("player2_bonus").value = 0;
        }
        sum2 += parseInt(valueP2_1p.value);
        sum2 += parseInt(valueP2_2p.value);
        sum2 += parseInt(valueP2_3p.value);
        sum2 += parseInt(valueP2_4p.value);
        sum2 += parseInt(valueP2_sS.value);
        sum2 += parseInt(valueP2_lS.value);
        sum2 += parseInt(valueP2_fH.value);
        sum2 += parseInt(valueP2_ch.value);
        sum2 += parseInt(valueP2_yatzy.value);
        document.getElementById("player2_totalSum").value = sum2;
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
        if (sum3 >= 63) {
            sum3 += 50;
            document.getElementById("player3_bonus").value = 50;
        }
        if (sum3 < 63) {
            document.getElementById("player3_bonus").value = 0;
        }
        sum3 += parseInt(valueP3_1p.value);
        sum3 += parseInt(valueP3_2p.value);
        sum3 += parseInt(valueP3_3p.value);
        sum3 += parseInt(valueP3_4p.value);
        sum3 += parseInt(valueP3_sS.value);
        sum3 += parseInt(valueP3_lS.value);
        sum3 += parseInt(valueP3_fH.value);
        sum3 += parseInt(valueP3_ch.value);
        sum3 += parseInt(valueP3_yatzy.value);
        document.getElementById("player3_totalSum").value = sum3;
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
        if (sum4 >= 63) {
            sum4 += 50;
            document.getElementById("player4_bonus").value = 50;
        }
        if (sum4 < 63) {
            document.getElementById("player4_bonus").value = 0;
        }
        sum4 += parseInt(valueP4_1p.value);
        sum4 += parseInt(valueP4_2p.value);
        sum4 += parseInt(valueP4_3p.value);
        sum4 += parseInt(valueP4_4p.value);
        sum4 += parseInt(valueP4_sS.value);
        sum4 += parseInt(valueP4_lS.value);
        sum4 += parseInt(valueP4_fH.value);
        sum4 += parseInt(valueP4_ch.value);
        sum4 += parseInt(valueP4_yatzy.value);
        document.getElementById("player4_totalSum").value = sum4;

    }
    document.getElementById("winner").addEventListener("click", function (event) {
        event.preventDefault();

        let winner_name = "";
        let winner_score = 0;

        for (let i = 1; i <= 4; i++) {
            let score = document.getElementById("player" + i + "_totalSum").value;
            if (score === "") {
                score = 0;
            }

            score = parseInt(score);
            if (score > winner_score) {
                winner_name = "Player " + i;
                winner_score = score;
            }

            else if(score === winner_score){
                winner_name = winner_name + " & " + "Player " + i;
            }
        }
        alert("Vinnare: " + winner_name + " (" + winner_score + " Poäng)");
    });

});