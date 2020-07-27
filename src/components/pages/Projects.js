import React, { useEffect } from 'react';
import Card from '../layout/CardLayout';
import { PROJECT_LINK } from '../../GlobalVars';
import ContactFooter from '../layout/ContactFooter';
import keeperIMG from '../../assets/img/contactkeeper.jpg';
import gitIMG from '../../assets/img/githubfinder.jpg';
import lcIMG from '../../assets/img/lconline.jpg';
const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<h1>Projects</h1>
			<div className='projects container-fluid d-flex justify-content-center'>
				<Card
					header='MERN Stack'
					review='Full CRUD contact keeper application.'
					title='Contact Keeper'
					link={PROJECT_LINK.CONTACT_KEEPER}
				/>
				<Card
					header='React | API'
					review='React state handling with usage of Github API.'
					title='Github Finder'
					link={PROJECT_LINK.GITHUB_FINDER}
				/>
				<Card
					header='Python | mySQL'
					review='Database management - log in/out system for employees.'
					title='LC Online'
					link={PROJECT_LINK.LC_ONLINE}
				/>
				{/* <Project imgsrc={keeperIMG} title='Contact Keeper' link={PROJECT_LINK.CONTACT_KEEPER} />
			<Project imgsrc={gitIMG} title='Github Finder' link={PROJECT_LINK.GITHUB_FINDER} />
			<Project imgsrc={lcIMG} title='LC Online' link={PROJECT_LINK.LC_ONLINE} /> */}
			</div>
			<ContactFooter />
		</div>
	);
};

export default Projects;
