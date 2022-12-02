/**
 * 🌧️.
 *
 */

const renderCurrentWeather = data => {

	document.querySelector('.spinner').classList.add('hide');

	const updateDate = new Date(data.dt * 1000);
	const country = data.sys.country;
	const updateDateStr = updateDate.toLocaleString('se', { timeZone: 'UTC' });


	document.querySelector('#forecast').innerHTML = `
		<div class="card">
			<img src="assets/images/forecast-banner.png" class="card-img-top">
			<div class="card-body">
				<h5 class="card-title" id="location">
					<span id="city">${data.name}</span>,
					<span id="country">${data.sys.country}</span>
				</h5>
				<p class="temp">
					<span id="temperature">${data.main.temp}</span>
					&deg;C
				</p>
				<p class="humidity">
					<span id="humidity">${data.main.humidity}</span>
					&percnt; humidity
				</p>
				<p class="wind">
					<span id="windspeed">${data.wind.speed}</span>
					m/s
				</p>
				<ul class="conditions flex-column">
				
				</ul>
				<strong>Weather info updated</strong><br>
				${updateDateStr}
			</div>
		</div>
	`;




	console.log(updateDateStr);
	console.log(data);

	let thisDay = new Date();
	let thisHour = thisDay.getHours();
	let sysSunrise = new Date(data.sys.sunrise * 1000);
	let sunriseHour = sysSunrise.getHours();
	let sysSunset = new Date(data.sys.sunset * 1000);
	let sunsetHour = sysSunset.getHours();

	if(thisHour > sunriseHour && thisHour <= sunsetHour) {
		console.log("dag");
		document.querySelector('.card-img-top').src = "assets/images/day.svg";
	} else if (thisHour >= sunsetHour) {
		console.log("Natt");
		document.querySelector('.card-img-top').src = "assets/images/night.svg";
	}

	console.log(thisHour);

	data.weather.forEach(weather => {
		console.log(weather);
		document.querySelector('.conditions').innerHTML += `
			<li><strong>${weather.main}</strong></li>
			<li>${weather.description}</li>
			<li><img src="http://openweathermap.org/img/wn/${weather.icon}@2x.png"</li>
		`;
	})

}

document.querySelector('#search-form').addEventListener('submit', async e => {
	e.preventDefault();

	document.querySelector('.alert').classList.add('hide');
	document.querySelector('#forecast').innerHTML = ``

	const city = e.target.query.value.trim();

	if (city.length < 3) {
		alert("Please enter at least 3 chars");
		return;
	}

	// do search
	console.log(`Searching for city "${city}"`);
	try {
		const data = await getCurrentWeather(city);
		// render current weather conditions
		renderCurrentWeather(data);
	} catch (e){
		console.log("Det bleva fel!: ", e);
		document.querySelector('#forecast').innerHTML = ``;
		document.querySelector('.alert').innerHTML = e;
		document.querySelector('.alert').classList.remove('hide');
		document.querySelector('.spinner').classList.add('hide');
	}

});
