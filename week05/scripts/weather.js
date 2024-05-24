const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


const url ='https://api.openweathermap.org/data/2.5/onecall?lat=49.75&lon=6.64&units=imperial&appid=63f3714e75289b6b8b5648007b87a7c4'
const url2='https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=63f3714e75289b6b8b5648007b87a7c4'

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            //displayWeather(data);
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
    currentTemp.innerHTML = `${data.main.temp}&deg;F - ${desc}`;
 
}