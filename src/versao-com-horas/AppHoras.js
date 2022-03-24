import React from 'react';
import './App.css';
import InputsHoras from './InputsHoras';
import TimerHoras from './TimerHoras';


class AppHoras extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setTimer: {
        inputHora: undefined,
        inputMinuto: undefined,
        inputSegundo: undefined,
      },
      isTimerOn: false,
    }
  }

  handleInputs = (inputSegundo, inputMinuto, inputHora) => {
    this.setState({
      setTimer: {
        inputHora,
        inputMinuto,
        inputSegundo,
      },
      isTimerOn: true,
    })
  }

  turnTimerOff = (id) => {
    clearInterval(id)
    this.setState({
      isTimerOn: false,
    })
  }

  render() {
    const { setTimer, isTimerOn } = this.state;

    return <>
      {isTimerOn
      ?
      <TimerHoras setTimer={ setTimer } turnTimerOff={ this.turnTimerOff }/>
      :
      <InputsHoras handleInputs={ this.handleInputs } />
      }
    </>
  }
}

export default AppHoras;
