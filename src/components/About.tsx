import style from '../styles/components/About.module.css';
import meImage from './../assets/images/me.jpg';
import { FaJava, FaCode, FaDatabase, FaCloud, FaTools, FaUsers, FaServer, FaTerminal, FaNetworkWired } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiSharp, SiSpring, SiAngular, SiRubyonrails, SiGit, SiSonarqube, SiApachemaven, SiArtifacthub, SiJenkins, SiAmazonwebservices, SiHashicorp, SiLinux, SiDocker, SiElementor, SiReact, SiNodedotjs, SiCisco, SiApache, SiApachetomcat, SiNginx, SiUml } from 'react-icons/si';
// Note: Les noms des composants Simple Icons sont en PascalCase, basés sur le nom de la technologie.
// Par exemple, TypeScript devient SiTypescript, C# devient SiCsharp, Spring devient SiSpring, etc.
// Vérifiez la documentation de simple-icons-react pour les noms exacts.

function About() {
    return (
        <div className={style.wrapper}>
            <div className={style['left-column']}>
                <h1 className="title">about.</h1>
                <p className='intro'>I'm a full-stack developer based in Québec, Canada.</p>
                <p className='description'>
                    Since 2011, my career has evolved from advanced tech support, to network technician
                    and now to a full-stack developer. I'm passionate about
                    programming backend APIs, networking and learning new technologies. When I'm not coding, I like to go outside in nature.
                </p>
                <hr className={style['separator']}/>
            </div>
            <div className={style['right-column']}>
                <img src={meImage} className={style['profile-image']} />
            </div>
            <div className={style['full-width-section']}>
                <p className='intro'>Below is a summary of the key technical skills and areas of expertise I've developed throughout the years.</p>
                <div className={style['skills-categories']}>
                    <div className={style['skill-category']}>
                        <h3 className={style['category-title']}>
                            <FaCode className={style['category-icon']} /> Languages
                        </h3>
                        <ul className={style['skills-list']}>
                            <li><FaJava className={style['skill-icon']} /> Java</li>
                            <li><SiTypescript className={style['skill-icon']} /> TypeScript</li>
                            <li><SiJavascript className={style['skill-icon']} /> JavaScript</li> {/* Note: simple-icons utilise 'javascript' */}
                            <li><SiSharp className={style['skill-icon']} /> C# .Net WPF</li> {/* Simple Icons a une icône pour C# */}
                            <li><FaDatabase className={style['skill-icon']} /> SQL</li> {/* Pas d'icône de couleur spécifique dans Simple Icons pour SQL */}
                        </ul>
                    </div>

                    <div className={style['skill-category']}>
                        <h3 className={style['category-title']}>
                            <FaServer className={style['category-icon']} /> Frameworks & Libraries
                        </h3>
                        <ul className={style['skills-list']}>
                            <li><SiSpring className={style['skill-icon']} /> Spring</li>
                            <li><SiAngular className={style['skill-icon']} /> Angular</li>
                            <li><SiRubyonrails className={style['skill-icon']} /> Ruby on Rails</li>
                            <li><SiElementor className={style['skill-icon']} /> Entity</li>
                            <li><SiReact className={style['skill-icon']} /> React</li>
                            <li><SiNodedotjs className={style['skill-icon']} /> Node.js</li>
                        </ul>
                    </div>

                    <div className={style['skill-category']}>
                        <h3 className={style['category-title']}>
                            <FaTools className={style['category-icon']} /> Tools
                        </h3>
                        <ul className={style['skills-list']}>
                            <li><SiGit className={style['skill-icon']} /> Git</li>
                            <li><SiUml className={style['skill-icon']} /> UML</li>
                            <li><SiSonarqube className={style['skill-icon']} /> SonarQube</li>
                            <li><SiApachemaven className={style['skill-icon']} /> Maven</li> {/* Note: simple-icons utilise 'apachemaven' */}
                            <li><SiHashicorp className={style['skill-icon']} /> Hashicorp Vault</li>
                            <li><SiArtifacthub className={style['skill-icon']} /> Artifactory</li>
                            <li><SiJenkins className={style['skill-icon']} /> Jenkins</li>
                            <li><FaTerminal className={style['skill-icon']} /> Bash, PowerShell, SSH</li>
                        </ul>
                    </div>

                    <div className={style['skill-category']}>
                        <h3 className={style['category-title']}>
                            <FaUsers className={style['category-icon']} /> Management
                        </h3>
                        <ul className={style['skills-list']}>
                            <li>Agile</li>
                            <li>Scrum</li>
                        </ul>
                    </div>

                    <div className={style['skill-category']}>
                        <h3 className={style['category-title']}>
                            <FaCloud className={style['category-icon']} /> Cloud & Deployment
                        </h3>
                        <ul className={style['skills-list']}>
                            <li><SiAmazonwebservices className={style['skill-icon']} /> Amazon AWS</li>
                            <li><SiDocker className={style['skill-icon']} /> Docker</li>
                            <li><SiLinux className={style['skill-icon']} /> Linux</li>
                        </ul>
                    </div>

                    <div className={style['skill-category']}>
                        <h3 className={style['category-title']}>
                            <FaNetworkWired className={style['category-icon']} /> Networking
                        </h3>
                        <ul className={style['skills-list']}>
                            <li><SiCisco className={style['skill-icon']} /> CCNA Formation</li>
                            <li><SiCisco className={style['skill-icon']} /> Cisco IOS & Hardware</li>
                            <li><SiCisco className={style['skill-icon']} /> Cisco Packet Tracer</li>
                            <li><SiApache className={style['skill-icon']} /> Apache</li>
                            <li><SiApachetomcat className={style['skill-icon']} /> Tomcat</li>
                            <li><SiNginx className={style['skill-icon']} /> Nginx</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;