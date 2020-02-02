const React = require('react');
const Link = require('react-router-dom').Link;

const About = function(){
    return(
        <div>
        <h1>About</h1>
        <p>this is a test of routing</p>
        <Link to='/'>Go Home</Link>
        </div>
    );
}

module.exports = About;