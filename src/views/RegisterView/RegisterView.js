import RegisterForm from "../../components/Forms/RegisterForm";
import { connect } from "react-redux";
import * as authOperations from "../../redux/auth/authOperations";
import React, { Component } from "react";

class RegisterView extends Component {
  handleSubmit = (data) => {
    this.props.register(data);
  };
  render() {
    return (
      <div>
        <RegisterForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapDipatchToProps = {
  register: authOperations.register,
};

export default connect(null, mapDipatchToProps)(RegisterView);
