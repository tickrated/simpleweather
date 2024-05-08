function getWeather() {
    const location_name = document.getElementById("location").value;
    const landingDisplay = document.getElementById("landingDisplay");

    eel.get_weather(location_name)(function(result) {
        const weatherDisplay = document.getElementById("weatherDisplay");
        const errorDisplay = document.getElementById("errorDisplay");
        const background = document.getElementById("bgImage");

        if (result === false) {
            errorDisplay.textContent = `No results found for ${location_name}`;
            weatherDisplay.innerHTML = "";
        } else {
            errorDisplay.textContent = "";
            landingDisplay.innerHTML = "";
            weatherDisplay.innerHTML = `
                <button class="back-button" onclick="goBack()">
                    <img src="/img/backbutton.png" alt="Go back" class="back-button-img">
                </button>
                <h2 class="location-text">${result.city}, ${result.country}</h2>
                <h1 class="temperature">${result.temp}°C</h1>
                <p class="feelslike">Feels like ${result.feelslike}°C</p>
                <img src=${result.icon} class="condition-image">
                <p class="condition">${result.condition}</p>
            `;
            background.style.backgroundImage = `url(${result.background})`
        }
    });
}

function goBack() {
    const landingDisplay = document.getElementById("landingDisplay");
    const background = document.getElementById("bgImage");
    const weatherDisplay = document.getElementById("weatherDisplay");
    const errorDisplay = document.getElementById("errorDisplay");
    landingDisplay.innerHTML = `
        <h1 class="title">Simple Weather</h1>
        <div class="search">
            <input type="text" id="location" placeholder="Search location">
            <button class="search-button" onclick="getWeather()">Search</button>
        </div>
    `
    weatherDisplay.innerHTML = ""
    errorDisplay.innerHTML = ""
    background.style.backgroundImage = `url(/img/defaultbackground.png)`
}