import React from 'react';
import profile from '../../assets/img/profile-close-up.jpg';

import ProgressBar from '../layout/progressBar';
const CV = () => {
	return (
		<div className='container resume-layout'>
			<div className='profile-info'>
				<img src={profile} alt='avatar' className='profile-avatar' />

				<div className='resume-skills'>
					<div className='title m-2'>
						<p className='bold d-flex justify-content-center'>Skills</p>
						<p className='regular d-flex justify-content-center'>Experience</p>
					</div>
					<div>
						<span className=' d-flex justify-content-center'>ReactJS</span>
						<ProgressBar bgcolor={'blue'} completed={70} />
					</div>
					<div>
						<span className=' d-flex justify-content-center'>Python</span>
						<ProgressBar bgcolor={'green'} completed={60} />
					</div>
					<div>
						<span className=' d-flex justify-content-center'>JavaScript</span>
						<ProgressBar bgcolor={'orange'} completed={50} />
					</div>
					<div className='resume-about m-2'>
						<div className='title'>
							<p className='bold d-flex justify-content-center'>About Me</p>
						</div>
						<p className='d-flex align-items-center'>
							I am a hard-working, all-rounded individual who is dedicated to delivering his
							best and quick to adapt to any environment. When behind a computer screen, I am
							in my element. Whether working with a team or alone, I aim to propel the
							company forward. <br /> Although passionate about software development, I
							aspire to become a full-stack developer and am willing to broaden my developing
							skills wherever I can.
						</p>
					</div>
					<div className=' resume-more-info m-2'>
						<div className='title'>
							<p className='bold d-flex justify-content-center'>
								How I became passionate about programming
							</p>
						</div>
						<p className='d-flex align-items-center'>
							I first came across programming in grade 10. I had joined the school halfway
							through the third term and had 2 weeks to complete a scratch project that had a
							weight of 75% of my assessment mark. Although faced with many challenges and
							barely passing, I found that I was quick to pick up on coding and later started
							coding in Delphi. I then became familiar with databases using Microsoft Access
							with Delphi and since then my passion for development has grown even stronger.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CV;
