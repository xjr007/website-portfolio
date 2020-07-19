import React, { Fragment, useState } from 'react';
import Form from 'react-bootstrap/Form';
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
					{status === 'ERROR' && (
						<p className='submit-err-msg form-style-group'>
							Please make sure all fields are filled correctly...
						</p>
					)}
					{status === 'SUCCESS' && (
						<p className='submit-suc-msg form-style-group'>Message sent successfully!</p>
					)}
					<Form.Group className='form-style-group'>
						<Form.Label htmlFor='name'>Name</Form.Label>
						<Form.Control id='name' name='name' type='text' />
					</Form.Group>
					<Form.Group className='form-style-group'>
						<Form.Label htmlFor='email'>Email</Form.Label>
						<Form.Control id='email' name='email' type='email' />
					</Form.Group>
					<Form.Group className='form-style-group'>
						<Form.Label htmlFor='message'>Message</Form.Label>
						<Form.Control id='message' name='message' as='textarea' row='10' />
					</Form.Group>
					{status === 'SUCCESS' ? (
						<p className='submit-suc-msg form-style-group'>Message sent successfully!</p>
					) : (
						<input
							className='form-style-button'
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
			<footer>Contact</footer>
		</Fragment>
	);
};

export default Contact;
