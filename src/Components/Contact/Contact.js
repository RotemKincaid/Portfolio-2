import React, { Component } from "react";
import "./Contact.scss";
import mail from "../Header/Assets/email.png";
import axios from "axios";
import AdminLogin from "../AdminLogin/AdminLogin";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import {
  setName,
  setEmail,
  setMessage,
  setMessages
} from "../../ducks/reducer";
class Contact extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      message: "",
      messages: [],
      adminEmail: "",
      password: "",
      loggedInUser: false
    };
  }

  componentDidMount() {
    axios.get("/auth/user").then(res => {
      this.setState({
        loggedInUser: res.data
      });
    });
    // this.getMessages();
  }

  login = () => {
    let { adminEmail, password } = this.state;
    axios.post("/auth/login", { adminEmail, password }).then(res => {
      this.setState({
        loggedInUser: res.data,
        adminEmail: "",
        password: ""
        // loggedInUser: true
      });
    });
  };

  logout() {
    axios.get("/auth/logout").then(() => {
      this.setState({ loggedInUser: {} });
    });
  }

  nameHandler = e => {
    this.setState({
      name: e.target.value
    });
    const { name } = this.state;
    this.props.setName(name);
  };

  emailHandler = e => {
    this.setState({
      email: e.target.value
    });
    const { email } = this.state;
    this.props.setEmail(email);
  };

  messageHandler = e => {
    this.setState({
      message: e.target.value
    });
    const { message } = this.state;
    this.props.setMessage(message);
  };

  addMessage = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    // const payload = { name: name, email: email, message: message };
    axios.post("/api/messages", { name, email, message }).then(res => {
      console.log(res);
      this.setState({
        messages: res.data,
        name: "",
        email: "",
        message: "",
        login: false
      });
      const { messages } = this.state;
      this.props.setMessages(messages);
    });
    // axios.post("/send", { name, email, message }).then(res => {
    //   console.log(res);
    // });
    alert(
      "Thank you! Your message has been sent. I will reply as soon as I can!"
    );
  };

  // getMessages = () => {
  //   axios.get("/api/messages").then(res => {
  //     this.props.setMessages(res.data);
  //   });
  // };
  adminLoginToggle = e => {
    this.setState({
      login: !this.state.login
    });
  };

  adminEmailHandler = e => {
    this.setState({
      adminEmail: e.target.value
    });
  };
  passwordHandler = e => {
    this.setState({
      password: e.target.value
    });
  };
  render() {
    console.log(this.state.loggedInUser);
    console.log(this.props);
    // const { messages } = this.props;
    // const mappedMessages = messages.map(message => (
    //   <div>
    //     <h4>{message.name}</h4>
    //     <h4>{message.email}</h4>
    //     <p>{message.message}</p>
    //   </div>
    // ));

    return (
      <div className="contact-main">
        <div className="contact-inner">
          <h1>Contact me</h1>
          <h4>
            Leave your name, email,
            <br />
            and a message!
          </h4>
          <div className="contact-form">
            <input
              placeholder="name"
              value={this.state.name}
              onChange={this.nameHandler}
            />
            <input
              placeholder="email"
              value={this.state.email}
              onChange={this.emailHandler}
            />
            <input
              className="message"
              placeholder="message..."
              value={this.state.message}
              onChange={this.messageHandler}
            />
          </div>
          <img
            className="mail"
            src={mail}
            alt="mail"
            onClick={e => this.addMessage(e)}
          />
        </div>

        {this.state.login ? (
          <div>
            <AdminLogin
              adminLoginToggle={this.adminLoginToggle}
              login={this.login}
              logout={this.logout}
              adminEmail={this.state.adminEmail}
              password={this.state.password}
              adminEmailHandler={this.adminEmailHandler}
              passwordHandler={this.passwordHandler}
              loggedInUser={this.state.loggedInUser}
              // mappedMessages={this.mappedMessages}
            />
          </div>
        ) : (
          <button className="toggle" onClick={this.adminLoginToggle}>
            Admin Login
          </button>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = {
  setName: setName,
  setEmail: setEmail,
  setMessage: setMessage,
  setMessages: setMessages
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
