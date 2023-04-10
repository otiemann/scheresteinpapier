/* let points = {
    'wins': 0,
    'losses': 0,
    'ties': 0
}; */

let points = JSON.parse(localStorage.getItem('points'));

function playComputer() {
    let randomNumber = Math.random();
    let drawComputer = '';
    let imageComputer = '';
    if (randomNumber <= 0.33) {
        drawComputer = 'Computer spielt Papier.';
        imageComputer = 'paper-emoji.png';
    }
    else if (randomNumber > 0.33 && randomNumber <= 0.66) {
        drawComputer = 'Computer spielt Stein.';
        imageComputer = 'rock-emoji.png';
    }
    else {
        drawComputer = 'Computer spielt Schere.';
        imageComputer = 'scissors-emoji.png';
    }
    return drawComputer;
}

function calculateResult(p_zug_spieler, p_zug_computer) {

    if (localStorage.getItem('points') === null) {
        let points = {
            'wins': 0,
            'losses': 0,
            'ties': 0
        };
    }
    else {
        let points = JSON.parse(localStorage.getItem('points'));
    }
    
    let result = '';

    if (p_zug_spieler === 'stein') {
        if (p_zug_computer === 'Computer spielt Schere.') {
            result = 'Der Spieler gewinnt.';
            points.wins ++;
        }
        else if (p_zug_computer === 'Computer spielt Stein.') {
            result = 'Unentschieden.';
            points.ties ++;
        }
        else {
            result = 'Der Computer gewinnt.';
            points.losses ++;
        }
    }
    else if (p_zug_spieler === 'schere') {
        if (p_zug_computer === 'Computer spielt Schere.') {
            result = 'Unentschieden.';
            points.ties ++;
        }
        else if (p_zug_computer === 'Computer spielt Stein.') {
            result = "Der Computer gewinnt.";
            points.losses ++;
        }
        else {
            result = 'Der Spieler gewinnt.';
            points.wins ++;
        }
    }
    else if (p_zug_spieler === 'papier') {
        if (p_zug_computer === 'Computer spielt Papier.') {
            result = 'Unentschieden.';
            points.ties ++;
        }
        else if (p_zug_computer === 'Computer spielt Schere.') {
            result = 'Der Computer gewinnt.';
            points.losses ++;
        }
        else {
            result = 'Der Spieler gewinnt.';
            points.wins ++;
        }
    }

    let spielerText = '';
    let imagePlayer = '';
    if (p_zug_spieler === 'stein') {
        spielerText = 'Spieler spielt Stein.';
        imagePlayer = 'rock-emoji.png';
    }
    else if (p_zug_spieler === 'papier') {
        spielerText = 'Spieler spielt Papier.';
        imagePlayer = 'paper-emoji.png';
    }
    else {
        spielerText = 'Spieler spielt Schere.';
        imagePlayer = 'scissors-emoji.png';
    }
    
    document.getElementById('ergebnis').innerHTML = p_zug_computer + '<br>' + spielerText + '<br>' + 'Ergebnis: ' + result + '<br>' + 'Gewonnen: ' + points.wins + '<br>' + 'Verloren: ' + points.losses + '<br>' + 'Unentschieden: ' + points.ties;

    stringPoints = JSON.stringify(points);
    localStorage.setItem('points', stringPoints);

}

function resetScore() {
    localStorage.removeItem('points');
    points = {
        'wins': 0,
        'losses': 0,
        'ties': 0
    };
    document.getElementById('ergebnis').innerHTML = 'Der Score wurde zurückgesetzt.';
}