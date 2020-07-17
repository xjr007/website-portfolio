import React from 'react';
import './Home.css';

const Home = props => {
	return (
		<div>
			<header>
				<div className='heading'>
					<h1>Aaqiel Behardien</h1>
					<p>Junior Web Developer</p>
					<button className='button' type='button'>
						<span>Explore</span>
					</button>
				</div>
			</header>
			<main>
				<div className='about'>
					<h2>About</h2>{' '}
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi libero ab, commodi veritatis
						perferendis excepturi eius temporibus voluptatum. Iusto, quaerat?
					</p>
					<div className='navigation'>
						<ul className='cards'>
							<li>
								<div className='card'>
									<a href='/' type='button' className='button'>
										Resume
									</a>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quos ducimus, facilis alias
										quisquam voluptatibus?
									</p>
								</div>
								<div className='card'>
									<a href='/' type='button' className='button'>
										Testimonials
									</a>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quos ducimus, facilis alias
										quisquam voluptatibus?
									</p>
								</div>
								<div className='card'>
									<a href='/' type='button' className='button'>
										Projects
									</a>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quos ducimus, facilis alias
										quisquam voluptatibus?
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</main>
			<footer>
				<h1>Footer</h1>
			</footer>
		</div>
	);
};

export default Home;
