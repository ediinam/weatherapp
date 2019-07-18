import React from 'react';
import Hour from './Hour/Hour';


const hours = (props) => props.hours.map((hour) => {
        return <Hour
            key={hour.id}
            id={hour.id}
            hour={hour.time} 
            temperature={hour.temperature}
            weather={hour.weather}
            windSpeed={hour.windSpeed}
            chanceOfRain={hour.chanceOfRain}
            humidity={hour.humidity}
            setImg={props.image}
            />
      });

export default hours;