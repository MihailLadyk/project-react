import styles from './Sidebar.module.css';

import dashboardIcon from '../images/dashboard-icon.svg';
import settingsIcon from '../images/settings-icon.svg';
import profileIcon from '../images/profile-icon.svg';
import aboutUsIcon from '../images/about-us-icon.svg';
import logoutIcon from '../images/logout-icon.svg';
import logoIcon from '../images/logo-icon.svg';

import { urls } from '../../routes';

import NavLink from '../NavLink/NavLink';

const links = [
  {
    to: urls.dashboard,
    icon: dashboardIcon,
    label: 'Dashboard',
  },
  {
    to: urls.settings,
    icon: settingsIcon,
    label: 'Settings',
  },
  {
    to: urls.profile,
    icon: profileIcon,
    label: 'Profile',
  },
  {
    to: urls.aboutUs,
    icon: aboutUsIcon,
    label: 'About us',
  },
];

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={logoIcon} alt="Dashboard logo" />
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {links.map((link) => (
            <li key={link.to} className={styles.navListItem}>
              <NavLink {...link} />
            </li>
          ))}
        </ul>

        <ul className={styles.navBottomList}>
          <li className={styles.navListItem}>
            <NavLink to={urls.logout} icon={logoutIcon} label="Logout" />
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
