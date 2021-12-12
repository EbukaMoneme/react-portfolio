import Home from "./Home";
import About from "./About";
import Experience from "./Experience";

export default function Container() {
	return (
		<div className="container">
			<Home/>
			<About/>
			<Experience/>
		</div>
	)
}