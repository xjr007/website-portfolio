import React, { createRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import instagramSvg from '../../assets/svg/instagramIcon.svg';
import githubSvg from '../../assets/svg/githubIcon.svg';
import linkedInSvg from '../../assets/svg/linkedInIcon.svg';
import jsSvg from '../../assets/svg/javascriptIcon.svg';
import reactSvg from '../../assets/svg/reactIcon.svg';
import pySvg from '../../assets/svg/pythonIcon.svg';
import djangoSvg from '../../assets/svg/djangoIcon.svg';
import mySqlSvg from '../../assets/svg/mysqlIcon.svg';
import { CONTACT } from '../../Routes';
import { gsap } from 'gsap';

const Home = props => {
	const jsRef = createRef();
	const reactRef = createRef();
	const pyRef = createRef();
	const djRef = createRef();
	const sqlRef = createRef();

	const iconRefs = [jsRef, reactRef, pyRef, djRef, sqlRef];

	const timeLine = gsap.timeline({ defaults: { duration: 0.7 } });

	useEffect(() => {
		iconRefs.map(icon => timeLine.from(icon.current, { x: 1000 }));
		// iconRefs.map(icon => timeLine.to(icon.current, { x: 0, rotate: 360, duration: 100 }));
	});

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
							Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Sequi libero ab, commodi
							veritatis perferendis excepturi eius temporibus voluptatum. <br /> Iusto, quaerat?
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
							<Link to={CONTACT} className='button'>
								<span>Contact Me</span>
							</Link>
						</div>
					</div>
				</div>
				<div className='language-icons'>
					<img
						ref={jsRef}
						className='prog-icon'
						src={jsSvg}
						alt='JS Icon'
						onMouseEnter={() => gsap.to(jsRef.current, { rotate: 360, duration: 100 })}
					/>
					<img
						ref={reactRef}
						className='prog-icon'
						src={reactSvg}
						alt='React Icon'
						onMouseEnter={() => gsap.from(reactRef.current, { rotate: 360, duration: 100 })}
					/>
					<img
						ref={pyRef}
						className='prog-icon'
						src={pySvg}
						alt='Python Icon'
						onMouseEnter={() => gsap.to(pyRef.current, { rotate: 360, duration: 100 })}
					/>
					<img
						ref={djRef}
						className='prog-icon'
						src={djangoSvg}
						alt='Django Icon'
						onMouseEnter={() => gsap.from(djRef.current, { rotate: 360, duration: 100 })}
					/>
					<img
						ref={sqlRef}
						className='prog-icon'
						src={mySqlSvg}
						alt='mySQL Icon'
						onMouseEnter={() => gsap.from(sqlRef.current, { rotate: 360, duration: 100 })}
					/>
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
								<Link to='/'>Testimonials</Link>
							</li>
							<li>
								<Link to='/'>Projects</Link>
							</li>
							<li>
								<Link to='/'>Resume</Link>
							</li>
							<li>
								<Link to={CONTACT}>Contact Me</Link>
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
