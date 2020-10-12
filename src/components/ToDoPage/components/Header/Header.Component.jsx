import React, {Component} from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {title: this.props.title || 'Title'};
  }
  render() {
    return (
      <div>
        <h3>{this.state.title}</h3>
      </div>
    )
  }
}

export default Header;
