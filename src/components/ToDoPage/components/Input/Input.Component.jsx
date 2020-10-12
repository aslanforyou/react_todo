import React, {Component} from "react";
import "./Input.css"

class Input extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.addingTask = this.addingTask.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  addingTask(event) {
    if(event.keyCode === 13) {
      this.props.addTask(this.state.value);
      this.setState({value: ''});
    }
  }

  render() {
    return (
      <div className="input_container">
        <input placeholder="Enter your task here"
               value={this.state.value}
               onChange={this.handleChange}
               onKeyDown={(event) => this.addingTask(event)}/>
      </div>
    )
  }
}

export default Input;
