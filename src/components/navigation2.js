import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
            <div className="leftnav">
			    <Link to="/"><img src="/images/jblogo.png" alt="logo" /></Link>
            </div>
            
			<nav ref={navRef}>
				<HashLink to="/#aboutme" smooth onClick={showNavbar}>About me</HashLink>
				<HashLink to="/#myskills" smooth onClick={showNavbar}>My skills</HashLink>
                <HashLink to="/#projects" smooth onClick={showNavbar}>Projects</HashLink>
                <HashLink to="/#contact" smooth onClick={showNavbar}>Contact</HashLink>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;