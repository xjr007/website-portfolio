import React, { createRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import jsSvg from '../../assets/svg/javascriptIcon.svg';
import reactSvg from '../../assets/svg/reactIcon.svg';
import pySvg from '../../assets/svg/pythonIcon.svg';
import djangoSvg from '../../assets/svg/djangoIcon.svg';
import mySqlSvg from '../../assets/svg/mysqlIcon.svg';
import nodeSvg from '../../assets/svg/nodeIcon.svg';
import { ROUTES } from '../../GlobalVars';
import { gsap } from 'gsap';
import ContactFooter from '../layout/ContactFooter';

const Home = props => {
	const jsRef = createRef();
	const reactRef = createRef();
	const pyRef = createRef();
	const djRef = createRef();
	const sqlRef = createRef();
	const nodeRef = createRef();
	const aboutRef = createRef();
	const testRef = createRef();
	const resRef = createRef();
	const projRef = createRef();
	const conRef = createRef();

	const iconRefs = [jsRef, djRef, reactRef, nodeRef, pyRef, sqlRef];

	const btnRefs = [testRef, projRef, resRef, conRef];

	const tIcon = gsap.timeline({ defaults: { duration: 0.5, overflow: 'hidden' } });
	const tBtn = gsap.timeline({ defaults: { duration: 0.3 } });

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		// iconRefs.map(icon => timeLine.from(icon.current, { x: 500 }).to(icon.current, { x: 0 }));

		iconRefs.map(icon => {
			return tIcon
				.from(icon.current, { x: 500, duration: 0.5 })
				.to(icon.current, { x: 0, duration: 0.5 });
		});

		btnRefs.map(btn => {
			return tBtn.from(btn.current, { opacity: 0 }).to(btn.current, { opacity: 1, duration: 0.5 });
		});

		gsap.from(aboutRef.current, { x: -500 });
		gsap.to(aboutRef.current, { x: 0, duration: 1 });
		// iconRefs.map(icon => timeLine.to(icon.current, { x: 0, rotate: 360, duration: 100 }));
	});

	return (
		<div>
			<div className='header'>
				<div className='heading'>
					<h1>Hi, I am Aaqiel Behardien</h1>
					<p>Junior MERN Stack Developer</p>
					<a href='#about' className='button' type='button'>
						<span>Explore</span>
					</a>
				</div>
			</div>
			<div>
				<div id='about' className='about'>
					<div ref={aboutRef} className='about-heading'>
						<h1>
							<span>About</span>
						</h1>
						<p>
							<span>"</span> In the year of the pandemic (2020), that's when I decided it is time to
							re-shape my life. Join me on my journey and explore. <span>"</span>
						</p>
					</div>
					<div className='navigation'>
						<div className='navigation-link'>
							<Link to={ROUTES.TESTIMONIALS} className='button' ref={testRef}>
								<span>Testimonials</span>
							</Link>
						</div>
						<div className='navigation-link'>
							<Link to={ROUTES.PROJECTS} className='button' ref={projRef}>
								<span>Projects</span>
							</Link>
						</div>
						<div className='navigation-link'>
							<Link to={ROUTES.RESUME} className='button' ref={resRef}>
								<span>Resume</span>
							</Link>
						</div>
						<div className='navigation-link'>
							<Link to={ROUTES.CONTACT} className='button' ref={conRef}>
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
						onMouseEnter={() => gsap.to(reactRef.current, { rotate: 360, duration: 100 })}
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
						onMouseEnter={() => gsap.to(djRef.current, { rotate: 360, duration: 100 })}
					/>
					<img
						ref={nodeRef}
						className='prog-icon'
						src={nodeSvg}
						alt='Node Icon'
						onMouseEnter={() => gsap.to(nodeRef.current, { rotate: 360, duration: 100 })}
					/>
					<img
						ref={sqlRef}
						className='prog-icon'
						src={mySqlSvg}
						alt='mySQL Icon'
						onMouseEnter={() => gsap.to(sqlRef.current, { rotate: 360, duration: 100 })}
					/>
				</div>
			</div>
			<ContactFooter />
		</div>
	);
};

export default Home;
