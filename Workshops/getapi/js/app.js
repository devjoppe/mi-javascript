
const getJSON = async (url) => {
    const response = await fetch(url); // Waits to the JSON is fetched/done
    if(!response.ok) {
        throw new Error('Error');
    }
    return await response.json();
}
const newAdvice = document.querySelector('button');
const adviceText = document.querySelector('div');

newAdvice.addEventListener('click', (e) => {
    e.preventDefault();
    newJoke();
})

const newJoke = () => {
    const norrisData = getJSON("https://api.chucknorris.io/jokes/random")
        .then(data => {
            adviceText.innerHTML = data.value;
        });
}

newJoke();

