/**
 * Workshop: Password Checker
 *
 * Skriv kod som kollar att lösenordet i variabeln password har
 * - minst 6 tecken varav minst två specialtecken enligt nedan
 * - minst 8 tecken varav minst ett specialtecken enligt nedan
 * - eller har minst 12 tecken och minst 1 bindestreck
 * - eller har minst 16 tecken
 */

let password;
// password = "password"; // inte giltigt
// password = "pa$sword"; // giltigt
password = "p@ssw%rd"; // giltigt
// password = "pa$$word"; // giltigt
// password = "secretpassword"; // inte giltigt
// password = "secret-password"; // giltigt
// password = "such-password-much-secure-very-long"; // giltigt
// password ='l@%*a';

 
 const specialChars = [
    "@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
 ];

// En variabel som räknar hur många gånger det finns ett specialtecken i arrayn.
let cNumber = 0;

// En funktion som skickar med lösenordet som argument
const ifSpecialChars = thePassword => {
    // Skapar en for-loop som går igenom Arrayns alla tecken.
    for (let i = 0; i < specialChars.length; i++) {
        //Om Password har något av tecknen som finns i Arrayn - gå in i If-satsen.
        if (specialChars.includes(thePassword[i])) {
            //Addera 1 till cNumber varje gång ett tecken finns.
            cNumber++;
            console.log(cNumber);
        }
    }
    // Retunera värdet tillbaka.
    return cNumber;  
}

// Skapa ny variabel av funktionen är där password skickas med som ett värde.
let numberOfTimes = ifSpecialChars(password);

// Kontrollera conditions.
if (password.length >=6 && numberOfTimes >= 2) {
    console.log("6, 2");
    console.log("Welcome to the Metaverse");
} else if (password.length >= 8 && numberOfTimes >= 1) {
    console.log("8, 1");
    console.log("Welcome to the Metaverse");
} else if (password.length >= 12 && password.includes('-')) {
    console.log("12, -");
    console.log("Welcome to the Metaverse");
} else if (password.length >= 16 ) {
    console.log("16");
    console.log("Welcome to the Metaverse");
} else {
    console.log ("Skit ner dig");
}