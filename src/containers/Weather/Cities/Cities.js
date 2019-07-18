import React from 'react';
import City from './City/City';


const cities = (props) => props.cities.map((city) => {
        return <City
            key={city.id}
            city={city.name}
            currentTemp={city.currentTemp} 
            currentWeather={city.currentWeather}
            click = {() => props.clicked(city.id)}
            setImg={props.image}
            />
      });

export default cities;