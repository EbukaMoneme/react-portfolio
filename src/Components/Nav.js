import LightSwitch from "./Buttons/LightSwitch"

export default function Nav() {
	return (
		<div className="nav">
			<a href="#home">/home</a>
			<a href="#about">/about</a>
			<a href="#experience">/experience</a>
			<a href="#">/projects</a>
			<div className="socials">
				<LightSwitch/>
				<a href="mailto:camoneme@gmail.com">
					<i class="fas fa-envelope"></i>
				</a>
				<a href="https://github.com/EbukaMoneme">
					<i class="fab fa-github"></i>
				</a>
				<a href="https://www.linkedin.com/in/ebukamoneme/">
					<i class="fab fa-linkedin"></i>
				</a>
			</div>
		</div>
	)
}