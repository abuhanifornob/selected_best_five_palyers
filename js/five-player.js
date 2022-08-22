let playerNameArray = [];

function displaySelectedPlayer(players) {
    const ol = document.getElementById('ol-body');
    let li = document.createElement('li');
    if (players.length <= 5) {
        for (let i = 0; i < players.length; i++) {


            li.innerText = players[i];
            ol.appendChild(li);
            console.log(ol.appendChild(li));


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
        console.log(event.disabled = true);
    } else {
        alert('Already Best Five Players Selected!!!');
        return;
    }
    console.log(playerNameArray);
}