
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