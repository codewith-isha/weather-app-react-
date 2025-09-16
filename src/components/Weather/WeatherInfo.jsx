import React from 'react'

const WeatherInfo = ({icon , temperature , location}) => {
  return (
    <>
    <img src={icon} className="weather-icon"/>
    <p className='temperature'>{temperature}°C</p>
    <p className='location'>{location}</p>
    </>
  )
}

export default WeatherInfo