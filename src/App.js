import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Experience from './component/Experience';
import Education from './component/Education';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Skills />
        <Projects />
        <Experience />
        <Education />
      </div>
    );
  }
}

export default App;
