import ExperienceItem from "./ExperienceItem";
import ExperienceList from "./ExperienceList";

export default function Experience(props) {
	return (
		<div className='experience' id='experience'>
			<h2 className='section-title'>experience</h2>
			<div className="experience-content">
				<ExperienceList/>
				<ExperienceItem/>
			</div>
		</div>
	)
}