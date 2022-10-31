/**
 * Guess the number
 *
 * STEG 1
 * [X]  Sätt ett tal i en variabel.
 * [X]  Be användaren att gissa talet med hjälp av `prompt()`.
 * [X]  Om användarens gissning är fel, fråga efter en ny gissning.
 * [X]  Om användarens gissning är rätt, visa en alert med ett grattis-meddelande.
 * [X]  Om användaren skriver in talet 0 så ska spelet avslutas.
 *
 * STEG 1.5
 * [X]  Berätta för användaren om gissningen är för låg eller för hög. Naturligtvis
 *      ska de få gissa igen efter detta.
 *
 * STEG 2
 * [X]  Slumpa talet som användaren ska gissa, så att de inte gissar rätt varje gång.
 *
 * STEG 3
 * [X]  Spara ner hur många gissningar som krävdes. Visa antalet gissningar när
 *      användaren gissat rätt.
 *
 * STEG 4
 * [X]  Efter att man gissat rätt så slumpa fram ett nytt tal och starta om spelet
 *      på nytt.
 * []   Spara en "highscore", dvs hur få gånger som krävts för att gissa rätt.
 * [X]  Om användaren gissar rätt på fler gånger, visa "Tyvärr du gissade rätt på
 *      ${tries} antal försök men din highscore är ${highscore}".
 * [X]  Om användaren gissar rätt på färre gånger, visa "YAY NEW HIGHSCORE! ${highscore}"
 *
 */

// Min lösning:

// Sätter alla variabler globalt som används när spelet startar första gången.
let randNum = randomNumber();
let playedGames = 0;
let userNum = 1;
let userScore = [];

//Funktion för att plocka ut random number.
//Används första gången och varje gång en ny omgång startar.
function randomNumber () {
    return Math.ceil(Math.random()*10);
}

// Funktion för Highscore och uppstart av nästa spelomgång
const hightScore = (gameLoop, playedGames, userScore) => {

    console.log("HighScore-loop. PlayedGames: " + playedGames);

    // Sparar resultatet från föregående spel och visar upp det som ett Highscore-meddelande.
    userScore.push(playedGames);
    let bestResult = Math.min(...userScore);
    console.log(userScore);

    alert(`Du har spelat ${userScore.length} omgångar.\n\nUnder ditt senaste spel hade du ${playedGames} gissningar.\nDitt bästa resultat är ${bestResult}.\n\nFörsök att nu slå detta!\n\n Klicka på OK för att starta en ny omgång.`)

    // Sätter nytt random för nästa Game-loop.
    randNum = randomNumber();
    console.log("Nytt nummer: " + randNum);

    playedGames = 0;

    gameLoop(randNum, playedGames, undefined, userScore);
}

// Funktion för Game-loopen
const gameLoop = (randNum, playedGames, userNum, userScore) => {
    console.log("Game loop startar");
    // Kontrollerar datan som följer med in i Game-loopen.
    console.log(randNum, playedGames, userScore);
    // Användaren gissar ett tal
    // Tar antalet från Array userScore och visar hur många omgångar spelaren har spelat.
    let playMsg = `OMGÅNG ${userScore.length + 1}\nGissa ett nummer mellan 1-10`; 
    userNum = prompt(playMsg)
    console.log(userNum);
    // Räkna hur många gånger en spel-loop genomförs.
    playedGames++
    // Ta ut bästa resultat och visa den ifall användaren sätter nytt bästa resultat.
    let bestResult = Math.min(...userScore);
    console.log("BÄSTA RESULTAT");
    console.log(bestResult);
    console.log("Antal game-loops:" + playedGames);
    // Användaren gissar rätt
    if(userNum == randNum) {
        // Informera om nytt bästa resultat
        if(playedGames < bestResult) {
            let congratsMsg = `Grattis! Du gissade rätt!\nDu har gissat ${playedGames} gånger och är ett nytt rekord!!!\n\nKlicka OK för att se din highscore.`;
            alert(congratsMsg);
        // Annars ett "vanligt" grattis-meddelande
        } else {
            let congratsMsg = `Grattis! Du gissade rätt!\nDu har gissat ${playedGames} gånger.\n\nKlicka OK för att se din highscore.`;
            alert(congratsMsg);
        }
        // Skickar resultat till Highscore för sammanställning och möjligheten att starta en ny omgång.
        hightScore(gameLoop, playedGames, userScore);
    // Om användaren anger 0 avslutas spelet.
    } else if (userNum == 0) {    
        // Att lägga till: Ange en funktion som tillåter för spelaren att starta ett helt nytt spel med 0-poäng?
        console.log("Användaren har valt att avsluta spelet. Ditt bästa resultat är:")
        alert("Du har valt att avsluta spelet");
    } else {
        if (userNum < randNum) {
            alert("Du gissade fel. Ditt nummer är för lågt. Försök igen!");
        } else {
            alert("Du gissade fel. Ditt nummer är för högt. Försök igen")
        }
        //Användaren gissar fel. Lägg till att visa användaren lite data om hur de har spelat. Testar
        gameLoop(randNum, playedGames, userNum, userScore);
        //startGame(gameLoop, randNum, playedGames, userNum, userScore);
    }
}

// Initierear och Startar spelet första gången användaren besöker sidan.
gameLoop(randNum, playedGames, userNum, userScore);




// ---> EGEN LOOP -> gå till Slut loop
// Användaren gissar -> skriver nytt nummer
    // Kontrollera nummer mot gissning -> Rätt eller fel och alerta svar och om det var för mycket eller för lite.
    // Spara gissningen i antelet gisningar - I en Array
        // Jämför antelet gissningar med tidigare gissningar -> Hur många inlägg finns det i en Arrayen 

// Slut --------> EGEN LOOP
// Om användaren skriver 0
    //Alert om att spelet är slut
    //Alert Antalet gissningar
    //Alert Highscore