import "./Navbar.css";
import React from "react";
import Logo from "../../resources/logo.png";

export default function Navbar() {
	return (
		<div className="header">
			<div className="logo-div">
				<img src={Logo} className="logo" alt="Portfolio logo" />
			</div>

			<div className="links-div">
				<a className="menuButton">
					<p className="menuButton">Home</p>
				</a>

				<a className="menuButton">
					<p className="menuButton">About</p>
				</a>
				<a className="menuButton">
					<p className="menuButton">Experience</p>
				</a>
				<a className="menuButton">
					<p className="menuButton">Skills</p>
				</a>
				<a className="menuButton">
					<p className="menuButton">Projects</p>
				</a>

				<a className="menuButton">
					<p className="menuButton">Contact Me</p>
				</a>
			</div>
		</div>
	);
}
