import styles from '../styles/components/Preloading.module.css';

interface PreloadingProps {
    load: boolean;
}

function Preloading(props: PreloadingProps) {
    return <div id={props.load ? styles.preloader : styles['preloader-none']}></div>;
}

export default Preloading;