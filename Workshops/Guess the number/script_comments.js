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

// Notering till mig själv: Att använda och kalla på egen funktion (som min lösning bygger på) bör undvikas.
// I det här fallet hade det varit enklare med en while-loop eller do-while (för hantering av Highscore).
// Om tid ges eller om jag vill träna. Skriv om nedan.

// Sätter alla variabler globalt med ett startvärde.
let randNum = randomNumber();
let playedGames = 0;
let userNum = 1;
let userScore = [];

// Välkomstmeddelande när spelet startar första gången.
alert(`Välkommen till Gissa rätt nummer!\n\nAvsluta spelet genom att ange siffran 0\n\nKlicka på OK för att starta spelet.`);

//Funktion för att plocka ut random number.
//Används första gången och varje gång en ny omgång startar.
function randomNumber () {
    return Math.ceil(Math.random()*10);
}

// Funktion för Highscore och uppstart av nästa spelomgång
const hightScore = (gameLoop, playedGames, userScore) => {

    // Sparar resultatet från föregående spel och hämta ut minsta nummer
    userScore.push(playedGames);
    let bestResult = Math.min(...userScore);

    //Highscore meddelande
    alert(`Du har spelat ${userScore.length} omgångar.\n\nUnder ditt senaste spel hade du ${playedGames} gissningar.\nDitt bästa resultat är ${bestResult}.\n\nFörsök att nu slå detta!\n\n Klicka på OK för att starta en ny omgång.`)

    // Sätter nya värden inför nästa omgång.
    randNum = randomNumber();
    playedGames = 0;

    // Starta nästa spelomgång
    gameLoop(randNum, playedGames, undefined, userScore);
}

// Funktion för spelomgång.
const gameLoop = (randNum, playedGames, userNum, userScore) => {
    
    // Tar antalet från userScore och visar hur många omgångar spelaren har spelat.
    let playMsg = `OMGÅNG ${userScore.length + 1}\nGissa ett nummer mellan 1-10`; 
    userNum = prompt(playMsg)

    // Sparar antalet gissningar.
    playedGames++
    
    // Ta ut bästa resultat och visa den ifall användaren sätter nytt bästa resultat.
    let bestResult = Math.min(...userScore);
    
    // Användaren gissar rätt.
    if(userNum == randNum) {
        // Informera om nytt bästa resultat.
        if(playedGames < bestResult) {
            let congratsMsg = `Grattis! Du gissade rätt!\nDu har gissat ${playedGames} gånger och är ett nytt rekord!!!\n\nKlicka OK för att se din highscore.`;
            alert(congratsMsg);
        // Annars vanligt meddelande.
        } else {
            let congratsMsg = `Grattis! Du gissade rätt!\nDu har gissat ${playedGames} gånger.\n\nKlicka OK för att se din highscore.`;
            alert(congratsMsg);
        }
        // Skickar resultat till Highscore
        hightScore(gameLoop, playedGames, userScore);

    // Om användaren anger 0 avslutas spelet.
    } else if (userNum == 0) {    
        alert("Du har valt att avsluta spelet");
    // Användaren gissar fel nummer
    } else {
        if (userNum < randNum) {
            alert("Du gissade fel. Ditt nummer är för lågt. Försök igen!");
        } else {
            alert("Du gissade fel. Ditt nummer är för högt. Försök igen")
        }

        //Starta ny gissning
        gameLoop(randNum, playedGames, userNum, userScore);

    }
}

// Initierear och Startar spelet första gången användaren besöker sidan.
gameLoop(randNum, playedGames, userNum, userScore);
