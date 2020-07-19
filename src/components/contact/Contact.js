import React, { Fragment, useState } from 'react';
import instagramSvg from '../../assets/svg/instagramIcon.svg';
import githubSvg from '../../assets/svg/githubIcon.svg';
import linkedInSvg from '../../assets/svg/linkedInIcon.svg';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
// import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

const Contact = () => {
	const [status, setStatus] = useState('');
	const onSubmit = e => {
		e.preventDefault();
		const form = e.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				setStatus('SUCCESS');
			} else {
				setStatus('ERROR');
			}
		};
		xhr.send(data);
	};

	return (
		<Fragment>
			<header>Navbar</header>
			<main>
				<Form
					className='form-style'
					onSubmit={onSubmit}
					action='https://formspree.io/mjvapdoq'
					method='POST'>
					<div className='form-heading'>
						<h1>
							<span>Got something to say?</span>
						</h1>
						<p> Feel free to drop me a message below.</p>
					</div>

					{status === 'ERROR' && (
						<p className='submit-err-msg'>Please make sure all fields are filled correctly...</p>
					)}
					{status === 'SUCCESS' && <p className='submit-suc-msg'>Message sent successfully!</p>}
					<Form.Row>
						<Col>
							{' '}
							<Form.Group className='form-style-group form-name'>
								<Form.Label htmlFor='name'>Name</Form.Label>
								<Form.Control id='name' name='name' type='text' />
							</Form.Group>
						</Col>
						<Col>
							<Form.Group className='form-style-group form-email'>
								<Form.Label htmlFor='email'>Email</Form.Label>
								<Form.Control id='email' name='email' type='email' />
							</Form.Group>
						</Col>
					</Form.Row>

					<Form.Group className='form-style-group form-msg'>
						<Form.Label htmlFor='message'>Message</Form.Label>
						<Form.Control id='message' name='message' as='textarea' row='5' />
					</Form.Group>
					{status === 'SUCCESS' ? (
						<p className='submit-suc-msg form-style-group'>Message sent successfully!</p>
					) : (
						<input
							className='form-button'
							type='submit'
							variant='primary'
							rel='noopener noerferrer'
							target='_blank'
							href='#'
							value='Submit'
						/>
					)}
				</Form>
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
								<Link to='/'>Contact Me</Link>
							</li>
						</ul>
					</div>
					<p>All rights reserved.</p>
				</div>
			</footer>
		</Fragment>
	);
};

export default Contact;
