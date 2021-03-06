import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from 'Charts';

class WeatherList extends Component {
    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const pressure = cityData.list.map(weather => weather.main.pressure);

        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Chart data={temps} color="orange" units="&deg;C"/>
                </td>
                <td>
                    <Chart data={pressure} color="green" units="hPa"/>
                </td>
                <td>
                    <Chart data={humidity} color="black" units="%"/>
                </td>
            </tr>
        );
    }

    render () {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature(Celsius)</th>
                        <th>Pressure(hPa)</th>
                        <th>Humidity(%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    return {
        weather
    };
}

export default connect(mapStateToProps)(WeatherList);
