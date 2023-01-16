import "./Navbar.css";
import React from "react";
import Logo from "../../resources/logo.png";

export default function Navbar() {
	return (
		<div className="header">
			<div className="logo-div">
				<img src={Logo} className="logo" alt="Portfolio logo" />
			</div>

			<div className="links">
				<a className="menuButton">Home</a>
				<a className="menuButton">About</a>
				<a className="menuButton">Experience</a>
				<a className="menuButton">Skills</a>
				<a className="menuButton">Projects</a>
				<a className="menuButton">Contact Me</a>
			</div>
		</div>
	);
}
