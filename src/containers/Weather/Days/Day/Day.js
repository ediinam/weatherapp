import React from 'react';
import '../../../../App.css';

const day = (props) => {
    let imgSrc = props.setImg(props.weather);
    console.log(props.weather);
        return (
            <div className="cardCustom dayCard" 
                onClick={props.click}>

                <div className="row">
                    <p className="cardTitle col">{props.day}</p>
                    <p class="date col align-self-end">{props.date}</p>
                </div>

                <div className="d-flex justify-content-center marginTop">
                    <div className="col-lg-3 col-xs-8 align-self-center">
                        <img src={imgSrc} alt={props.weather} className="images"/>
                    </div>
                    <div className="information flex-column col-lg-7 col-xs-8">
                        <p className="col-sm-10">Brzina vjetra: <span className="fontBold">{props.windSpeed}km/h</span></p>
                        <p className="col-sm-10">Vlažnost vazduha: <span className="fontBold">{props.humidity}%</span></p>
                    </div>
                </div>

                <div className="row borderTop">
                    <div className="col"> 
                        <p>Dan</p>
                        <div className="d-flex justify-content-center">
                            <span className="dayCardMaxTemperature align-self-baseline">{props.maxDayTemp}°C</span>
                            <span className="dayCardMinTemperature align-self-baseline">{props.minDayTemp}°C</span>
                        </div>
                    </div>
                    <div className="col"> 
                        <p>Noć</p>
                        <div className="d-flex justify-content-center">    
                            <span className="dayCardMaxTemperature align-self-baseline">{props.maxNightTemp}°C</span>
                            <span className="dayCardMinTemperature align-self-baseline">{props.minNightTemp}°C</span>
                        </div>
                    </div>
                </div>
               
            </div>

        );
}

export default day;