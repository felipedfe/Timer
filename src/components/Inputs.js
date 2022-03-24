import React from "react";

class Inputs extends React.Component {
  constructor() {
    super();
    this.state = {
      inputSeconds: 0,
      inputMinutes: 0,
      disabledStartButton: true
    }
  }

  validateInput = () => {
    const { inputMinutes, inputSeconds } = this.state;
    const bothZero = inputMinutes === 0 && inputSeconds === 0

    if (parseInt(inputMinutes) > 59
      || parseInt(inputSeconds) > 59
      || isNaN(inputMinutes)
      || isNaN(inputSeconds)
      || bothZero
    ) {
      return true;
    }
    return false;
  }

  updateInput = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: parseInt(value)
    }, () => {
      this.setState({
        disabledStartButton: this.validateInput(),
      })
    })
    console.log(this.validateInput())
    console.log(this.state.inputMinutes)
  }

  render() {
    const { handleInputs } = this.props;
    const { inputSeconds, inputMinutes, disabledStartButton } = this.state;

    return (
      <div className="inputs-and-button">
        <div className="inputs-container">
          <div className="container-minutes">
            <p>minutos:</p>
            <label htmlFor="input-minutes"></label>
            <input
              type="number"
              id="input-minutes"
              name="inputMinutes"
              min="0"
              max="59"
              value={inputMinutes}
              onChange={this.updateInput}
            ></input>
          </div>

          <div className="container-seconds">
            <label htmlFor="input-seconds"></label>
            <p>segundos:</p>
            <input
              type="number"
              id="input-seconds"
              name="inputSeconds"
              min="0"
              max="59"
              value={inputSeconds}
              onChange={this.updateInput}
            ></input>
          </div>
        </div>
        <div className="start-button-container">
          {/* usei o parseInt() abaixo pq o input passa uma string */}
          <button
            className="start-button"
            type="button"
            name="startButton"
            disabled={disabledStartButton}
            onClick={() => {
              handleInputs(parseInt(inputSeconds),
                parseInt(inputMinutes))
            }}>
            Ligar!
          </button>
        </div>
      </div>
    )
  }
}

export default Inputs;
