import LightSwitch from "./Buttons/LightSwitch"

export default function Nav() {
	return (
		<div className="nav">
			<a href="#home">/home</a>
			<a href="#about">/about</a>
			<a href="#experience">/experience</a>
			<a href="#projects">/projects</a>
			<div className="socials">
				<LightSwitch/>
				<a href="mailto:camoneme@gmail.com">
					<i className="fas fa-envelope"></i>
				</a>
				<a href="https://github.com/EbukaMoneme">
					<i className="fab fa-github"></i>
				</a>
				<a href="https://www.linkedin.com/in/ebukamoneme/">
					<i className="fab fa-linkedin"></i>
				</a>
			</div>
		</div>
	)
}