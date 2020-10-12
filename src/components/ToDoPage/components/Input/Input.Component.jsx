import React, {Component} from "react";
import "./Input.css"

class Input extends Component {
  render() {
    return (
      <div className="input_container">
        <input placeholder="Enter your task here"/>
      </div>
    )
  }
}

export default Input;
