import './Header.scss'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

export default function Header() {
    return (
        <header className="header">
            <Link to="/"><img className="header__logo" src={logo} alt="SZ"></img></Link>
            <ul className="header__nav">
                <li className="header__nav-item"><a className="header__nav-link" href="#about">About</a></li>&nbsp;|&nbsp;
                <li className="header__nav-item"><a className="header__nav-link" href="#experience">Experience</a></li>&nbsp;|&nbsp;
                <li className="header__nav-item"><a className="header__nav-link" href="#projects">Projects</a></li>&nbsp;|&nbsp;
                <li className="header__nav-item"><a className="header__nav-link" href="https://docs.google.com/document/d/e/2PACX-1vTcTu5hINOBz4mqr_suK0p3VKFKykDrKBbkETy7IdyCBueCedAjc4yG1sJmiTuY49m8eyx634OsPuC-/pub" target="_blank">
                    Resume<i className="bi-arrow-up-right"></i></a></li>
            </ul>
        </header>
    );
}