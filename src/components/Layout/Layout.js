import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./Layout.module.css";
import * as authSelectors from "../../redux/auth/authSelectors";
import Sidebar from "../Sidebar/Sidebar";
import Spinner from "react-loader-spinner";

function Layout({ children, loading }) {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.main}>
        {loading ? <Spinner type="ThreeDots" /> : children}
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const mapStateToProps = (state) => {
  return {
    loading: authSelectors.getLoading(state),
  };
};

export default connect(mapStateToProps)(Layout);
