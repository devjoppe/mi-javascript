
const myFunction = (item, item2) => {
    let myText ="hejsan";
    let myNumber = item+item2;
    if (myNumber > 10) {
        myText = "över tio";
    } else {
        myText = "inte över 10";
    }
    return myText;
}

// För att få ut värdet måste jag skicka med ett värde in annars går det inte att få ut det.
const resText = myFunction(3,3);
console.log(resText);

// Hämtar
const numberTxt = document.getElementById("printNumber");

// En callbackfunktion som triggas när användaren klickar på knappen
const cool = () => { // Denna triggas varje gång användaren klickar på knappen.
    newNumber(myName); // Då körs denna funktionen som sedan består av en callback (myName)
}

const newNumber = (userName) => {
    let randomNumber = Math.ceil(Math.random()*10); //Avrundar talet upp eller ner .floor och .ceil avrundar ner resp upp.
    console.log(randomNumber);
    numberTxt.innerHTML = randomNumber;
    if (randomNumber == 4) {
        userName("May the 4:th be with you!");
    }
}

const myName = (name) => {
    console.log(name);
    numberTxt.innerHTML = name;
}
// ###########################################


// CALLBACK FUNKTION - En funktion har ansvaret att trigga en funktion när den är redo att göra så
function nagUser(txt) {
    console.log(txt);
}

const makeMoreInteresting = (txt, action) => {
    let interesting = txt + "!!!!!!!!!";
    //Nedan är resultatet av funktionen nagUser till Action
    action(interesting);
}

makeMoreInteresting("not so fun", nagUser);

//Min egna callback som skriver ut något när den är klar.'