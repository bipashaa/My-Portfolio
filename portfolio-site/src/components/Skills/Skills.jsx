import "./Skills.css";
import LinearProgress from "@material-ui/core/LinearProgress";

export default function Skills() {
	return (
		<div id="skills" className="container">
			<h3>Skills.</h3>
			<div>
				<div class="skill">
					<div class="progress-bar-container">
						<div className="skill-name-percent">
							<h2>HTML</h2>
							<h6>99%</h6>
						</div>
						<div class="progress-bar">
							<span class="percentage html"></span>
						</div>
					</div>

					<div class="progress-bar-container">
						<div className="skill-name-percent">
							<h2>CSS</h2>
							<h6>85%</h6>
						</div>
						<div class="progress-bar">
							<span class="percentage css"></span>
						</div>
					</div>

					<div class="progress-bar-container">
						<div className="skill-name-percent">
							<h2>JavaScript</h2>
							<h6>80%</h6>
						</div>
						<div class="progress-bar">
							<span class="percentage js"></span>
						</div>
					</div>

					<div class="progress-bar-container">
						<div className="skill-name-percent">
							<h2>Java</h2>
							<h6>85%</h6>
						</div>
						<div class="progress-bar">
							<span class="percentage java"></span>
						</div>
					</div>

					<div class="progress-bar-container">
						<div className="skill-name-percent">
							<h2>SpringBoot</h2>
							<h6>70%</h6>
						</div>
						<div class="progress-bar">
							<span class="percentage spring"></span>
						</div>
					</div>

					<div class="progress-bar-container">
						<div className="skill-name-percent">
							<h2>MySql</h2>
							<h6>90%</h6>
						</div>
						<div class="progress-bar">
							<span class="percentage sql"></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
