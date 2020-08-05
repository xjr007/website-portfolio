import React, { useEffect } from 'react';
import profile from '../../assets/img/profile-close-up.jpg';
import { PieChart } from 'react-minimal-pie-chart';

const CV = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className='container resume-layout'>
			<div className='d-flex justify-content-center align-items-center flex-column'>
				<img src={profile} alt='avatar' className='profile-avatar' />
				<h3>Aaqiel Behardien</h3>
			</div>

			<div className='resume-skills'>
				<div className='title m-2'>
					<p className='bold d-flex justify-content-center'>Skills</p>
				</div>
				<div className='pie-skill d-flex flex-column '>
					<div className='row pie'>
						<span className='col pie mt-4'>Python</span>

						<PieChart
							className='col pie'
							animate={true}
							lineWidth={70}
							paddingAngle={1}
							viewBoxSize={1}
							data={[
								{ title: 'Python', value: 60, color: '#343a40' },
								{ title: '', value: 30, color: 'lightgrey' },
							]}
						/>
					</div>
					<div className='row pie'>
						<span className='col pie mt-4'>ReactJS</span>

						<PieChart
							className='col pie'
							animate={true}
							lineWidth={70}
							paddingAngle={1}
							viewBoxSize={1}
							data={[
								{ title: 'ReactJS', value: 70, color: '#343a40' },
								{ title: '', value: 30, color: 'lightgrey' },
							]}
						/>
					</div>
					<div className='row pie d-flex justify-content-center '>
						<span className='col pie mt-4'>JS</span>

						<PieChart
							className='col pie'
							animate={true}
							lineWidth={70}
							paddingAngle={1}
							viewBoxSize={1}
							data={[
								{ title: 'JS', value: 40, color: '#343a40' },
								{ title: '', value: 60, color: 'lightgrey' },
							]}
						/>
					</div>
				</div>
				<div className='resume-about m-2'>
					<div className='title'>
						<p className='bold d-flex justify-content-center'>About Me</p>
					</div>
					<p className='d-flex align-items-center'>
						I am a hard-working, all-rounded individual who is dedicated to delivering his best and quick
						to adapt to any environment. When behind a computer screen, I am in my element.{' '}
					</p>
					<p>
						Whether working with a team or alone, I aim to propel the company forward. While passionate
						about full-stack development, I am willing to broaden my developing skills wherever I can.
					</p>
				</div>
				<div className=' passion-info m-2'>
					<div className='title'>
						<p className='bold d-flex justify-content-center'>
							How I became passionate about programming
						</p>
					</div>
					<p className='d-flex align-items-center'>
						I first came across programming in grade 10. I had joined the school halfway through the third
						term and had 2 weeks to complete a scratch project that had a weight of 75% of my assessment
						mark.
					</p>
					<p>
						Although faced with many challenges and barely passing, the project was a success. I found
						that I was quick to pick up on coding and later started coding in Delphi. I then became
						familiar with databases using Microsoft Access with Delphi and since then my passion for
						software development has grown even stronger.
					</p>
				</div>
				<div className='more-info'>
					<div className=' resume-work'>
						<div className='title'>
							<p className='bold'>Work Experience</p>
						</div>
						<ul>
							<li>
								<p className='semi-bold'>Sameer’s Catering</p>
								<div className='date'>Seasonal 2017</div>
								<div className='info'>
									<p>
										Role: Waiter <br />
										Duties: Serving food to guests
									</p>
								</div>
							</li>
							<li>
								<p className='semi-bold'>RSI Construction</p>
								<div className='date'>Seasonal 2018, 2019, 2020</div>
								<div className='info'>
									<p>
										Duties: <br /> Assisting with plumbing and demolition <br />
										Collected / checked / tracked inventory <br /> Driving to job sites <br /> Collection of
										heavy machinery and building equipment <br /> Manual labour
									</p>
								</div>
							</li>
						</ul>
					</div>

					<div className=' resume-education'>
						<div className='title'>
							<p className='bold'>Education</p>
						</div>
						<ul>
							<li>
								<p className='semi-bold'>Salesian Life Choices Academy</p>
								<div className='date'>2020</div>
								<div className='info'>
									<p>HTML5, MERN Stack, Python, mySQL</p>
									<p>
										Period: 6 months <br />
										Completed: Learnership
									</p>
								</div>
							</li>
							<li>
								<p className='semi-bold'>Islamic Studies</p>
								<div className='date'>2019</div>
								<div className='info'>
									<p>
										Period: For 1 year <br />
										Course: Memorize holy book (Quraan)
										<br />
										Completed: No
									</p>
								</div>
							</li>
							<li>
								<p className='semi-bold'>University of the Western Cape</p>
								<div className='date'>2018</div>
								<div className='info'>
									<p>
										Period: For 1 year <br />
										Course: B.Com General <br />
										Completed: No
									</p>
								</div>
							</li>
							<li>
								<p className='semi-bold'>Cape Academy of Maths, Science and Technology</p>
								<div className='date'>2017</div>
								<div className='info'>
									<p>NSC Certificate</p>
								</div>
							</li>
							<br />
							<br />
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CV;
