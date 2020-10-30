import React, { useState } from "react";

const redborder = {
  border: "2px solid red",
  width: "400px",
  margin: "5px",
};

const parentborder = {
  border: "2px solid green",
  width: "414px",
};

const blueborder = {
  border: "2px solid blue",
  width: "400px",
  margin: "5px",
};

const Calculator = () => {
  const [state, setState] = useState({});
  
  const calculate = (event) => {
    const fahrenheit = event.target.value;
    const celcius = ((fahrenheit - 32) * 5) / 9;
    setState({ celcius });
  };
  // const render = () => {
  return (
    <div style={parentborder}>
      <h2>Parent componet holding the state</h2>
      <InputFahrenheit update={calculate}></InputFahrenheit>
      <ShowCelcius celcius={state.celcius}></ShowCelcius>
    </div>
  );
  // }
};

const InputFahrenheit = (props) => {
  return (
    <div style={redborder}>
      <input
        type="number"
        onChange={props.update}
        placeholder="Input fahrenheit degree"
      />
    </div>
  );
};

const ShowCelcius = (props) => {
  return <div style={blueborder}>{props.celcius} celcius</div>;
};

export default Calculator;
