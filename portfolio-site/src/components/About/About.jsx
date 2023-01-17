import "./About.css";
import Profile from "../../resources/Profile.png";

export default function About() {
	return (
		<>
			<div id="about" className="container">
				<h3>About Me</h3>

				<div className="about-content-div">
					<p className="about-content-text">
						Hi, I am Bipasha a budding front-end developer,
						nurturing passion to develop website features that can
						enhance the user experience and make web designs that
						are mobile-savvy. I have had the priviledge of working
						as an intern in live projects of few companies.
						Currently, I am working as a{" "}
						<span className="highlight">
							Programmer Analyst Trainee
						</span>{" "}
						in{" "}
						<a href="https://www.cognizant.com/in/en">
							<span className="highlight">Cognizant</span>
						</a>{" "}
						where I am a front-end developer working on client
						projects.
					</p>

					<img
						src={Profile}
						alt="Profile Picture"
						className="img-profile"
					></img>

					<div className="img-profile-border"></div>
				</div>
			</div>
		</>
	);
}
