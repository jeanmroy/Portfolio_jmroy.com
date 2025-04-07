import styles from  '../styles/components/Footer.module.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
    <footer className={styles.footer}>
        <div className={styles['footer-content']}>
        <p>&copy; {currentYear} Jean-Marie Roy</p>
        </div>
    </footer>
    );
}

export default Footer;