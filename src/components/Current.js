import React, { Component } from 'react'
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useCookies, Cookies } from 'react-cookie';
const Route = require('react-router-dom').Route;
const BrowserRouter = require('react-router-dom').BrowserRouter;
const Link = require('react-router-dom').Link
class Current extends Component {
    state = {
      all:[],
      main: [],
      wx: [],
      wind: [],
    }

 // Code is invoked after the component is mounted/inserted into the DOM tree.
 componentDidMount(props) {  
    var lat = this.props.lat
    var lon = this.props.lon
    var api = process.env.REACT_APP_API
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=imperial&appid='+api)


    .then(result => result.json())
      .then(result => {
        this.setState({
          all: result,
          main: result.main,
          wx: result.weather[0],
          wind: result.wind,
        })
      })
  }

  render() {
    const all = this.state.all
    const main = this.state.main
    const wx = this.state.wx
    const wind = this.state.wind
    //const cookies = this.props.cookies;
    return (      
      <div>          
      <Container>
            <h2 class="text-center"> {all.name} </h2>
            <div class="text-center"><img  class="img-fluid" style={{height: '15rem', margin:'-5% auto -5% auto'}} src={`icons/${wx.icon}.svg`}/></div>
            <h1 class=" display-1 text-center">{Math.round(main.temp)}&#176;</h1>
            <h2 class="text-center">{wx.description}</h2>
            <h4 class="text-center">{Math.round(wind.speed)}mph <img src={`icons/wind.png`} style={{height:'2rem', transform: `rotate(${wind.deg}deg)` }}></img></h4>
      </Container>
      </div>    
    )
  }
}

  export default Current


