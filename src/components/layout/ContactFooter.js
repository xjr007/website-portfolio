import React from 'react';
import { Link } from 'react-router-dom';
import instagramSvg from '../../assets/svg/instagramIcon.svg';
import githubSvg from '../../assets/svg/githubIcon.svg';
import linkedInSvg from '../../assets/svg/linkedInIcon.svg';
import { ROUTES } from '../../GlobalVars';

export const contactFooter = () => {
	return (
		<div>
			<div className='contact-section'>
				<h3>Contact</h3>
				<div className='contact'>
					<div className='social-list'>
						<ul>
							<span>Social</span>
							<li>
								<a
									href='https://www.instagram.com/aaqiel_behardien/'
									target='_blank'
									rel='noopener noreferrer'>
									<img src={instagramSvg} className='instagram' alt='Instgram' />
								</a>
							</li>
							<li>
								<a href='https://www.github.com/xjr007' target='_blank' rel='noopener noreferrer'>
									{' '}
									<img src={githubSvg} className='github' alt='Github' />
								</a>
							</li>
							<li>
								<a
									href='https://www.linkedin.com/in/aaqiel-behardien-53a2aa161/'
									target='_blank'
									rel='noopener noreferrer'>
									<img src={linkedInSvg} className='linkedIn' alt='LinkedIn' />
								</a>
							</li>
						</ul>
					</div>
					<div className='footer-navigation'>
						<ul>
							<span>Explore</span>
							<li>
								<Link to='/website-portfolio/'>Home</Link>
							</li>
							<li>
								<Link to={ROUTES.TESTIMONIALS}>Testimonials</Link>
							</li>
							<li>
								<Link to={ROUTES.PROJECTS}>Projects</Link>
							</li>
							<li>
								<Link to={ROUTES.RESUME}>Resume</Link>
							</li>
							<li>
								<Link to={ROUTES.CONTACT}>Contact Me</Link>
							</li>
						</ul>
					</div>
				</div>
				<p>All rights reserved.</p>
			</div>
		</div>
	);
};

export default contactFooter;
