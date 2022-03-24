import React from "react";

class InputsHoras extends React.Component {
  constructor() {
    super();
    this.state = {
      inputSeconds: undefined,
      inputMinutes: undefined,
      inputHours: undefined,
    }
  }

  updateInput = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    const { handleInputs } = this.props;
    const { inputSeconds, inputMinutes, inputHours } = this.state;
    return (
      <div className="inputs-container">
        <label htmlFor="input-hours"></label>
        <input
          type="number"
          id="input-hours"
          name="inputHours"
          placeholder="Hora"
          onChange={this.updateInput}
        ></input>

        <label htmlFor="input-minutes"></label>
        <input
          type="number"
          id="input-minutes"
          name="inputMinutes"
          placeholder="Minuto"
          onChange={this.updateInput}
        ></input>

        <label htmlFor="input-seconds"></label>
        <input
          type="number"
          id="input-seconds"
          name="inputSeconds"
          placeholder="Segundo"
          onChange={this.updateInput}
        ></input>
       {/* usei o parseInt() abaixo pq o input passa uma string */}
        <button type="button"
          onClick={() => {
            handleInputs(parseInt(inputSeconds),
              parseInt(inputMinutes),
              parseInt(inputHours))
          }}>
          Ligar!
        </button>
      </div>
    )
  }
}

export default InputsHoras;
