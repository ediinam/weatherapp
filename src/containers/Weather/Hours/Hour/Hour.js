import React from 'react';
import '../../../../App.css';

const hour = (props) => {
    let imgSrc = props.setImg(props.weather);
        return (
            <div className="cardCustom hourCard">
                <p className="hour">{props.hour}</p>
                <div className="d-flex justify-content-around hourInformation">
                    <p className="temperature align-self-center">{props.temperature}°C</p>
                    <img src={imgSrc} alt={props.weather} className="images"/>             
                    <div className="information">
                        <p>Brzina vjetra </p>
                        <p className="fontBold">{props.windSpeed}km/h</p>
                    </div>
                    <div className="information">
                        <p>Mogućnost padavina </p>
                        <p className="fontBold">{props.chanceOfRain}%</p>
                    </div>
                    <div className="information">
                        <p>Vlažnost vazduha </p>
                        <p className="fontBold">{props.humidity}%</p>
                    </div>
                </div>
            </div>
        );
}

export default hour;