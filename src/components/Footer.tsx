import style from  '../styles/components/Footer.module.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
    <footer className={style.footer}>
        <hr className='separator' />
        <div className={style['footer-content']}>
        <p>&copy; {currentYear} Jean-Marie Roy</p>
        <hr className='separator' />
        </div>
    </footer>
    );
}

export default Footer;