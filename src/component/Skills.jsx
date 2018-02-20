import React, { Component } from 'react';


class Skills extends Component{


    render(){

        return(
            <div className="Skills code">
            <h3>Skills</h3>
            <hr />
            
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>JSON</li>
                    <li>MYSQL</li>
                    <li>Git</li>
                </ul>
                <ul className="second">
                    <li>React</li>
                    <li>Jquery</li>
                    <li>Typescript</li>
                    <li>SASS</li>
                    <li>BootStrap</li>
                </ul>

            </div>
        )
    }
}

export default Skills;