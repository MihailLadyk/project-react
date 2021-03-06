import styles from "./Sidebar.module.css";
import { connect } from "react-redux";
import dashboardIcon from "../../images/dashboard-icon.svg";
import settingsIcon from "../../images/settings-icon.svg";
import profileIcon from "../../images/profile-icon.svg";
import aboutUsIcon from "../../images/about-us-icon.svg";
import logoIcon from "../../images/logo-icon.svg";
import * as authSelectors from "../../redux/auth/authSelectors";
import { urls } from "../../routes";
import * as authOperations from "../../redux/auth/authOperations";
import HamburgerIcon from "../../images/Hamburger.svg";
import { Component } from "react";
import NavLink from "../NavLink/NavLink";

const links = [
  {
    to: urls.dashboard,
    icon: dashboardIcon,
    label: "Dashboard",
  },
  {
    to: urls.settings,
    icon: settingsIcon,
    label: "Settings",
  },
  {
    to: urls.profile,
    icon: profileIcon,
    label: "Profile",
  },
  {
    to: urls.aboutUs,
    icon: aboutUsIcon,
    label: "Our team",
  },
];

class Sidebar extends Component {
  state = {
    navOpen: false,
  };

  navOpenFunc = () => {
    this.setState({ navOpen: this.state.navOpen === true ? false : true });
  };

  render() {
    const { isAuthenticated, logout } = this.props;
    return (
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <img src={logoIcon} alt="Dashboard logo" />
        </div>

        <button
          type="button"
          className={styles.navBTN}
          onClick={this.navOpenFunc}
        >
          <img alt="" src={HamburgerIcon} />
        </button>

        <nav className={this.state.navOpen ? styles.navOpen : styles.nav}>
          <ul className={styles.navList}>
            {links.map((link) => (
              <li key={link.to} className={styles.navListItem}>
                <NavLink {...link} />
              </li>
            ))}
          </ul>

          <ul className={styles.navBottomList}>
            {isAuthenticated && (
              <li className={styles.navListItem}>
                <button onClick={logout} className={styles.button}>
                  LOGOUT
                </button>
              </li>
            )}
            {!isAuthenticated && (
              <>
                <li className={styles.button}>
                  <NavLink to={urls.login} label="Login" />
                </li>
                <li className={styles.button}>
                  <NavLink to={urls.register} label="Register" />
                </li>
              </>
            )}
          </ul>
        </nav>
      </aside>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: authSelectors.isAuthenticated(state),
  };
};

const mapDispatchToProps = {
  logout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
