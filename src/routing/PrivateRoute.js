import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import * as authSelectors from "../redux/auth/authSelectors";

import { urls } from "../routes";

function PrivateRoute({
  component: Component,
  isAuthenticated,
  ...otherProps
}) {
  return (
    <Route {...otherProps}>
      {(props) => {
        return isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={urls.dashboard} />
        );
      }}
    </Route>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);
