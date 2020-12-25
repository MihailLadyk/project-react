import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './NavLink.module.css';

function NavLink({ icon, label, to }) {
  return (
    <Link to={to} className={styles.navLink}>
      <div className={styles.icon}>
        <img src={icon} alt={label} />
      </div>

      <span className={styles.label}>{label}</span>
    </Link>
  );
}

NavLink.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavLink;
