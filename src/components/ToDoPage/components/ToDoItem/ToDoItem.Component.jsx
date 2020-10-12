import React, {Component} from "react";

class ToDoItem extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        {this.props.task && this.props.task.title}
      </div>
    )
  }
}

export default ToDoItem;
