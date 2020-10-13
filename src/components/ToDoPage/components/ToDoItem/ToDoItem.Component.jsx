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
    this.props.markTask(task, this.props.index);
  }

  render() {
    return (
      <div className={`todo_item_container ${this.props.task.checked ? 'checked' : ''}`}>
        <div className="todo_item_checkbox" onClick={()=>this.checkTask()}>
          {/*<input type="checkbox"/>*/}
          {this.props.task.checked ?
            <FontAwesomeIcon icon="check"/>
            : null}
        </div>
        <div className="todo_item_title">
          <span>{this.props.task && this.props.task.title}</span>
        </div>
        <div className="todo_item_delete" onClick={() => {this.props.deleteTask(this.props.task, this.props.index)}}>
          <FontAwesomeIcon icon="trash-alt"/>
        </div>
      </div>
    )
  }
}

export default ToDoItem;
