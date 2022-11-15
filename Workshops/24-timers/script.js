/**
 * Timers
 *
 */

const btnScareMe = document.querySelector('#btnScareMe');
const ghostEl = document.querySelector('#ghost');
const timerText = document.querySelector('h1');

let timer;
let counter = 0;

console.log(timerText);

btnScareMe.addEventListener('click', () => {
    
    timer = Math.ceil(Math.random()*10000);
    console.log(timer);
    
    btnScareMe.classList.toggle("hide");

    setInterval( () => {
        counter++;
        console.log(counter);
        timerText.textContent = counter;
    }, 1000)

    
    setTimeout( () => {
        console.log("hejsan");
        ghostEl.classList.toggle("hide");
        setTimeout( () => {
            ghostEl.classList.toggle("hide");
            btnScareMe.classList.toggle("hide");
            console.log("Visa igen");
            counter = 0;
        }, 2000);
    }, timer);

})