export default function LightSwitch(props) {

	return (
		<div onClick={props.toggle} className="switch">
			{props.currentTheme === 'dark'?
			<i className="far fa-sun"></i>:
			<i className="far fa-moon"></i>}
		</div>
	)
}