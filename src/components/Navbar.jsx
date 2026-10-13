import react from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
const Navbar =() => {
    return(
        <nav className='navbar'>
            <div className="navbar-container">
                <Link to="/dashboard" className="navbar-logo">
                SkillForge
                </Link>
                <div className="navbar-links">
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/assessment">Assessment</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            </div>

             <NavLink to="/profile" className="navbar-profile">
             <span className='profile-avatar'>A</span>
             <span>Ana</span>
             </NavLink>
             </div>
        </nav>

    );
}
export default Navbar;