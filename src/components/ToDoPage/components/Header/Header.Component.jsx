import React, {Component} from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {title: this.props.title || 'Title'};
  }

  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
      </div>
    )
  }
}

export default Header;
