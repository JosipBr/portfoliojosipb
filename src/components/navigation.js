import { NavLink } from "react-router-dom";

export default function Navigation(){
    return(
        <nav>
            <div className="leftnav">
                <NavLink to="/"><img src="/images/jblogo.png" alt="logo" /></NavLink>
            </div>
            <div className="rightnav">
                <NavLink to="/about">About me</NavLink>
                <NavLink to="/skills">My skills</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </nav>
    )
}