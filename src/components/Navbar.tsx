import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/components/Navbar.module.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import logo from '../assets/logo/logo.png';

function Navbar() {
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-brand']}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Jm" className={styles.logoIcon} />
        </Link>
      </div>
      <ul className={styles['navbar-nav']}>
        <li className={styles['nav-item']}>
          <Link
            to="/about"
            className={`${styles['nav-link']} ${location.pathname === '/about' ? styles.active : ''}`}
          >
            À propos
          </Link>
        </li>
        <li className={styles['nav-item']}>
          <Link
            to="/projects"
            className={`${styles['nav-link']} ${location.pathname === '/projects' ? styles.active : ''}`}
          >
            Projets
          </Link>
        </li>
        <li className={styles['nav-item']}>
          <Link
            to="/contact"
            className={`${styles['nav-link']} ${location.pathname === '/contact' ? styles.active : ''}`}
          >
            Contact
          </Link>
        </li>
        <li className={styles['nav-item']}>
          <a
            href="https://www.linkedin.com/in/jean-marie-roy"
            className={styles['nav-link']}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={styles.icon} />
          </a>
        </li>
        <li className={styles['nav-item']}>
          <a
            href="https://github.com/jeanmroy"
            className={styles['nav-link']}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className={styles.icon} />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;