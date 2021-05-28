import { Component } from "react";
import { Switch } from "react-router-dom";
import * as authOperations from "../redux/auth/authOperations";
import Layout from "./Layout/Layout";
import { routes } from "../routes";
import { connect } from "react-redux";
import PrivateRoute from "../routing/PrivateRoute";
import PublicRoute from "../routing/PublicRoute";

class App extends Component {
  componentDidMount() {
    this.props.fetchUserData();
  }

  render() {
    return (
      <Layout>
        <Switch>
          {routes.map((route) =>
            route.private ? (
              <PrivateRoute key={route.path} {...route} />
            ) : (
              <PublicRoute key={route.path} {...route} />
            )
          )}
        </Switch>
      </Layout>
    );
  }
}

const mapDispatchToProps = {
  fetchUserData: authOperations.fetchUserData,
};

export default connect(null, mapDispatchToProps)(App);
