import './HomePage.scss';
import { Parallax } from 'react-parallax';
import heroImage from '../../assets/images/main-bg.jpg';
import ontrack from '../../assets/images/ontrack-preview.png';
import wnba from '../../assets/images/WNBA-preview.png';
import wnba2 from '../../assets/images/WNBA-preview2.png';
import instock from '../../assets/images/instock-preview.png';
import github from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linkedin.svg';

export default function HomePage() {
    return (
        <main className="home">
            <Parallax blur={5} bgImage={heroImage} bgImageAlt="background" strength={600}>
                <div className="hero">
                    <h1 className="hero__title">Sapphira Zheng</h1>
                    <ul className="hero__nav">
                        <li className="hero__nav-item"><a className="hero__nav-link" href="#about">About |&nbsp;</a></li>
                        <li className="hero__nav-item"><a className="hero__nav-link" href="#projects">Projects |&nbsp;</a></li>
                        <li className="hero__nav-item"><a className="hero__nav-link" href="https://docs.google.com/document/d/e/2PACX-1vTcTu5hINOBz4mqr_suK0p3VKFKykDrKBbkETy7IdyCBueCedAjc4yG1sJmiTuY49m8eyx634OsPuC-/pub" target="_blank">
                            Resume<i className="bi-arrow-up-right"></i></a></li>
                    </ul>
                </div>
            </Parallax>
            <div className="section-divider">| | |</div>
            <section className="about" id="about">
                <h2 className="section-title">ABOUT</h2>
                <div className="about__content">
                    <p className="about__text">Since graduating from the University of Waterloo in Kinesiology and Computer Science, I have been 
                        working towards kickstarting a career in web development through bootcamps, side projects, and networking. 
                        As a recent web development graduate from Brainstation, I am excited to complete the program with a toolkit full 
                        of technologies and problem-solving skills to become a successful web developer. I hope to be able to bring 
                        intelligent designs to life and contribute to positive user experiences on the web.</p>
                        <img className="about__image" src="https://via.placeholder.com/200" alt="Sapphira"></img>
                </div>
                <a className="about__link" href="https://github.com/saphzheng"><img className="about__icon" src={linkedin} alt="LinkedIn"></img></a>
                <a className="about__link" href="https://www.linkedin.com/in/sapphira-zheng"><img className="about__icon" src={github} alt="GitHub"></img></a>
            </section>
            {/* <div className="section-divider">| | |</div> */}
            <section className="projects" id="projects">
                <h2 className="section-title">PROJECTS</h2>
                <div className="project">
                    <img className="project__image" src={ontrack} alt="onTrack Fitness"></img>
                    <div className="project__text">
                        <a className="project__link" href="https://ontrack-fitness.herokuapp.com/" target="_blank">
                            <h3 className="project__title project__title--link">onTrack Fitness <i className="bi-arrow-up-right"></i></h3></a>
                        <span className="project__stack">React, Node.js, Express.js, TailwindCSS, Auth0</span>
                        <p className="project__description">An online workout aid that aims to help users reach fitness goals by providing 
                            an easy-to-use platform to structure/log workouts and visualize progress. An alternative to physical workout journals 
                            which are easy to lose and tedious to review. onTrack Fitness focuses on convenience through automatic data visualization 
                            and multiple device support.</p>
                        <a href="https://github.com/saphzheng/on-track__client" target="_blank"><img src={github}></img></a>
                    </div>
                </div>
                <div className="project">
                    <div className="project__images">
                        <img className="project__image--mobile" src={wnba} alt="WNBA industry project"></img>
                        <img className="project__image--mobile" src={wnba2} alt="WNBA industry project"></img>
                    </div>
                    <div className="project__text">
                        <h3 className="project__title">WNBA Hackathon</h3>
                        <span className="project__stack">React, Sass</span>
                        <p className="project__description">A redesign of the WNBA mobile app in a 24-hour hackathon with the goal 
                            of increasing fan engagement. Our strategy focussed on connecting to the user on a personal level by 
                            leveraging the WNBA players as influencers, leaning into paid advertisement, and incorporating sharing functions within the app.
                            Mockups and discussions were done using Figma and a prototype of the app was built to showcase our vision to the WBNA panel.</p>
                        <a href="https://github.com/Matthew-Hawk/Industry-WNBA" target="_blank"><img src={github}></img></a>
                    </div>
                </div>
                <div className="project">
                    <img className="project__image" src={instock} alt="Instock"></img>
                    <div className="project__text">
                        <h3 className="project__title">InStock</h3>
                        <span className="project__stack">React, Sass, Node.js, Express.js</span>
                        <p className="project__description">An inventory management system built by collaborating in a team with a focus on Agile methodology. 
                            Required tasks were set up in a JIRA kanban board and stand-ups were done every day for a week with a new acting project manager each day.
                            Mockups an style guides were provided in Figma and collaboration done via GitHub and Slack.</p>
                        <a href="https://github.com/skherad/in-stock__frontend" target="_blank"><img src={github}></img></a>
                    </div>
                </div>
            </section>
        </main>
    );
}