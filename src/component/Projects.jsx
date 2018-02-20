import React, { Component } from 'react';


class Projects extends Component{


    render(){

        return(
            <div className="Projects code">
                
                <h2>Projects</h2>
                <hr />
                <h3>Match Em</h3>
                <ul>
                <li>Card matching game made with HTML5, CSS3, and Jquery </li>
                <li>Math 2 cards at a time, match all 16 to win</li>
                <li>comes with score and timer</li>
                </ul>
                <h3>Pixel Art Lab </h3>
                <ul>
                    <li>Made with HTML5, CSS3, JavaScript</li>
                    <li>Choose any color and grid size to make pixel art</li>
                </ul>
                <h3>Google Map API </h3>
                <ul>
                    <li>Made with Google Maps API, HTML5, CSS3, Knockout.js, and JavaScript</li>
                    <li>A map of Birmingham, AL</li>
                    <li>Pre-selected places with a search filter </li>
                </ul>
                <h3>Frogger clone</h3>
                <ul> 
                    <li>Made with HTML5, CSS3, JavaScript</li>
                    <li>Use the arrow keys to avoid enemies, and reach the river.</li>
                    <li>Collide with an enemy and you lose.</li>
                </ul>
                <h3>Type Writer</h3>
                <ul>
                    <li>Made with HTML5, CSS3, and Jquery</li>
                    <li>Testes your speed with a series of random words you must type.</li>
                    <li>WPM is calculated at the end.</li>
                </ul>
            </div>
        )
    }
}

export default Projects;