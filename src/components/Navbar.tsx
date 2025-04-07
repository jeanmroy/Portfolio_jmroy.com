import { Link } from 'react-router-dom';
import '../styles/components/Navbar.module.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" className="logo">Mon Portfolio</Link>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link to="/about" className="nav-link">À propos</Link>
                </li>
                <li className="nav-item">
                <Link to="/projects" className="nav-link">Projets</Link>
                </li>
                <li className="nav-item">
                <Link to="/blog" className="nav-link">Blog</Link>
                </li>
                <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;