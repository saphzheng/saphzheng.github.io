import './HomePage.scss';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from 'react';
import headshot from '../../assets/images/headshot.jpg';
import ontrack from '../../assets/images/ontrack-preview.png';
import wnba from '../../assets/images/WNBA-preview.png';
import wnba2 from '../../assets/images/WNBA-preview2.png';
import instock from '../../assets/images/instock-preview.png';
import github from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linkedin.svg';

export default function HomePage() {
    const [ openInstock, setOpenInstock ] = useState(false);
    const [ openWNBA, setOpenWNBA ] = useState(false);

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
                <a className="about__link icon" href="https://github.com/saphzheng"><img className="about__icon" src={github} alt="GitHub"></img></a>
                <a className="about__link icon" href="https://www.linkedin.com/in/sapphira-zheng"><img className="about__icon" src={linkedin} alt="LinkedIn"></img></a>
            </section>
            <section className="experience" id="experience">
                <h2 className="section-title">EXPERIENCE</h2>
                <Tabs className="tabs">
                    <TabList className="tabs__list">
                        <Tab className="tabs__link" selectedClassName="tabs__link--active">2023</Tab>
                        <Tab className="tabs__link" selectedClassName="tabs__link--active">2018</Tab>
                        <Tab className="tabs__link" selectedClassName="tabs__link--active">2017</Tab>
                    </TabList>
                    <TabPanel className="tabs__panel">
                        <h3 className="experience__position">Web Developer</h3>
                        <h4 className="experience__employer">Living Water Counselling Centre</h4>
                        <p className="experience__dates">Jan 2023 - Current</p>
                        <ul className="experience__points">
                            <li className="experience__point">Rework company webpage using WordPress and migrate complex features to external platforms to improve usability.</li>
                            <li className="experience__point">Work with UX designers to build fundraising campaign sites and donation pages.</li>
                            <li className="experience__point">Set up an in-house Linux server to host Moodle LMS locally with the goal of restructuring course delivery.</li>
                        </ul>
                    </TabPanel>
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
                </Tabs>
            </section>
            <section className="projects" id="projects">
                <h2 className="section-title">PROJECTS</h2>
                <div className="project">
                    <div className="project__basics">
                        <img className="project__image" src={ontrack} alt="onTrack Fitness"></img>
                        <div className="project__text">
                            <h3 className="project__title">onTrack Fitness</h3>
                            <p className="project__description">An online workout aid that aims to help users reach fitness goals by providing 
                                an easy-to-use platform to structure/log workouts and visualize progress. An alternative to physical workout journals 
                                which are easy to lose and tedious to review. onTrack Fitness focuses on convenience through automatic data visualization 
                                and multiple device support.
                                <br></br><br></br>
                                More details can be found in project ReadMe on GitHub</p>
                            <a className="project__link" href="https://ontrack-fitness.herokuapp.com/" target="_blank">Visit Live Site <i className="bi-arrow-up-right"></i></a>
                            <a className="project__icon icon" href="https://github.com/saphzheng/on-track__client" target="_blank"><img src={github}></img></a>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <div className="project__basics">
                        <img className="project__image" src={instock} alt="Instock"></img>
                        <div className={`project__text ${openInstock ? "project__text--open" : ""}`}>
                            <h3 className="project__title">InStock</h3>
                            <span className="project__stack">React, Sass, Node.js, Express.js</span>
                            <p className="project__description">An inventory management system built by collaborating in a team with a focus on Agile methodology. 
                                Required tasks were set up in a JIRA kanban board and stand-ups were done every day for a week with a new acting project manager each day.
                                Mockups and style guides were provided in Figma and collaboration done via GitHub and Slack.</p>
                            <button className={`project__link ${openInstock ? "project__link--open" : ""}`} onClick={() => setOpenInstock(!openInstock)}>More Details</button>
                            <a className="project__icon icon" href="https://github.com/Matthew-Hawk/In-Stock__Backend" target="_blank"><img src={github}></img></a>
                        </div>
                    </div>
                    <div className={`project__details ${openInstock ? "project__details--open" : ""}`}>
                        As part of Brainstation's program, this group project was completed within the web development cohort and simulated a sprint to practice Agile methodology.
                        The goal is to build a CRUD application that allows a company to manage their warehouses and inventory with a React frontend communicating with a robust Express backend. 
                        <br></br><br></br>
                        To begin, a sprint planning meeting was held to evenly divide up the tasks and decide on a rough schedule. Then, stand-ups were done everyday to
                        update each other on progress and identify any roadblocks together. The active project manager, which changed every day, led the stand-up and was in charge of 
                        approving all pull requests. Our team prioritized comprehensive communication via Slack and Zoom. All updates and issues were voiced on Slack, and meetings or larger issues 
                        resolved through Zoom. At the end of the sprint, the final website was tested together to ensure full functionality and completion of requirements.
                        <br></br><br></br>
                        Lessons Learned:
                        <ul>
                            <li>Test functionality of the website early and often to avoid large fixes at the end</li>
                            <li>Decide on conventions and global assets early to prevent repeating work</li>
                            <li>Set deadlines for each milestone of the project to ensure project is on track to completion in the alloted time</li>
                        </ul>
                    </div>
                </div>
                <div className="project">
                    <div className="project__basics">
                        <div className="project__images">
                            <img className="project__image--mobile" src={wnba} alt="WNBA industry project"></img>
                            <img className="project__image--mobile" src={wnba2} alt="WNBA industry project"></img>
                        </div>
                        <div className={`project__text ${openWNBA ? "project__text--open" : ""}`}>
                            <h3 className="project__title">WNBA Hackathon</h3>
                            <span className="project__stack">React, Sass</span>
                            <p className="project__description">A redesign of the WNBA mobile app completed in a 24-hour cross-discipline hackathon at Brainstation.
                                Given the problem of increasing fan engagement, our strategy focussed on connecting to the user on a personal level by 
                                leveraging the WNBA players as influencers, leaning into paid advertisement, and incorporating sharing functions within the app.
                                Mockups and discussions were done using Figma and a prototype of the app was built to showcase our vision to the WBNA panel.</p>
                                <button className={`project__link ${openWNBA ? "project__link--open" : ""}`} onClick={() => setOpenWNBA(!openWNBA)}>More Details</button>
                            <a className="project__icon icon" href="https://github.com/Matthew-Hawk/Industry-WNBA" target="_blank"><img src={github}></img></a>
                        </div>
                    </div>
                    <div className={`project__details ${openWNBA ? "project__details--open" : ""}`}>
                        Near the end of the Brainstation program, we had a chance to apply everything we learned in a cross-discipline industry hackathon.
                        The problem statement presented by the WNBA was to increase fan engagement in a 24-hour hackathon. Each team included web developers, UI/UX designers, data scientists, as well as digital marketers. 
                        <br></br><br></br>
                        Being very mindful of the short time restraint, our team set strict deadlines for each milestone with meetings at every deadline to ensure everyone is on track. We first agreed
                        on the scope of our solution with a MVP (minimal viable product) planned out, as well as additional features if time allowed. As a web developer, I waited for the UI/UX designers to hand
                        off the mockups and then built a redesign of the WNBA app for mobile using React and Sass. Any features that we could not build in time were shown in the prototype.
                        <br></br><br></br>
                        Lessons Learned:
                        <ul>
                            <li>Avoid deciding on a large scope as it becomes confusing what the focus is</li>
                            <li>Communicate with UI/UX team clearly and often to make sure they understand what is possible to build in a given time restraint</li>
                            <li>Ensure all teams are on the same page and update each other frequently</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}