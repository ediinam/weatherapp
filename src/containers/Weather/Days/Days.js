import React from 'react';
import Day from './Day/Day';


const days = (props) => props.cities.map((city) => { 
      return <Day
            key={city.id}
            id={city.id}
            city={city.name} 
            day={city.day}
            date={city.date}
            weather={city.weather}
            maxDayTemp={city.maxDayTemp}
            minDayTemp={city.minDayTemp}
            maxNightTemp={city.maxNightTemp}
            minNightTemp={city.minNightTemp}
            windSpeed={city.windSpeed}
            humidity={city.humidity}
            click = {() => props.clicked(city.id)}
            setImg={props.image}
            />
      });

export default days;