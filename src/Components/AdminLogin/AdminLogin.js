import React, { Component } from "react";
import "./AdminLogin.scss";
import { connect } from "react-redux";
import { setMessages, setMessage } from "../../ducks/reducer";
import { Link } from "react-router-dom";
import axios from "axios";

class AdminLogin extends Component {
  constructor() {
    super();

    this.state = {
      isEditing: false,
      message: "",
      newMessage: ""
    };
  }

  componentDidMount() {
    this.getMessages();
  }
  getMessages = () => {
    axios.get("/api/messages").then(res => {
      this.props.setMessages(res.data);
    });
  };

  editToggle = id => {
    this.setState({
      isEditing: !this.state.isEditing
    });
  };

  saveEdit = (message_id, message) => {
    axios.put(`/api/messages/${message_id}?message=${message}`).then(res => {
      console.log(res.data, "Res FROM ADMINLOGIN");
      // this.setState({
      //   newMessage: res.data.id
      // });
      this.props.setMessage(res.data);
    });
  };

  newMessageHandler = e => {
    this.setState({
      newMessage: e.target.value
    });
    const { newMessage } = this.state;
    this.props.setMessage(newMessage);
  };

  render() {
    console.log(this.props.message);
    const { loggedInUser, messages } = this.props;
    const mappedMessages = messages.map(message => (
      <div className="message-container">
        <div className="titles">
          <h4>
            <h5 style={{ color: "purple" }}>From: </h5>
            {message.name}
          </h4>
          <h4>
            <h5 style={{ color: "purple" }}>Email: </h5> {message.email}
          </h4>
        </div>
        <p>
          <h5 style={{ textDecoration: "underline" }}>Message: </h5>
          {message.message}
        </p>
        <button onClick={id => this.editToggle(id)}>edit message</button>
        {this.state.isEditing ? (
          <div>
            <input
              value={this.state.newMessage}
              onChange={this.newMessageHandler}
            />
            <button
              onClick={() =>
                this.saveEdit(this.props.message.id, this.props.message)
              }
            >
              save
            </button>
          </div>
        ) : (
          <div />
        )}
      </div>
    ));
    return (
      <div className="admin-main">
        {loggedInUser ? (
          <div className="mapped-messages">
            <h2>My messages:</h2>
            {mappedMessages}
            <Link to="/admin">
              <button>back</button>
            </Link>
          </div>
        ) : (
          <div className="admin-login">
            <h2>Email:</h2>
            <input
              placeholder="Enter your email..."
              value={this.props.adminEmail}
              onChange={this.props.adminEmailHandler}
            />
            <h2>Password:</h2>

            <input
              placeholder="Enter Password..."
              type="password"
              value={this.props.password}
              onChange={this.props.passwordHandler}
            />
            <div className="buttons">
              <button onClick={this.props.login}>Login</button>
              <button onClick={this.props.adminLoginToggle}>Back</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = {
  setMessages: setMessages,
  setMessage: setMessage
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminLogin);
