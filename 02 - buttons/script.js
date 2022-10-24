let itemNumber = 1;
let itemPrice = 259;

// En function som räknar ut antalet produkter som väljs och skriver ut det i DOM.
/* function calcNumber (thispass) {
    let calcButton = thispass.getAttribute('data-div');
    console.log(calcButton);
    if (calcButton == 'id1') {
        itemNumber++
        itemPrice += 259;
        console.log("First button");
    } else if (calcButton == 'id2' && itemNumber >= 2) {
        itemNumber--;
        itemPrice -= 259;
        console.log("Second");
    }
    document.getElementById("result").innerHTML = itemNumber;
    document.getElementById("price").innerHTML = itemPrice;
} */

// Skrivit om det som en Arrow function
const calcNumber = thispass => {
    let calcButton = thispass.getAttribute('data-div');
    console.log(calcButton);
    if (calcButton == 'id1') {
        itemNumber++
        itemPrice += 259;
        console.log("First button");
    } else if (calcButton == 'id2' && itemNumber >= 2) {
        itemNumber--;
        itemPrice -= 259;
        console.log("Second");
    }
    document.getElementById("result").innerHTML = itemNumber;
    document.getElementById("price").innerHTML = itemPrice;
}