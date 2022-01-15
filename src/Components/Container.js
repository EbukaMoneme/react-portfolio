import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";

export default function Container() {
	return (
		<div className="container">
			<Home/>
			<About/>
			<Experience/>
			<Projects/>
			<div className="footer">
				<p>Built by Ebuka Moneme</p>
				<p>Inspired by Gazi Jarin</p>
				<p>All right reserved.© </p>
			</div>
		</div>
	)
}