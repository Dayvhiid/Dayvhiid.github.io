const button = document.getElementById("SearchBtn")
button.addEventListener("click", function() {
    const team = document.getElementById("team")
    const age = document.getElementById("age")
    const position = document.getElementById("position")
    const number = document.getElementById("number")
    const player = document.getElementById("playerSearch")
    const goals = document.getElementById("goals")
    const assists = document.getElementById("assists")
    const key_passes = document.getElementById("keypasses")
    const rating = document.getElementById("rating")
    const fouls = document.getElementById("fouls")
    const yellow = document.getElementById("yellow")
    const red = document.getElementById("red")
    const minutes = document.getElementById("minutes")
    const passes = document.getElementById("passes")
    const shots = document.getElementById("shots")
    const dribbleatt = document.getElementById("dribbleatt")
    const dribblecomp = document.getElementById("dribblecomp")
    const duel = document.getElementById("duel")
    const tackles = document.getElementById("tackles")
    const interception = document.getElementById("interception")
    const blocks = document.getElementById("blocks")
    const clearances = document.getElementById("clearances")
    const saved = document.getElementById("saved")
    const playerName = player.value
    fetch(`https://apiv3.apifootball.com/?action=get_players&player_name=${playerName}&APIkey=908312f6343aa8710f64cf6c075b383f1b4d1f1b7abdd203e134517955f46da8`)
        .then(res => res.json())
        .then(data => {
            const i = data.length
            playerArray = data[i - 1]
            console.log(playerArray)
            team.innerHTML = playerArray.team_name;
            age.innerHTML = playerArray.player_age;
            position.innerHTML = playerArray.player_type;
            number.innerHTML = playerArray.player_number;
            goals.innerHTML = playerArray.player_goals;
            assists.innerHTML = playerArray.player_assists;
            key_passes.innerHTML = playerArray.player_key_passes;
            rating.innerHTML = playerArray.player_rating;
            fouls.innerHTML = playerArray.player_fouls_committed;
            yellow.innerHTML = playerArray.player_yellow_cards;
            red.innerHTML = playerArray.player_red_cards;
            minutes.innerHTML = playerArray.player_minutes;
            passes.innerHTML = playerArray.player_passes;
            shots.innerHTML = playerArray.player_shots_total;
            dribbleatt.innerHTML = playerArray.player_dribble_attempts;
            dribblecomp.innerHTML = playerArray.player_dribble_succ;
            duel.innerHTML = playerArray.player_duels_won;
            tackles.innerHTML = playerArray.player_tackles;
            interception.innerHTML = playerArray.player_interceptions;
            blocks.innerHTML = playerArray.player_blocks;
            clearances.innerHTML = playerArray.player_clearances;
            saved.innerHTML = playerArray.player_saves;
        })
})