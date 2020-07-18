import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import instagramSvg from '../../assets/svg/instagramIcon.svg';
import githubSvg from '../../assets/svg/githubIcon.svg';
import linkedInSvg from '../../assets/svg/linkedInIcon.svg';

const Home = props => {
	return (
		<div>
			<header>
				<div className='heading'>
					<h1>Aaqiel Behardien</h1>
					<p>Junior Web Developer</p>
					<a href='#about' className='button' type='button'>
						<span>Explore</span>
					</a>
				</div>
			</header>
			<main>
				<div id='about' className='about'>
					<div className='about-heading'>
						<h2>About</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi libero ab, commodi veritatis
							perferendis excepturi eius temporibus voluptatum. Iusto, quaerat?
						</p>
					</div>
					<div className='navigation'>
						<div className='navigation-link'>
							<Link to='/testimonials' className='button'>
								<span>Testimonials</span>
							</Link>
						</div>
						<div className='navigation-link'>
							<Link to='/projects' className='button'>
								<span>Projects</span>
							</Link>
						</div>
						<div className='navigation-link'>
							<Link to='/resume' className='button'>
								<span>Resume</span>
							</Link>
						</div>
						<div className='navigation-link'>
							<Link to='/contact-me' className='button'>
								<span>Contact Me</span>
							</Link>
						</div>
					</div>
				</div>
			</main>
			<footer>
				<div className='contact'>
					<h3>Contact</h3>
					<div className='social-list'>
						<ul>
							<span>Social media</span>
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
								<a href='/'>Testimonials</a>
							</li>
							<li>
								<a href='/'>Projects</a>
							</li>
							<li>
								<a href='/'>Resume</a>
							</li>
							<li>
								<a href='/'>Contact Me</a>
							</li>
						</ul>
					</div>
					<p>All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
};

export default Home;
