import profile from '../assets/img/profile.jpg';

export default function About(props) {
	return (
		<div className='about' id='about'>
			<h2 className='section-title'>about me</h2>
			<div className='about-content'>
				<div className='about-desc'>
					<p>
						I am a recent graduate from an immersive Full Stack Web Development program at <span className='emph'>Lighthouse Labs</span>. I also have a background in Kinesiology from the University of Waterloo.
					</p>
					<p>
						I enjoy any sort of <span className='emph'>software development</span> that requires creativity. I love taking on new challenges and am dedicated to building efficient applications and pixel-perfect UI's. In my free time, I train calisthenics and play video games.
					</p>
					<p>
						Here are some technologies I have been working with:
					</p>
					<div className='my-stack'>
						<ul>
							<li className='stack'>Javascript ES6+</li>
							<li className='stack'>React.js</li>
							<li className='stack'>Node.js</li>
						</ul>
						<ul>
							<li className='stack'>Python</li>
							<li className='stack'>Ruby</li>
							<li className='stack'>HTML & CSS</li>
						</ul>
					</div>
				</div>
				<img src={profile} alt='profile' className='profile'/>
			</div>
		</div>
	)
}