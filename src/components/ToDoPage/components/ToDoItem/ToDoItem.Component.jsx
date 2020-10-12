import React, {Component} from "react";
import "./ToDoItem.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class ToDoItem extends Component {

  // constructor(props) {
  //   super(props);
  // }

  checkTask() {
    const task = {...this.props.task};
    task.checked = !task.checked;
    this.props.markTask(task);
  }

  render() {
    return (
      <div className="todo_item_container">
        <div className="todo_item_checkbox" onClick={()=>this.checkTask()}>
          {/*<input type="checkbox"/>*/}
          {this.props.task.checked ?
            <FontAwesomeIcon icon="check"/>
            : null}
        </div>
        <div className="todo_item_title">
          <span>{this.props.task && this.props.task.title}</span>
        </div>
        <div className="todo_item_delete">
          <FontAwesomeIcon icon="trash-alt"/>
        </div>
      </div>
    )
  }
}

export default ToDoItem;
