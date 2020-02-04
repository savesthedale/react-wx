
import React, { Component } from 'react'
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useCookies, Cookies } from 'react-cookie';
const Route = require('react-router-dom').Route;
const BrowserRouter = require('react-router-dom').BrowserRouter;
const Link = require('react-router-dom').Link



class Forecast extends Component {
    state = {
      all:[],
      list: [],
    }



 // Code is invoked after the component is mounted/inserted into the DOM tree.
 componentDidMount(props) {  
    var lat = this.props.lat
    var lon = this.props.lon
    var api = process.env.REACT_APP_API
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+'&units=imperial&appid='+api)
  
    .then(result => result.json())
      .then(result => {
        this.setState({
          all: result,
          list: result.list,
        })
      })
  }

  render() {
    
  var days = this.state.list.slice(0,8).map((item, key) =>

  <Col md="auto">
    <Card bg="light" style={{ width: '10rem' }}>
    <Card.Header>{item.dt}</Card.Header>
      <Card.Body>
        <img src={`icons/${item.weather[0].icon}.svg`}></img> 
        <Card.Title> {Math.round(item.main.temp)} &#176;</Card.Title>
        <Card.Text> {item.main.humidity}% humidity </Card.Text>
        <Card.Text> {item.weather[0].description}</Card.Text>
        <Card.Text>Wind {Math.round(item.wind.speed)}mph  <img src={`icons/wind.png`} style={{height:'16px', transform: `rotate(${item.wind.deg}deg)` }}></img> </Card.Text>
        </Card.Body>
    </Card>
  </Col> )
    

    return (
      <Row className="justify-content-md-center-mb-3">
        { days}
      </Row> 
    ) 
  }
}
  export default Forecast




