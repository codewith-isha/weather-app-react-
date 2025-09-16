import React from 'react'

const WeatherStats = ({humidity , windSpeed, humidityIcon,windIcon}) => {
  return (
    <div className='weather-data'>
      <div className='col'>
        <img src={humidityIcon} />
        <div>
          <p>{humidity}%</p>
          <span>Humidity</span>
        </div>
      </div>

      <div className='col'>
        <img src={windIcon}  />
        <div>
          <p>{windSpeed} Km/h</p>
          <span>Wind Speed</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherStats