const updateWeather =()=>{
    const cityName = document.getElementById('cityname').value
    const apiKey = '79f2cf277bc27380212156d0de28b562'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`

    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
         
        const description = data.weather[0].description
        const temp = data.main.temp
        const temp_feel = data.main.feels_like
        const humi = data.main.humidity
        const wind = data.wind.speed
        
        const weatherInfo = document.getElementById('showWeather')

        weatherInfo.innerHTML=`
            <h2>Description: ${description}</h2>
            <h2> Temperature: ${temp}&#8451</h2>
            <h2>Temperature Feel: ${temp_feel}&#8451</h2>
            <h2>Humidity: ${humi}%</h2>
            <h2>WindSpeed: ${wind} m/s</h2>
        `
    })
    .catch(error=>{
        console.error('Input not valid!!',error)
        document.getElementById('showWeather').textContent = 'Input not Found!'
    })
}