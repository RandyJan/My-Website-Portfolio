import { Link, NavLink } from 'react-router-dom'
import RJLOGO from '../../assets/images/RJLOGO.png';
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faLaptopCode, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () =>(
 <div className='nav-bar'>
    <Link className="logo" to='/'>
        <img src={RJLOGO} alt='logo'/>
        {/* <img className = "sub-logo" src={LogoSubtitle} alt='RandyJan'/> */}
        
    </Link>

    <nav>
        <NavLink exact = "true" activeclassname = "active" to ="/">
            <FontAwesomeIcon icon = {faHome} color = "#4d4d4e"/>
        </NavLink>
        <NavLink exact = "true" activeclassname = "active" className="about-link" to ="/about">
            <FontAwesomeIcon icon = {faUser} color = "#4d4d4e"/>
        </NavLink>
        <NavLink exact = "true" activeclassname = "active" className = "portfolio-link" to ="/portfolio">
            <FontAwesomeIcon icon = {faLaptopCode} color = "#4d4d4e"/>
        </NavLink>
        <NavLink exact = "true" activeclassname = "active" className = "contact-link" to ="/contact">
            <FontAwesomeIcon icon = {faEnvelope} color = "#4d4d4e"/>
        </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href=''>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/RandyJan'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.facebook.com/randyjan.rongcales/'>
                    <FontAwesomeIcon icon={faFacebook} color='#4d4d4e'/>
                </a>
            </li>
        </ul>
 </div>
)
export default Sidebar