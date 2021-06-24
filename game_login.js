function addUser() {
    player_one_name = document.getElementById("player1_name_input").value;
    player_two_name = document.getElementById("player2_name_input").value;
    localStorage.setItem("player1_name_input", player_one_name);
    localStorage.setItem("player2_name_input", player_two_name);
    window.location = "game_page.html";
}