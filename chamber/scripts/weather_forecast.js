const url_forecast='https://api.openweathermap.org/data/2.5/forecast?lat=-34.9&lon=-57.95&units=imperial&appid=c192a3206cec2928b6002659ccdaecfc&cnt=24'

async function apiFetch2() {
    try {
        const response = await fetch(url_forecast);
        if (response.ok) {
            const data = await response.json();
            setForecast(data.list)

        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}
apiFetch2() ;

function setForecast(data) {
    let y=0;
    for (let i = 1; i <4; i++) {
        let forecastTemp = document.querySelector(`#forecast${i} p`);
        forecastTemp.innerHTML = `${weekDay(data[y].dt_txt)} Weather:  ${data[y].main.temp}&deg;F`;
        y=y+8;
    }

}

function weekDay(dtTxt) {
    const date = new Date(dtTxt);
    const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
    return dayOfWeek;
}
