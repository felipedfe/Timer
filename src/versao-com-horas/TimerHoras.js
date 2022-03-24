import React from 'react';

class TimerHoras extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: this.props.setTimer.inputSegundo,
      minutes: this.props.setTimer.inputMinuto,
      hours: this.props.setTimer.inputHora,
      id: undefined,
    }
  };

  componentDidMount() {
    const ONE_SECOND = 1000

    const ID = setInterval(() => {
      this.setState((prevState) => ({
        seconds: prevState.seconds - 1,
      }))
    }, ONE_SECOND)
    this.setState({
      id: ID,
    })
  }

  componentDidUpdate(prevProps, prevState) { 
    if (prevState.seconds === 0) {
      this.setState({
        seconds: 59,
        minutes: prevState.minutes - 1
      })
      if (prevState.minutes === 0) {
        console.log('aqui')
        this.setState({
          minutes: 59,
          hours: prevState.hours - 1,
        })
      }
    }
  }

  // componentWillUnmount(){
  //   console.log('desmontou')
  // }

  render() {
    const { hours, minutes, seconds, id } = this.state;
    const { turnTimerOff } = this.props;
    console.log(minutes)
    // console.log(this.props.setTimer.inputSegundo)
    return (
      <>
      <div className="timer-container">
        <p>horas: {hours}</p>
        <p>minutos: {minutes}</p>
        <p>segundos: {seconds}</p>
      </div>
      <button type="button" onClick={ () => turnTimerOff(id) }>Cancelar</button>
      </>
    )
  }
}

export default TimerHoras;
