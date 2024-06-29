import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      display:'',
      audioString: {
        Q:'Heater 1',
        W:'Heater 2',
        E:'Heater 3',
        A:'Heater 4',
        S:'Clap',
        D:'Open HH',
        Z:'Kick n\' Hat',
        X:'Kick',
        C:'Closed HH'
      },
      volume:30,
      power:true
    }
  }

  powerButton = (e) => {
    const isChecked = e.target.checked;
    console.log(`isChecked: ${isChecked}`);
    this.setState({
      power:isChecked
    })
  }

  playAudio = (e) => {
    if (this.state.power) {
      const audio = e.target.querySelector('.clip');
      audio.volume = this.state.volume/100;
      audio.play();
      this.setState({
        display:this.state.audioString[audio.id]
      });
    }
    else {
      return null;
    }
  }

  handleKeyDown = (e) => {
    if (this.state.power) {
      const key = e.key.toUpperCase();
      const audio = document.getElementById(key);
      audio.volume = this.state.volume/100;
      audio.play();
      this.setState({
        display:this.state.audioString[key]
      });
    }
    else {
      return null;
    }
  }

  handleVolumeChange = (e) => {
    if (this.state.power) {
      const volumeLevel = e.target.value
      this.setState({
        display:`Volume: ${volumeLevel}`,
        volume:volumeLevel
      });
    }
    else {
      return null;
    }
  }

  componentDidMount = () => {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render () {

    return (
      <>
        <div className='main-container' id='drum-machine'>
          <div className='pad-bank'>
            <div className="drum-pad" id="heater-1" onClick={this.playAudio}><audio className="clip" id="Q" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"></audio>Q</div>
            <div className="drum-pad" id="heater-2" onClick={this.playAudio}><audio className="clip" id="W" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"></audio>W</div>
            <div className="drum-pad" id="heater-3" onClick={this.playAudio}><audio className="clip" id="E" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"></audio>E</div>
            <div className="drum-pad" id="heater-4" onClick={this.playAudio}><audio className="clip" id="A" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"></audio>A</div>
            <div className="drum-pad" id="clap" onClick={this.playAudio}><audio className="clip" id="S" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"></audio>S</div>
            <div className="drum-pad" id="open-hh" onClick={this.playAudio}><audio className="clip" id="D" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"></audio>D</div>
            <div className="drum-pad" id="kick-n-hat" onClick={this.playAudio}><audio className="clip" id="Z" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"></audio>Z</div>
            <div className="drum-pad" id="kick" onClick={this.playAudio}><audio className="clip" id="X" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"></audio>X</div>
            <div className="drum-pad" id="closed-hh" onClick={this.playAudio}><audio className="clip" id="C" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"></audio>C</div>
          </div>
          <div className='controls-container'>
            <div className='power-button'>
              <input 
              type='checkbox' 
              id='toggle-button' 
              checked={this.state.power}
              onChange={this.powerButton}
              />Power
              <label for='toggle-button'/>
            </div>
            <div className='display' id='display'>{this.state.power ? this.state.display : null}</div>
            <div className='volume-slider'>
              <input 
              type='range' 
              min='0'
              max='100'
              value={this.state.volume} 
              onInput={this.handleVolumeChange} 
              className='slider' 
              id='myRange'
              />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App
