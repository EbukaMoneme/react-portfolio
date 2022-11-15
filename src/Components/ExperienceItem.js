export default function ExperienceItem({position, workplace, date, description}) {
	return (
		<div className="experience-item">
			<h2 className="job-title">{position} @ <span className="emph">{workplace}</span></h2>
			<p className="date">{date}</p>
			<div className="job-desc">
				{description.map(point => <p>{point}</p>)}
			</div>
		</div>
	)
}