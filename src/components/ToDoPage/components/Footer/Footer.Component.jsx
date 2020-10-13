import React, {Component} from "react";
import "./Footer.css"

class Footer extends Component {

  render() {
    return (
      <div className="footer_container">
        <button className="task_left_button" onClick={this.props.markTasks}>
          {this.props.tasksLeft || 0} tasks left
        </button>
        <div className="btn-group">
          <button className={this.props.filter === 'all' ? 'checked' : ''}
                  onClick={() => this.props.setFilter('all')}>All
          </button>
          <button className={this.props.filter === 'todo' ? 'checked' : ''}
                  onClick={() => this.props.setFilter('todo')}>ToDo
          </button>
          <button className={this.props.filter === 'completed' ? 'checked' : ''}
                  onClick={() => this.props.setFilter('completed')}>Completed
          </button>
        </div>
        <button className={this.props.clearFlag ? "task_left_button " : "hidden"} onClick={this.props.clearTasks}>
          Clear completed
        </button>
      </div>
    )
  }
}

export default Footer;
