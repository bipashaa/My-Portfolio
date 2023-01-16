import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";

function App() {
	return (
		<>
			<Navbar />
			<Home />
			<About />
			<Experience />
		</>
	);
}

export default App;
