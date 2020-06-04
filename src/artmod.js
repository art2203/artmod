import React, { Component } from "react";

export default class Artmod extends Component {
  render() {
    return (
      <div>
	  <div>this message came from '{this.props.title}'</div>
      </div>
    );
  }
}