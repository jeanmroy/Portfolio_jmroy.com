import style from '../styles/components/Projects.module.css';
import projectImage from './../assets/images/projects.webp';

function Projects() {
    return (
            <div className={style.wrapper}>
                <div className={style['left-column']}>
                    <h1 className="title">projects.</h1>
                    <p className='intro'>This section features a collection of projects I've worked on, both personal and professional, highlighting my journey and capabilities.</p>
                    <p className='description'> work in progress .</p>
                </div>
            <div className={style['right-column']}>
                <img src={projectImage} className={style['projects-image']} />
            </div>
                
            </div>
    
    );
}

export default Projects;