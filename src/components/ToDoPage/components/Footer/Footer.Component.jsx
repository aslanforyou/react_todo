import React, {Component} from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasksLeft: this.props.tasksLeft || 0,
      filter: this.props.filter || 'all',
      clearFlag: this.props.clearFlag || false
    };
  }

  render() {

    return (
      <div className="footer_container">
        <button className="task_left_button" onClick={this.props.markTasks}>
          {this.props.tasksLeft || 0} tasks left
        </button>
        {this.state.clearFlag ?
          <button onClick={this.props.clearTasks}>
            Clear completed
          </button>
          : null}
      </div>
    )
  }
}

export default Footer;
