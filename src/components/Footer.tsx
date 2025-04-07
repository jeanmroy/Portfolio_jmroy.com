import '../styles/components/Footer.module.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
    <footer className="footer">
        <div className="footer-content">
        <p>&copy; {currentYear} Mon Portfolio. Tous droits réservés.</p>
        <div className="social-links">
        </div>
        </div>
    </footer>
    );
}

export default Footer;