import "./Experience.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import CTS from "../../resources/cts.png";
import HRC from "../../resources/HRC.png";
import Startup from "../../resources/Startup.png";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		alignItems: "flex-start",
	},
	orgLogo: {
		width: "3rem",
	},
	designation: {
		fontSize: "1.16rem",
		fontWeight: "bold",
		fontFamily: "Poppins, sans-serif",
	},
	years: {
		fontSize: "0.8rem",
		color: "#11999e",
		fontWeight: "bold",
		fontFamily: "Poppins, sans-serif",
	},
	desc: {
		fontSize: "1rem",
		fontFamily: "Poppins, sans-serif",
	},
}));

export default function Experience() {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;
	return (
		<>
			<div id="experience" className="container">
				<h3>Experience.</h3>

				<div className={classes.root}>
					{/* CTS Section */}

					<div id="CTS">
						<div className="org-logo-name-div">
							<img
								src={CTS}
								alt="Cognizant Logo"
								className={classes.orgLogo}
							/>
							<h5 className="org-name">Cognizant</h5>
						</div>

						<div className="step">
							{/* Stepper */}

							<div className="v-stepper">
								<div className="circle"></div>
								<div className="line"></div>
							</div>

							<div className="exp-content">
								{/* CTS FTE Details */}

								<div className="designation-header">
									<Typography className={classes.designation}>
										Programmer Analyst Trainee
									</Typography>
									<Typography className={classes.years}>
										July, 2022 - Present
									</Typography>
								</div>

								<ul className="exp-details">
									<li>
										<Typography className={classes.desc}>
											Joined as a Front-end Developer.
										</Typography>
									</li>
									<li>
										<Typography className={classes.desc}>
											Working on React.js and other
											related technologies
										</Typography>
									</li>
								</ul>
							</div>
						</div>

						<div className="step">
							<div className="v-stepper">
								<div class="circle"></div>
							</div>

							<div className="exp-content">
								{/* CTS Intern Details */}

								<div className="designation-header">
									<Typography className={classes.designation}>
										Intern
									</Typography>
									<Typography className={classes.years}>
										January, 2022 - June, 2022
									</Typography>
								</div>

								<ul className="exp-details">
									<li>
										<Typography className={classes.desc}>
											Trained in technologies like Spring
											Boot for backend and Angular for
											front end.
										</Typography>
									</li>
									<li>
										<Typography className={classes.desc}>
											Developed some projects during this
											period involving the above
											technologies and deployed them in
											AWS.
										</Typography>
									</li>
								</ul>
							</div>
						</div>
					</div>

					{/* HRC Section */}

					<div id="HRC">
						<div className="org-logo-name-div">
							<img
								src={HRC}
								alt="HRC Logo"
								className={classes.orgLogo}
							/>
							<h5 className="org-name">HighRadius</h5>
						</div>

						<div class="step completed">
							<div class="v-stepper">
								<div class="circle"></div>
								<div class="line"></div>
							</div>

							<div class="exp-content">
								<div className="designation-header">
									<Typography className={classes.designation}>
										Software Engineer Intern
									</Typography>
									<Typography className={classes.years}>
										April, 2021 - December, 2021
									</Typography>
								</div>

								<ul className="exp-details">
									<li>
										<Typography className={classes.desc}>
											Developed web application and worked
											on real-time projects using ReactJs
											with Redux.
										</Typography>
									</li>
									<li>
										<Typography className={classes.desc}>
											Ensured coding standards and also
											wrote test cases.
										</Typography>
									</li>
								</ul>
							</div>
						</div>

						<div class="step">
							<div class="v-stepper">
								<div class="circle"></div>
							</div>

							<div class="exp-content">
								<div className="designation-header">
									<Typography className={classes.designation}>
										Software Engineer Intern
									</Typography>
									<Typography className={classes.years}>
										January, 2021 - March, 2021
									</Typography>
								</div>

								<ul className="exp-details">
									<li>
										<Typography className={classes.desc}>
											Developed web application and worked
											on real-time projects using ReactJs
											with Redux.
										</Typography>
									</li>
									<li>
										<Typography className={classes.desc}>
											Ensured coding standards and also
											wrote test cases.
										</Typography>
									</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Startup Section */}

					<div id="Startup">
						<div className="org-logo-name-div">
							<img
								src={Startup}
								alt="Startup Logo"
								className={classes.orgLogo}
							/>
							<h5 className="org-name">StartUp Inc.</h5>
						</div>

						<div class="step completed">
							<div class="v-stepper">
								<div class="circle"></div>
							</div>

							<div class="exp-content">
								<div className="designation-header">
									<Typography className={classes.designation}>
										Frontend Developer Intern
									</Typography>
									<Typography className={classes.years}>
										July, 2020 - August, 2020
									</Typography>
								</div>

								<ul className="exp-details">
									<li>
										<Typography className={classes.desc}>
											Learnt and developed front-end
											websites using technologies like
											HTML, CSS, Bootstrap and JavaScript.
										</Typography>
									</li>
									<li>
										<Typography className={classes.desc}>
											Got a Letter of Recommendation for
											outstanding performance as an
											intern.
										</Typography>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
