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
      message: ""
    };
  }

  componentDidMount() {
    this.getMessages();
  }
  getMessages = () => {
    axios.get("/api/messages").then(res => {
      this.props.setMessages(res.data.reverse());
    });
  };

  editToggle = id => {
    console.log("id LABEL =====>", id);
    this.setState({
      isEditing: !this.state.isEditing
    });
  };

  saveEdit = id => {
    console.log(id);
    const { message } = this.state;

    axios.put(`/api/messages/${id}?message=${message}`).then(res => {
      console.log(res.data, "3---------Res FROM ADMINLOGIN");
      this.setState({
        message: res.data
      });
      // const { message } = this.props;
      this.props.setMessages(res.data);
    });
    this.getMessages();
    this.editToggle();
  };

  newMessageHandler = e => {
    this.setState({
      message: e.target.value
    });
    // const { message } = this.state;
    // this.props.setMessage(message);
  };

  render() {
    console.log(this.props);
    const { loggedInUser, messages } = this.props;
    const mappedMessages = messages.map(message => (
      <div className="message-container" key={message.id}>
        {/* <Link to={`/admin/${message.id}`}> */}
        <div className="titles">
          <h4>
            <h5 style={{ color: "purple" }}>From: </h5>
            {message.name}
          </h4>
          <h4>
            <h5 style={{ color: "purple" }}>Email: </h5> {message.email}
          </h4>
        </div>
        {/* </Link> */}

        <p>
          <h5 style={{ textDecoration: "underline" }}>Message: </h5>
          {message.message ? <span>{message.message}</span> : <span />}
        </p>

        {this.state.isEditing ? (
          <div>
            <input
              // value={this.props.message}
              onChange={this.newMessageHandler}
            />
            <button onClick={() => this.saveEdit(message.message_id)}>
              save
            </button>
          </div>
        ) : (
          <button onClick={() => this.editToggle(message.message_id)}>
            edit message
          </button>
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
