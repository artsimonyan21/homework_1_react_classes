import { Component } from "react";
import "./style.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: Number(localStorage.getItem("minValue")) || 0,
      minValue: Number(localStorage.getItem("minValue")) || 0,
      maxValue: Number(localStorage.getItem("maxValue")) || 20,
      step: Number(localStorage.getItem("step")) || 2,
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const { count, maxValue, step } = this.state;
    if (count + step <= maxValue) {
      this.setState({
        count: count + step,
      });
    }
  }

  handleMinus = () => {
    const { count, minValue, step } = this.state;
    if (count - step >= minValue) {
      this.setState({
        count: count - step,
      });
    }
  };

  handleMaxValue = (e) => {
    const inputvalue = Number(e.target.value);
    localStorage.setItem("maxValue", inputvalue);
    this.setState({
      maxValue: inputvalue,
    });
  };

  handleMinValue = (e) => {
    const inputvalue = Number(e.target.value);
    localStorage.setItem("minValue", inputvalue);
    this.setState({
      minValue: inputvalue,
    });
  };

  handleStepValue = (e) => {
    const inputvalue = Number(e.target.value);
    localStorage.setItem("step", inputvalue);
    this.setState({
      step: inputvalue,
    });
  };

  render() {
    const { count, maxValue, step, minValue } = this.state;
    return (
      <div className="full_page_wrapperr">
        <div className="inputs_wrapper">
          <label>Min Value</label>
          <input
            onChange={this.handleMinValue}
            value={minValue}
            type="number"
          />
          <label>Max Value</label>

          <input
            onChange={this.handleMaxValue}
            value={maxValue}
            type="number"
          />
          <label>Step</label>
          <input onChange={this.handleStepValue} value={step} type="number" />
        </div>

        <div className="counter_wrapper">
          <button onClick={this.handleMinus} className="minus_button">
            -
          </button>
          <h1>Counter : : {count} </h1>
          <button onClick={this.handleAdd} className="add_button">
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
