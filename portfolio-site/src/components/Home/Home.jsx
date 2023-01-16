import "./Home.css";
import Resume from "../../resources/Resume.pdf";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	downloadResume: {
		border: "0.1rem solid rgb(29, 129, 149)",
		color: "rgb(29, 129, 149)",
		margin: "2rem 0 0",
	},
}));

export default function Home() {
	const classes = useStyles();

	return (
		<>
			<div className="container home">
				<h4>Hi, My name is</h4>
				<h1>Bipasha Dutta!</h1>
				<p className="headerText">
					A <span>Front-end Developer.</span>
				</p>

				<a href={Resume} target="_blank">
					<Button
						variant="outlined"
						className={classes.downloadResume}
					>
						Download Resume
					</Button>
				</a>
			</div>
		</>
	);
}
