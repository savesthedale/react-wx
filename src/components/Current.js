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
    }

 // Code is invoked after the component is mounted/inserted into the DOM tree.
 componentDidMount(props) {  
    var lat = this.props.lat
    var lon = this.props.lon
    var api = process.env.REACT_APP_API
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=imperial&appid='+api)
    //fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=imperial&appid=b5ef7ac8cf8cd652f3e1aa327644b8c8')

    .then(result => result.json())
      .then(result => {
        this.setState({
          all: result,
          main: result.main,
          wx: result.weather[0],
        })
      })
  }

  render() {
    const all = this.state.all
    const main = this.state.main
    const wx = this.state.wx
    //const cookies = this.props.cookies;
    return (      
      <div>          
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
          </Col>
          <Col xs lg="2">
            <h2> {all.name} </h2>
            <h1>{main.temp}</h1>
            <p>{wx.description}</p>
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


