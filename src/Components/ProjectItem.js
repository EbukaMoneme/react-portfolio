export default function ProjectItem(props) {
	return (
		<div className="project-item card">
			<div className="project-banner">
				<i className="far fa-folder work"></i>
				<div className="project-controls">
					<a href={props.github}>
						<i className="fab fa-github github"></i>
					</a>
					{
						props.live && 
						<a href={props.live}>
							<i class="fas fa-external-link-alt live-link"></i>
						</a>
					}
				</div>
			</div>
			<h2>{props.title}</h2>
			<p className="desc">{props.desc}</p>
			<p>{props.stack}</p>
		</div>
	)
}