
import Forecast from './components/Forecast'
import Current from './components/Current'
import About from './components/About'
import React, { Component } from 'react'
import { withCookies } from 'react-cookie';

const Link = require('react-router-dom');
const BrowserRouter = require('react-router-dom').BrowserRouter;
const hashHistory = require('react-router-dom').hashHistory;
const Route = require('react-router-dom').Route;
class App extends Component {
    state = {
      characters: [],
    }
    removeCharacter = index => {
      const { characters } = this.state
      this.setState({
        characters: characters.filter((character, i) => {
          return i !== index
        }),
      })
    }
    handleSubmit = character => {
      this.setState({ characters: [...this.state.characters, character] })
    }
    render() {
      const { characters } = this.state
      return (
        <BrowserRouter>
          <div className="container">
            <Current lat={this.props.allCookies.lat} lon={this.props.allCookies.lon}/>
            <Forecast lat={this.props.allCookies.lat} lon={this.props.allCookies.lon}/>
          </div>
        </BrowserRouter>
      )
    }
}

export default  withCookies(App);
