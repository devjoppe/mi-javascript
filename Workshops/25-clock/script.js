/**
 * Clock 🕰️
 *
 */

const timeText = document.querySelector('#clock');

const interId = setInterval ( () => {

    const myTime = new Date();
    
    timeText.innerText = myTime.toLocaleTimeString();

    console.log(myTime.toLocaleTimeString());

}, 1000);