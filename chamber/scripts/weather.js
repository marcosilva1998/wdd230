const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


const url ='https://api.openweathermap.org/data/2.5/weather?lat=-34.9&lon=-57.95&units=imperial&appid=c192a3206cec2928b6002659ccdaecfc'



async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}
apiFetch() ;
const displayWeather = (data) => {
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherIcon.setAttribute('width', 50);
    weatherIcon.setAttribute('height', 50);
    currentTemp.innerHTML = `${data.main.temp}&deg;F - ${desc}`;
 
}