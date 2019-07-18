import React from 'react';
import '../../../../App.css';

const city = (props) => {
    let imgSrc = props.setImg(props.currentWeather);
        return (
            <div className="cardCustom cityCard col-lg-4 col-xs-10 align-self-center justify-content-center"
                 onClick={props.click}>
                <h2 className="cardTitle">{props.city}</h2>
                <div className="d-flex justify-content-center">
                    <img src={imgSrc} 
                        alt={props.currentWeather} 
                        className="images card-img"/>
                    <p className="temperature align-self-start">{props.currentTemp}°C</p>
                </div>
            </div>

        );
}

export default city;