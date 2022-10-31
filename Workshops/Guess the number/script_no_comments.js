let randNum = randomNumber();
let playedGames = 0;
let userNum = 1;
let userScore = [];

alert(`Välkommen till Gissa rätt nummer!\n\nAvsluta spelet genom att ange siffran 0\n\nKlicka på OK för att starta spelet.`);

function randomNumber () {
    return Math.ceil(Math.random()*10);
}

const hightScore = (gameLoop, playedGames, userScore) => {
    userScore.push(playedGames);
    let bestResult = Math.min(...userScore);

    alert(`Du har spelat ${userScore.length} omgångar.\n\nUnder ditt senaste spel hade du ${playedGames} gissningar.\nDitt bästa resultat är ${bestResult}.\n\nFörsök att nu slå detta!\n\n Klicka på OK för att starta en ny omgång.`)

    randNum = randomNumber();
    playedGames = 0;

    gameLoop(randNum, playedGames, undefined, userScore);
}

const gameLoop = (randNum, playedGames, userNum, userScore) => {
    
    let playMsg = `OMGÅNG ${userScore.length + 1}\nGissa ett nummer mellan 1-10`; 
    userNum = prompt(playMsg)

    playedGames++

    let bestResult = Math.min(...userScore);
    
    if(userNum == randNum) {
        if(playedGames < bestResult) {
            let congratsMsg = `Grattis! Du gissade rätt!\nDu har gissat ${playedGames} gånger och är ett nytt rekord!!!\n\nKlicka OK för att se din highscore.`;
            alert(congratsMsg);
        } else {
            let congratsMsg = `Grattis! Du gissade rätt!\nDu har gissat ${playedGames} gånger.\n\nKlicka OK för att se din highscore.`;
            alert(congratsMsg);
        }
        hightScore(gameLoop, playedGames, userScore);
    } else if (userNum == 0) {    
        alert("Du har valt att avsluta spelet");
    } else {
        if (userNum < randNum) {
            alert("Du gissade fel. Ditt nummer är för lågt. Försök igen!");
        } else {
            alert("Du gissade fel. Ditt nummer är för högt. Försök igen")
        }
        gameLoop(randNum, playedGames, userNum, userScore);
    }
}

gameLoop(randNum, playedGames, userNum, userScore);