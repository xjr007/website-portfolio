import React from 'react';
import Card from 'react-bootstrap/Card';
const CardLayout = props => {
	return (
		<Card className='m-3 mt-5'>
			<Card.Header className='blockquote mb-0 test-header'>{props.header}</Card.Header>
			<Card.Body className='test-body'>
				<blockquote className='blockquote mb-0'>
					<p> {props.review} </p>
					<footer className='blockquote-footer'>
						{props.title} <br />
						{props.link && (
							<a className='ml-5' href={props.link}>
								Go to
							</a>
						)}
					</footer>
				</blockquote>
			</Card.Body>
		</Card>
	);
};

export default CardLayout;
