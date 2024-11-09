
const AdditionalDetails = ({weatherData}) => {
    return (
        <div className='additional-weather-details'>
            <p><span>Humidity:  </span>{weatherData ? weatherData.main.humidity : "Loading..."} %</p>
            <p><span>Wind direction:  </span>{weatherData ? weatherData.wind.deg : "Loading..."}&deg;</p>
            <p><span>Wind speed:  </span>{weatherData ? weatherData.wind.speed : "Loading..."} m/s</p>
            <p><span>Visibility:  </span>{weatherData ? (weatherData.visibility)/1000 : "Loading..."} Km</p>
        </div>
    )
}

export default AdditionalDetails