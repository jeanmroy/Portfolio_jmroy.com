import style from '../styles/components/Contact.module.css';
import contactImage from './../assets/images/contact.png';

function Contact() {
    return (
            <div className={style.wrapper}>
                <div className={style['left-column']}>
                    <h1 className="title">contact.</h1>
                    <p className='intro'>Use this form or my social media links to contact me.</p>
                    <p className='description'> work in progress .</p>
                </div>
            <div className={style['right-column']}>
                <img src={contactImage} className={style['contact-image']} />
            </div>
                
            </div>
    );
}

export default Contact;