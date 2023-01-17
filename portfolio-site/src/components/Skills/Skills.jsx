import "./Skills.css";
import LinearProgress from "@material-ui/core/LinearProgress";

export default function Skills() {
	return (
		<div id="skills" className="container">
			<h3>Skills.</h3>
			<div>
				<table class="skill">
					<tr>
						<td>HTML</td>
						<LinearProgress variant="determinate" value={50} />
					</tr>
				</table>
			</div>
		</div>
	);
}
