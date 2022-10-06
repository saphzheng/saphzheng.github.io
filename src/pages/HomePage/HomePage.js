import './HomePage.scss';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import headshot from '../../assets/images/headshot.jpg';
import ontrack from '../../assets/images/ontrack-preview.png';
import wnba from '../../assets/images/WNBA-preview.png';
import wnba2 from '../../assets/images/WNBA-preview2.png';
import instock from '../../assets/images/instock-preview.png';
import github from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import headshot from '../../assets/images/headshot.jpg';

export default function HomePage() {
    return (
        <main className="home">
            <div className="hero">
                <div className="hero__content">
                    <h1 className="hero__title">Sapphira Zheng</h1>
                    <h2 className="hero__subtitle">Web Developer</h2>
                    <a className="hero__cta" href="#projects">Check out my projects</a>
                </div>
            </div>
            <section className="about" id="about">
                <h2 className="section-title">ABOUT ME</h2>
                <div className="about__content">
                    <p className="about__text">Since graduating from the University of Waterloo in Kinesiology and Computer Science, I have been 
                        working towards kickstarting a career in web development through bootcamps, side projects, and networking. 
                        As a recent web development graduate from Brainstation, I am excited to complete the program with a toolkit full 
                        of technologies and problem-solving skills to become a successful web developer. I hope to be able to bring 
                        intelligent designs to life and contribute to positive user experiences on the web.</p>
                        <img className="about__image" src={headshot} alt="Sapphira"></img>
                </div>
                <a className="about__link" href="https://github.com/saphzheng"><img className="about__icon" src={github} alt="GitHub"></img></a>
                <a className="about__link" href="https://www.linkedin.com/in/sapphira-zheng"><img className="about__icon" src={linkedin} alt="LinkedIn"></img></a>
            </section>
            <section className="experience" id="experience">
                <h2 className="section-title">EXPERIENCE</h2>
                <Tabs className="tabs">
                    <TabList className="tabs__list">
                        <Tab className="tabs__link" selectedClassName="tabs__link--active">1</Tab>
                        <Tab className="tabs__link" selectedClassName="tabs__link--active">2</Tab>
                        <Tab className="tabs__link" selectedClassName="tabs__link--active">3</Tab>
                    </TabList>
                    <TabPanel className="tabs__panel">
                        <h3 className="experience__position">Front-End Software Engineering QA Intern</h3>
                        <h4 className="experience__employer">Flipp Corporation</h4>
                        <p className="experience__dates">Jan - Apr 2018</p>
                        <ul className="experience__points">
                            <li className="experience__point">Automated UI tests and processes to improve efficiency for regression testing.</li>
                            <li className="experience__point">Collaborated with developers on testing requirements for new features to establish scope of tests.</li>
                            <li className="experience__point">Ensured consistent functionality across Android and iOS devices.</li>
                        </ul>
                    </TabPanel>
                    <TabPanel className="tabs__panel">
                        <h3 className="experience__position">Embedded Software Engineering Intern</h3>
                        <h4 className="experience__employer">Ignis Innovation Inc.</h4>
                        <p className="experience__dates">May - Aug 2017</p>
                        <ul className="experience__points">
                            <li className="experience__point">Designed schematics and PCB layouts for daughterboards on Altium Designer to connect Hikey single board computers to display panels.</li>
                            <li className="experience__point">Developed Python script to automate generation of C header files from gamma chip pin map configuration described in Excel files.</li>
                            <li className="experience__point">Created C++ library to control ELDIM camera and process pixel data, replacing manual GUI navigation.</li>
                        </ul>
                    </TabPanel>
                    <TabPanel className="tabs__panel">
                        <h3 className="experience__position">Software Quality Assurance Analyst</h3>
                        <h4 className="experience__employer">CaseBank Technologies Inc</h4>
                        <p className="experience__dates">Sept - Dec 2016</p>
                        <ul className="experience__points">
                            <li className="experience__point">Pioneered new testing framework on iOS and Android for Spotlight airplane diagnostics software.</li>
                            <li className="experience__point">Led white/black box and stress testing for ChronicX’s airplane maintenance system, revealing critical memory issues over high input loads and other performance bottlenecks.</li>
                            <li className="experience__point">Designed new standardized testing procedures for current and future employees</li>
                        </ul>
                    </TabPanel>
                </Tabs>
            </section>
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
                    <img className="project__image" src={instock} alt="Instock"></img>
                    <div className="project__text">
                        <h3 className="project__title">InStock</h3>
                        <span className="project__stack">React, Sass, Node.js, Express.js</span>
                        <p className="project__description">An inventory management system built by collaborating in a team with a focus on Agile methodology. 
                            Required tasks were set up in a JIRA kanban board and stand-ups were done every day for a week with a new acting project manager each day.
                            Mockups and style guides were provided in Figma and collaboration done via GitHub and Slack.</p>
                        <a href="https://github.com/Matthew-Hawk/In-Stock__Backend" target="_blank"><img src={github}></img></a>
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
                        <p className="project__description">A redesign of the WNBA mobile app completed in a 24-hour cross-discipline hackathon at Brainstation.
                            Given the problem of increasing fan engagement, our strategy focussed on connecting to the user on a personal level by 
                            leveraging the WNBA players as influencers, leaning into paid advertisement, and incorporating sharing functions within the app.
                            Mockups and discussions were done using Figma and a prototype of the app was built to showcase our vision to the WBNA panel.</p>
                        <a href="https://github.com/Matthew-Hawk/Industry-WNBA" target="_blank"><img src={github}></img></a>
                    </div>
                </div>
            </section>
        </main>
    );
}