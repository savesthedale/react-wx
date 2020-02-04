import React, { Component } from 'react'
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Moment from 'react-moment';
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
        <Row className="justify-content-md-center">
          <Col xs lg="2">
          </Col>
          <Col xs lg="2">
            <h2> {all.name} </h2>
            <div ClassName="current_icon"><img src={`icons/${wx.icon}.svg`}></img> </div>
            <h1>{Math.round(main.temp)}</h1>
            <p>{wx.description}</p>
            <p>{Math.round(wind.speed)}mph <img src={`icons/wind.png`} style={{height:'16px', transform: `rotate(${wind.deg}deg)` }}></img></p>
    
    
          </Col>
          <Col xs lg="2">
          </Col>
        </Row>
      </Container>
      </div>    
    )
  }
}

  export default Current


