import { useEffect, useState } from 'react'
import './App.css'
import SearchIcon from './assets/search.png'
import MainWeather from './components/MainWeather'
import AdditionalDetails from './components/AdditionalDetails'

const API_URL_CURRENT = "http://api.openweathermap.org/data/2.5/weather?units=metric&appid=d75d12d8bebc2ae436c6b7d25caa1bfd"
const API_URL_FORECAST = "http://api.openweathermap.org/data/2.5/forecast?units=metric&cnt=7&appid=d75d12d8bebc2ae436c6b7d25caa1bfd"

const App = () => {

  const [weatherData , setWeatherData] = useState(null);
  const [forecast , setForecast] = useState(null)
  const [query , setQuery] = useState('')
  const [error , setError] = useState(null)

  const FetchData = async (searchQuery) => {
      const respsonse = await fetch(`${API_URL_CURRENT}&q=${searchQuery}`)
      const data = await respsonse.json()

      if (data.cod === "404") {
        // City not found
        setError("City not found. Please try another city.");
        setWeatherData(null); // Clear previous data
      } else {
        setWeatherData(data); // Update with new data
        setError(null); // Clear any previous error
      }

      respsonse .catch(error => {
        console.error("Error fetching weather data:", error);
        setError("An error occurred while fetching data.");
        setWeatherData(null); // Clear previous data
      });
  }

  // const handleSearch = () => {
  //   if (cityName.trim()) {
  //     FetchData(cityName);
  //   } else {
  //     setError("Please enter a city name.");
  //   }
  // };

  const FetchForecast = async (city) => {
    const respsonse = await fetch(`${API_URL_FORECAST}&q=${city}`)
    const data = await respsonse.json()
    setForecast(data)
    
  }

  
  useEffect(
    () => {
      FetchData('Nairobi');
      FetchForecast('Nairobi');
    },[]
  );

  return (
    <>
    <div className='app-name'>
    <h2>Weather App</h2>

    </div>
        <div className='header-section'>
          <div className='theme'></div>
      
          <div className='search'>
            <input 
              placeholder='Search your city' 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text" />

            <img 
              className = "search-button" 
              src= {SearchIcon} 
              alt="Search" 
              onClick={ () => {
                query ? FetchData(query.trim()) : alert("Enter city name")
                setQuery('')
              } }
              />
          </div>

          <div className='units'></div>
      </div>

      {error ? <p className="error">{error}</p>
      : (
        <>
          <MainWeather weatherData={weatherData}/>
    
          <div className='more-details-heading'>
              <h3>More weather details</h3>
           </div>
      
          <AdditionalDetails weatherData={weatherData}/>

          <div className='forecast'>
            <h3>Forecast</h3>
          </div>
        </>
       )
      }
      
    </>
  )
}

export default App
