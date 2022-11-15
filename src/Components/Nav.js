import LightSwitch from "./Buttons/LightSwitch"

export default function Nav(props) {
	return (
		<div className="nav">
			<div className="links">
				<a href="#home">/home</a>
				<a href="#about">/about</a>
				<a href="#experience">/experience</a>
				<a href="#projects">/projects</a>
			</div>
			<div className="socials">
				<LightSwitch toggle={props.toggle} currentTheme={props.currentTheme}/>
				<a href="mailto:camoneme@gmail.com">
					<i className="fas fa-envelope"></i>
				</a>
				<a href="https://github.com/EbukaMoneme" target="_blank" rel="noreferrer">
					<i className="fab fa-github"></i>
				</a>
				<a href="https://www.linkedin.com/in/ebukamoneme/" target="_blank" rel="noreferrer">
					<i className="fab fa-linkedin"></i>
				</a>
			</div>
		</div>
	)
}