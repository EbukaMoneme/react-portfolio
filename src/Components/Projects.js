import ProjectItem from "./ProjectItem"

const projects = [
	{
		title: 'MaintenancePro',
		github: 'https://github.com/EbukaMoneme/MaintenancePro',
		live: 'https://maintenancepro.netlify.app/',
		desc: 'A computerized maintenance management system that allows property and maintenance managers to work more efficiently.',
		stack: 'MongoDb, React, Socket.io'
	},
	{
		title: 'Bubbles',
		github: 'https://github.com/EbukaMoneme/Bubbles-A-food-ordering-app',
		live: '',
		desc: 'Food delivery service application where customers can purchase bubble tea and receive confirmation via an sms API.',
		stack: 'Express, Twilio API, PSQL'
	},
	{
		title: 'Scheduler',
		github: 'https://github.com/EbukaMoneme/scheduler',
		live: '',
		desc: 'A React application helping students stay on track by creating meetings to connect with mentors in real-time.',
		stack: 'React, Axios, Storybook'
	},
	{
		title: 'Jungle',
		github: 'https://github.com/EbukaMoneme/jungle-rails',
		live: '',
		desc: 'Full stack E-commerce application built on Ruby-on-Rails. Stripe integration allows for purchases.',
		stack: 'Ruby, Rails, PSQL, Stripe'
	},
	{
		title: 'Tweeter',
		github: 'https://github.com/EbukaMoneme/tweeter',
		live: '',
		desc: 'Single-page Twitter clone where users can post tweets.',
		stack: 'HTML, CSS, JS, jQuery, AJAX'
	},
	{
		title: 'TinyApp',
		github: 'https://github.com/EbukaMoneme/tinyapp',
		live: '',
		desc: 'A full-stack web application built with Node and Express that allows users to shorten long URLs.',
		stack: 'Node.js, Express, EJS, bcrypt'
	}
]
const parsedProjects = projects.map((project, index) => <ProjectItem {...project} key={index} />)

export default function Projects(props) {
	return (
		<div className="projects" id="projects">
			<h2 className='section-title'>projects</h2>
			<div className="projects-content">
				{parsedProjects}
			</div>
		</div>
	)
}