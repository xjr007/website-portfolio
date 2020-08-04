import React, { Fragment } from 'react';
import profile from '../../assets/img/profile-close-up.jpg';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import TerrainIcon from '@material-ui/icons/Terrain';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import Navbar from '../layout/Navbar';
import ContactFooter from '../layout/ContactFooter';

const Resume = () => {
	return (
		<Fragment className='container'>
			<Navbar />
			<div className='resume-layout'>
				<div className='resume container'>
					<div className='resume-left'>
						<div className='resume-profile'>
							<img
								src={profile}
								alt='avatar'
								style={{
									fontSize: '150px',
									position: 'relative',
									width: '250px',
									height: '250px',
									left: '5%',
									top: '20%',
									color: 'white',
								}}
							/>
						</div>
						<div className='resume-content'>
							<div className='resume-item resume-info'>
								<div className='title'>
									<p className='bold'>Aaqiel Behardien</p>
									<p className='regular'>Junior</p>
								</div>
								<ul>
									<li>
										<div className='icon'>
											<RoomIcon className='icon-obj' />
										</div>

										<div className='data'>
											48 Derby Road, Lansdowne <br /> SA
										</div>
									</li>
									<li>
										<div className='icon'>
											<PhoneIcon className='icon-obj' />
										</div>

										<div className='data'>081 564 3390</div>
									</li>
									<li>
										<div className='icon'>
											<MailOutlineIcon className='icon-obj' />
										</div>

										<div className='data'>
											<p>
												abaaqielbehardien@
												<br />
												gmail.com
											</p>
										</div>
									</li>
								</ul>
							</div>
							<div className='resume-item resume-skills'>
								<div className='title'>
									<p className='bold'>Skills</p>
									<p className='regular'>Experience</p>
								</div>
								<ul>
									<li>
										<div className='skill-name'>Python</div>
										<div className='skill-progress'>
											<span style={{ width: '70%' }}></span>
										</div>
										<div className='skill-per'>60%</div>
									</li>

									<li>
										<div className='skill-name'>HTML</div>
										<div className='skill-progress'>
											<span style={{ width: '70%' }}></span>
										</div>
										<div className='skill-per'>60%</div>
									</li>
									<li>
										<div className='skill-name'>React</div>
										<div className='skill-progress'>
											<span style={{ width: '60%' }}></span>
										</div>
										<div className='skill-per'>50%</div>
									</li>
									<li>
										<div className='skill-name'>CSS</div>
										<div className='skill-progress'>
											<span style={{ width: '60%' }}></span>
										</div>
										<div className='skill-per'>50%</div>
									</li>
									<li>
										<div className='skill-name'>JS</div>
										<div className='skill-progress'>
											<span style={{ width: '50%' }}></span>
										</div>
										<div className='skill-per'>50%</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='resume-right'>
						<div className='resume-item resume-about'>
							<div className='title'>
								<p className='bold'>About Me</p>
							</div>
							<p>
								I am a hard-working, all-rounded individual who is dedicated to delivering his best and
								quick to adapt to any environment. When behind a computer screen, I am in my element.
								Whether working with a team or alone, I aim to propel the company forward. <br /> Although
								passionate about software development, I aspire to become a full-stack developer and am
								willing to broaden my developing skills wherever I can.
							</p>
						</div>

						<div className='resume-item resume-work'>
							<div className='title'>
								<p className='bold'>Work Experience</p>
							</div>
							<ul>
								<li>
									<div className='date'>Seasonal 2017</div>
									<div className='info'>
										<p className='semi-bold'>Sameer’s Catering</p>
										<p>
											Role: Waiter <br />
											Duties: Serving food to guests
										</p>
									</div>
								</li>
								<li>
									<div className='date'>Seasonal 2018, 2019, 2020</div>
									<div className='info'>
										<p className='semi-bold'>RSI Construction</p>
										<p>
											Duties: <br /> ● Assisting with plumbing and demolition <br />● Collected / checked /
											tracked inventory <br />● Driving to job sites <br />● Collection of heavy machinery and
											building equipment <br />● Manual labour
										</p>
									</div>
								</li>
							</ul>
						</div>
						<div className='resume-item resume-education'>
							<div className='title'>
								<p className='bold'>Education</p>
							</div>
							<ul>
								<li>
									<div className='date'>2020</div>
									<div className='info'>
										<p className='semi-bold'>Salesian Life Choices Academy</p>
										<p>HTML5, MERN Stack, Python, mySQL</p>
									</div>
								</li>
								<li>
									<div className='date'>2019</div>
									<div className='info'>
										<p className='semi-bold'>Islamic Studies</p>
										<p>
											Period: For 1 year <br />
											Course: Memorize holy book (Quraan)
											<br />
											Completed: No
										</p>
									</div>
								</li>
								<li>
									<div className='date'>2018</div>
									<div className='info'>
										<p className='semi-bold'>University of the Western Cape</p>
										<p>
											Period: For 1 year <br />
											Course: B.Com General <br />
											Completed: No
										</p>
									</div>
								</li>
								<li>
									<div className='date'>2017</div>
									<div className='info'>
										<p className='semi-bold'>Cape Academy of Maths, Science and Technology</p>
										<p>NSC Certificate</p>
									</div>
								</li>
								<br />
								<br />
							</ul>
						</div>
						<div className='resume-item resume-hobby'>
							<div className='title'>
								<p className='bold'>hobby</p>
							</div>
							<ul>
								<li>
									<MenuBookIcon
										style={{
											fontSize: '35px',
											position: 'absolute',
											transform: 'translate(-50%, -50%)',
											top: '50%',
											left: '50%',
										}}
									/>
								</li>
								<li>
									<FitnessCenterIcon
										style={{
											fontSize: '35px',
											position: 'absolute',
											transform: 'translate(-50%, -50%)',
											top: '50%',
											left: '50%',
										}}
									/>
								</li>
								<li>
									<TerrainIcon
										style={{
											fontSize: '35px',
											position: 'absolute',
											transform: 'translate(-50%, -50%)',
											top: '50%',
											left: '50%',
										}}
									/>
								</li>
								<li>
									<SportsEsportsIcon
										style={{
											fontSize: '35px',
											position: 'absolute',
											transform: 'translate(-50%, -50%)',
											top: '50%',
											left: '50%',
										}}
									/>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<ContactFooter />
			</div>
		</Fragment>
	);
};

export default Resume;
