import React, { Component } from "react";
import "./Message.scss";

class Message extends Component {
  componentDidMount() {}
  render() {
    console.log(this.props.match);
    return <div>Message</div>;
  }
}

export default Message;
