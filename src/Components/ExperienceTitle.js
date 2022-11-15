export default function ExperienceTitle({workplace, setExperienceIndex, experience, index, experienceIndex}) {
	return (
			<div 
				className={`experience-option ${index === experienceIndex? "selected" : ""}`} 
				onClick={()=> setExperienceIndex(index)}
			>{workplace}</div>
	)
}