import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";

export default function Container(props) {
	return (
		<div className="container">
			<Home/>
			<About/>
			<Experience/>
			<Projects/>
			<Footer/>
		</div>
	)
}