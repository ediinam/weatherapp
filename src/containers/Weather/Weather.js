import React, { Component } from 'react';
import axios from 'axios';
import Cities from './Cities/Cities';
import Days from './Days/Days';
import Hours from './Hours/Hours';
import List from './List/List';
import '../../App.css';

class Weather extends Component {
    state = {
        cities: [],
        showCityState: true,
        showDaysState: false,
        showHoursState: false,
        cityDaily: [],
        dayHourly: [],
        listElements:[],
        pageTitle:'',
        previousId: ''
    };

    componentDidMount(){
        axios.get('weather.json')
                .then(response => {
                    const citiesJSON = response.data.cities;
                    this.setState({cities: citiesJSON});
                });
    }

    showDaily = (id) => {
        this.setState({previousId: id});
        this.setState({showCityState: false});
        this.setState({showDaysState: true});
        this.setState({showHoursState: false});

        let cityId = this.state.cities.findIndex(p => {
            return p.id === id;
        });

        this.setState({pageTitle: this.state.cities[cityId].name});
        this.setState({cityDaily: this.state.cities[cityId].daily.slice(0,7)});

        const citiesList = [...this.state.cities];
        citiesList.splice(cityId,1);
        const cityNames = citiesList.map((city) => {return {name: city.name, id:city.id}});

        this.setState({listElements: cityNames});

    }
    

    showHourly = (id) => {
        this.setState({showCityState: false});
        this.setState({showDaysState: false});
        this.setState({showHoursState: true});

        let dayId = this.state.cityDaily.findIndex(p => {
            return p.id === id;
        });

        this.setState({pageTitle: this.state.cityDaily[dayId].day});
        this.setState({dayHourly: this.state.cityDaily[dayId].hourly.slice(0,12)});
      
       const daysList = [...this.state.cityDaily];
       daysList.splice(dayId,1);
       const dayNames = daysList.map((dayel) => {return {name: dayel.day, id:dayel.id}});
      
       this.setState({listElements: dayNames});
    }

    showNext = (id) => {
        if(this.state.showDaysState === false && this.state.showHoursState === true){
            this.showHourly(id);
        }else if(this.state.showDaysState === true && this.state.showHoursState === false){
            this.showDaily(id);
        }
    }

    returnToPrevious = () => {
        if(this.state.showCityState === false && this.state.showDaysState === false && this.state.showHoursState === true){
            this.setState({showHoursState : false});
            this.setState({showDaysState : true});
            this.showDaily(this.state.previousId);
        }else if(this.state.showCityState === false && this.state.showDaysState === true && this.state.showHoursState === false){
            this.setState({showDaysState : false});
            this.setState({showCityState : true});
            this.setState({listElements: []});
        } else if(this.state.showCityState === true && this.state.showDaysState === false && this.state.showHoursState === false){
        }
    }

    showImage = (weather) => {
        if(weather === "Sunčano"){
            return "img/suncano.png";
        }else if(weather === "Pljuskovi"){
            return "img/pljuskovi.png";
        }else if(weather === "Delimično oblačno"){
            return "img/delimicno_oblacno.png";
        }else if(weather === "Vedro"){
            return "img/vedro.png";
        }else if(weather === "Oblačno"){
            return "img/oblacno.png";
        }else if(weather === "Jaka kiša sa grmljavinom"){
            return "img/jaka_kisa_sa_grmljavinom.png";
        }
    }



    render() {
        let classForListBtn = "displayNone";
        let classForContainer = "container-fluid d-flex align-content-center justify-content-center mainContainer";
        if(this.state.listElements.length >0){
            classForListBtn = "";
            classForContainer = "container-fluid mainContainer d-flex justify-content-start";
        }
        let hours = null;
        let days = null;
        let cities = null;
        let list = null;

        if(this.state.showCityState === true && this.state.showDaysState === false && this.state.showHoursState === false){
            cities = (
                <div className="row justify-content-around align-items-center m-auto">
                    <Cities
                    cities={this.state.cities}
                    clicked={this.showDaily}
                    image={this.showImage}/>
                </div>);
        } else if(this.state.showCityState === false && this.state.showDaysState === true && this.state.showHoursState === false){
            days = (
                    <div>
                        <h1>{this.state.pageTitle}</h1>
                        <div className="card-group">
                        <Days 
                        cities={this.state.cityDaily}
                        clicked={this.showHourly}
                        image={this.showImage}/>
                        </div>
                    </div>);
        } else if(this.state.showCityState === false && this.state.showDaysState === false && this.state.showHoursState === true){
               hours = (
               <div className="d-flex flex-column col-12 justify-content-start align-items-center">
                   <h1>{this.state.pageTitle}</h1>
                    <Hours
                    hours={this.state.dayHourly}
                    image={this.showImage}/>
                </div>);
        }

        list = (
                <List 
                pageWrapId={"page-wrap"}
                outerContainerId={"outerContainer"}
                elements={this.state.listElements}
                clicked={this.showNext}
                return={this.returnToPrevious}
                classForListBtn={classForListBtn}
                />
            );
                      
        return (
            <div>
            {list}
        <div id="outerContainer">
            <div id="page-wrap" className={classForContainer}>
            {cities}
            {days}
            {hours}
            </div>
        </div>
        </div>
        );
    }
}

export default Weather;
