
const MainWeather = ({weatherData}) => {
    return (
        <div className='main-weather'>
        <h2 className='city'>{weatherData ? weatherData.name : "Nairobi"}</h2>
        <p><span>Main weather:  </span>{weatherData ? weatherData.weather[0].main : "Loading..."}</p>
        <p><span>Weather description:  </span>{weatherData ? weatherData.weather[0].description : "Loading..."}</p>
        <p><span>Temperature:  </span> {weatherData ? weatherData.main.temp: "Loading..."} &deg;C</p>
        <p><span>Max Temperature:  </span>{weatherData ? weatherData.main.temp_max : "Loading..."} &deg;C</p>
        <p><span>Min Temperature:  </span>{weatherData ? weatherData.main.temp_min : "Loading..."} &deg;C</p>
        <p><span> Atmospheric pressure:  </span>{weatherData ? weatherData.main.pressure : "Loading..."} hPa</p>
      </div>
    )
    
}

export default MainWeather
