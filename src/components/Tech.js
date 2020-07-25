import React, { Component } from "react";

class Tech extends Component {
  render() {
    return <span className="tag is-info">{this.props.tech}</span>;
  }
}

export default Tech;
