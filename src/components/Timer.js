import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: this.props.setTimer.inputSegundo,
      minutes: this.props.setTimer.inputMinuto,
      id: undefined,
      isTimeOver: false,
      buttonText: "Cancelar",
      ring: false,
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
        this.setState({
          seconds: 0,
          minutes: 0,
          buttonText: "Voltar",
          ring: true,
          isTimeOver: true,
        })
        clearInterval(this.state.id)
      }
    }

  }

  componentWillUnmount() {
    console.log('desmontou!')
  }

  render() {
    const { minutes, seconds, id, buttonText, ring, isTimeOver } = this.state;
    const { turnTimerOff } = this.props;
    console.log(minutes)
    return (
      <>
        <div className="timer-container">
          {isTimeOver
            ? <img
              className="despertador-image"
              src="../images/despertador_tocando.gif"
              alt="despertador tocando">
            </img>
            :
            <img
              className="despertador-image"
              src="../images/despertador_5.gif"
              alt="despertador">
            </img>}

          <h1>
            {minutes.toString().padStart(2, "0")}
            :
            {seconds.toString().padStart(2, "0")}
          </h1>
          <button
            className="cancel-button"
            type="button"
            onClick={() => turnTimerOff(id)}>
            {buttonText}
          </button>
        </div>
        {ring &&
          <audio
            autoPlay={true}
            src="../audio/ring.ogg">
          </audio>}
      </>
    )
  }
}

export default Timer;
