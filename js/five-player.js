let playerNameArray = [];

function displaySelectedPlayer(players) {
    const ol = document.getElementById('ol-body');
    let li = document.createElement('li');
    if (players.length <= 5) {
        for (let i = 0; i < players.length; i++) {
            li.innerText = players[i];
            ol.appendChild(li);

        }
    } else {
        alert('Alreay Five Players Seleted');
        return;
    }
}

function selectPlayer(event) {

    const playerName = event.parentNode.parentNode.children[0].innerText;
    if (playerNameArray.length < 5) {
        playerNameArray.push(playerName);
        displaySelectedPlayer(playerNameArray);
        event.disabled = true;
    } else {
        alert('Already Best Five Players Selected!!!');
        return;
    }

}

function playerExpenses() {
    const perPlayerExpensesField = document.getElementById('player-cost');
    const perPlayerExpenses = parseFloat(perPlayerExpensesField.value);
    const playerExpensesElement = document.getElementById('playerExpances');
    const players = playerNameArray.length;
    const totalPlayerExpenses = perPlayerExpenses * players;

    playerExpensesElement.innerText = totalPlayerExpenses;

}

document.getElementById('calculate').addEventListener('click', function() {
    playerExpenses();

})