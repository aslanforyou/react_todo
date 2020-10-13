import React, {Component} from "react";
import "./Footer.css"

class Footer extends Component {

  render() {

    return (
      <div className="footer_container">
        <button className="task_left_button" onClick={this.props.markTasks}>
          {this.props.tasksLeft || 0} tasks left
        </button>
        {this.props.clearFlag ?
          <button className="task_left_button" onClick={this.props.clearTasks}>
            Clear completed
          </button>
          : null}
      </div>
    )
  }
}

export default Footer;
