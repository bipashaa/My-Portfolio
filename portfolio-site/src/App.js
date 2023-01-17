import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";

function App() {
	return (
		<>
			<Navbar />
			<Home />
			<About />
			<Experience />
			<Skills />
		</>
	);
}

export default App;
