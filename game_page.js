player_one_name = localStorage.getItem("player1_name");
player_two_name = localStorage.getItem("player2_name");

player_one_score = 0;
player_two_score = 0;

document.getElementById("player1_name").innerHTML = player_one_name + ":";
document.getElementById("player1_name").innerHTML = player_two_name + ":";

document.getElementById("player1_score").innerHTML = player_one_score;
document.getElementById("player2_score").innerHTML = player_two_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player_one_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_two_name;

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button ;

    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}