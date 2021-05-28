import LoginForm from "../../components/Forms/LoginForm";
import { connect } from "react-redux";
import * as authOperations from "../../redux/auth/authOperations";
import React, { Component } from "react";

class LoginView extends Component {
  handleSubmit = (data) => {
    this.props.login(data);
  };
  render() {
    return (
      <div>
        <LoginForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapDipatchToProps = {
  login: authOperations.login,
};

export default connect(null, mapDipatchToProps)(LoginView);
