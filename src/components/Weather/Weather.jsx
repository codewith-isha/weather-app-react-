import React, { useEffect, useRef, useState } from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import clear from '../assets/clear.png'
import cloud from '../assets/cloud.png'
import drizzle from '../assets/drizzle.png'
import humidity from '../assets/humidity.png'
import rain from '../assets/rain.png'
import snow from '../assets/snow.png'
import wind from '../assets/wind.png'


import SearchBar from './SearchBar'
import WeatherInfo from './WeatherInfo'
import WeatherStats from './WeatherStats'
import toast from 'react-hot-toast'

const allIcons = {
    '01d':clear,
    "01n":clear,
    "02d":cloud,
    "02n":cloud,
    "03d":cloud,
    '03n':cloud,
    '04d':drizzle,
    "04n":drizzle,
    '09d':rain,
    "09n":rain,
    '10d':rain,
    '10n':rain,
    "13d":snow,
    '13n':snow
  }

const Weather = () => {
  const inputRef = useRef()
  const [weatherData, setWeatherData] = useState(null)
  
  const getweatherData = async (city)=>{
    if(!city){
      toast.error('Enter City Name!!');

      return
    }
    try{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`
      const response = await fetch(url)
      const data = await response.json()

      if(!response.ok){
        alert(data.message)
        return
      }

      const icon = allIcons[data.weather[0].icon] || clear
      setWeatherData({
        humidity:data.main.humidity,
        windSpeed:Math.floor(data.wind.speed * 3.6),
        temperature:Math.floor(data.main.temp),
        location: data.name,
        icon: icon
      })
    }catch(error){
      setWeatherData(null)
      console.log("Error in fetching weather data")
    }
  }
  useEffect(()=>{
    getweatherData("")
  },[])
  return (
    <div className='weather'>
      <SearchBar inputRef={inputRef} onSearch={()=>getweatherData(inputRef.current.value)} searchIcon={search_icon}></SearchBar>

      {weatherData && (
        <>
        <WeatherInfo
        icon = {weatherData.icon}
        temperature= {weatherData.temperature}
        location={weatherData.location} 
        />
      
        <WeatherStats
        humidity={weatherData.humidity}
        windSpeed={weatherData.windSpeed}
        humidityIcon={humidity}
        windIcon={wind}
        />
        </>
      )}
  
</div>)}
export default Weather