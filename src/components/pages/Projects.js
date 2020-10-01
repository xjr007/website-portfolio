import React, { useEffect } from 'react';
import { PROJECT_LINK } from '../../GlobalVars';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<div className='project-head'>
				<h1>Projects</h1>
				<h5>Explore some of my recent applications.</h5>
			</div>
			<CardGroup className='project-page pt-4 pb-2'>
				<Card className='card-style projects shadow-lg p-3 mb-5 bg-white rounded'>
					<Card.Body>
						<Card.Title className='card-titled'>
							MERN Stack E-Commerce
						</Card.Title>
						<Card.Subtitle className='mb-2 text-muted'>
							Buy&Dash
						</Card.Subtitle>
						<Card.Text>E-commerce web-application with Redux.</Card.Text>
						<Card.Link
							target='_blank'
							rel='noopener noreferrer'
							href={PROJECT_LINK.BUY_AND_DASH}
						>
							<span className='link-card'>View website</span>
						</Card.Link>
						<Card.Link
							target='_blank'
							rel='noopener noreferrer'
							href='https://github.com/xjr007/grocery-delivery'
						>
							<span className='link-card'>Go to github</span>
						</Card.Link>
					</Card.Body>
				</Card>
				<Card className='card-style projects shadow-lg p-3 mb-5 bg-white rounded'>
					<Card.Body>
						<Card.Title className='card-titled'>MERN Stack</Card.Title>
						<Card.Subtitle className='mb-2 text-muted'>
							Contact Keeper
						</Card.Subtitle>
						<Card.Text>Full CRUD contact keeper application.</Card.Text>
						<Card.Link
							target='_blank'
							rel='noopener noreferrer'
							href={PROJECT_LINK.CONTACT_KEEPER}
						>
							<span className='link-card'>View website</span>
						</Card.Link>
						<Card.Link
							target='_blank'
							rel='noopener noreferrer'
							href='https://github.com/xjr007/contact-keeper'
						>
							<span className='link-card'>Go to github</span>
						</Card.Link>
					</Card.Body>
				</Card>
				<Card className='card-style projects shadow-lg p-3 mb-5 bg-white rounded'>
					<Card.Body>
						<Card.Title className='card-titled'>React | API</Card.Title>
						<Card.Subtitle className='mb-2 text-muted'>
							Github Finder
						</Card.Subtitle>
						<Card.Text>
							React state handling with usage of Github API.
						</Card.Text>
						<Card.Link
							target='_blank'
							rel='noopener noreferrer'
							href={PROJECT_LINK.GITHUB_FINDER}
						>
							<span className='link-card'>View website</span>
						</Card.Link>
						<Card.Link
							target='_blank'
							rel='noopener noreferrer'
							href='https://github.com/xjr007/github-finder-app'
						>
							<span className='link-card'>Go to github</span>
						</Card.Link>
					</Card.Body>
				</Card>
				<Card className='card-style projects shadow-lg p-3 mb-5 bg-white rounded'>
					<Card.Body>
						<Card.Title className='card-titled'>
							Python | mySQL
						</Card.Title>
						<Card.Subtitle className='mb-2 text-muted'>
							LC Online
						</Card.Subtitle>
						<Card.Text>Log in/out system for employees.</Card.Text>
						<Card.Link
							target='_blank'
							rel='noopener noreferrer'
							href='https://github.com/xjr007/Python-projects'
						>
							<span className='link-card'>View code here</span>
						</Card.Link>
					</Card.Body>
				</Card>
			</CardGroup>
		</div>
	);
};

export default Projects;
