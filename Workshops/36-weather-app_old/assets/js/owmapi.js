/**
 * 🌧️.
 * https://api.openweathermap.org/data/2.5/weather?q=Malmö&units=metric&appid=68eaaf9450df25dd20d8266693b09ddc
 */

//THIS ONE!!
const API_KEY = "68eaaf9450df25dd20d8266693b09ddc";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getCurrentWeather = async (city) => {
    //Get city from api
    const response = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);
    //Check if response is ok!
    if(!response.ok) {
        throw new Error(`Error`);
    }
    //Convert response from jsn
    const data = await response.json();
    //return current weather
    return data;
}

const weather = async (city) => {
    const myData = await getCurrentWeather(city);
    console.log(myData);
}


weather('Karlshamn');