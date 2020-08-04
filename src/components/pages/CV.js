import React from 'react';
import profile from '../../assets/img/profile-close-up.jpg';

import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ProgressBar from '../layout/progressBar';
const CV = () => {
	return (
		<div className='container'>
			<div className='resume-layout'>
				<div className='profile-info'>
					<img src={profile} alt='avatar' className='profile-avatar' />
					<div className='skills'>
						<div className='resume-info'>
							<div className='title'>
								<p className='bold'>Aaqiel Behardien</p>
								<p className='regular'>Junior</p>
							</div>
							<ul className='d-flex flex-column'>
								<li className='d-flex flex-row'>
									<div className='icon'>
										<RoomIcon className='icon-obj' />
									</div>

									<div className='data ml-2'>
										48 Derby Road, Lansdowne <br /> SA
									</div>
								</li>
								<li className='d-flex flex-row'>
									<div className='icon'>
										<PhoneIcon className='icon-obj' />
									</div>

									<div className='data ml-2'>081 564 3390</div>
								</li>
								<li className='d-flex flex-row'>
									<div className='icon'>
										<MailOutlineIcon className='icon-obj' />
									</div>

									<div className='data ml-2'>
										<p>
											abaaqielbehardien@
											<br />
											gmail.com
										</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className='resume-skills'>
						<div className='title'>
							<p className='bold'>Skills</p>
							<p className='regular'>Experience</p>
						</div>
						<div>
							ReactJS
							<ProgressBar bgcolor={'blue'} completed={70} />
						</div>
						<div>
							Python
							<ProgressBar bgcolor={'green'} completed={60} />
						</div>
						<div>
							JavaScript
							<ProgressBar bgcolor={'orange'} completed={50} />
						</div>
						<div className='resume-about'>
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
						<div className='resume-item resume-more-info'>
							<div className='title'>
								<p className='bold'>How I became passionate about programming</p>
							</div>
							<p>
								I first came across programming in grade 10. I had joined the school halfway through the
								third term and had 2 weeks to complete a scratch project that had a weight of 75% of my
								assessment mark. Although faced with many challenges and barely passing, I found that I was
								quick to pick up on coding and later started coding in Delphi. I then became familiar with
								databases using Microsoft Access with Delphi and since then my passion for development has
								grown even stronger.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CV;
