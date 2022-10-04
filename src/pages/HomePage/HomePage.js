import './HomePage.scss';
import { Parallax } from 'react-parallax';
import heroImage from '../../assets/images/main-bg.jpg';
import onTrack from '../../assets/images/ontrack-preview.png';
import github from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <main className="home">
            <Parallax blur={5} bgImage={heroImage} bgImageAlt="background" strength={600}>
                <div className="hero">
                    <h1 className="hero_title">Sapphira Zheng</h1>
                    <ul className="hero__nav">
                        <li className="hero__nav-item"><a className="hero__nav-link" href="#about">About |&nbsp;</a></li>
                        <li className="hero__nav-item"><a className="hero__nav-link" href="#projects">Projects |&nbsp;</a></li>
                        {/* <li className="hero__nav-item"><Link to="/resume" className="hero__nav-link">Resume</Link></li> */}
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
                    <img className="project__image" src={onTrack} alt="onTrack Fitness"></img>
                    <div className="project__text">
                        <h3 className="project__title">onTrack Fitness</h3>
                        <span className="project__stack">React, Node, Express, TailwindCSS, Auth0</span>
                        <p className="project__description">An online workout aid that aims to help users reach fitness goals by providing an easy-to-use platform to structure/log workouts and visualize progress. An alternative to physical workout journals which are easy to lose and tedious to review. onTrack Fitness focuses on convenience through automatic data visualization and multiple device support.</p>
                        <a href="https://ontrack-fitness.herokuapp.com/">link</a>
                    </div>
                </div>
            </section>
            {/* <div className="section-divider">| | |</div>
            <section className="contact" id="contact">
                <h2 className="section-title">Contact</h2>
            </section> */}
        </main>
    );
}