import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Cards } from './LocalComponents';
import newImage1 from '../../assets/newImage1.png';

const LandingPage = ({ size }) => {
	return (
		<>
			<Container style={{ marginTop: '50px' }} className='p-4'>
				<h3 className='my-3'>Artikel Terbaru</h3>
				<div>
					<section className='w-100'>
						<section className={size.width <= 765 ? '' : 'd-flex'}>
							<img
								className={size.width <= 765 ? 'd-block w-75 p-3' : 'd-block p-3'}
								src={newImage1}
								alt='First slide'
								style={{ width: '60%' }}
							/>
							<section className='p-3'>
								<h4>
									Virtual.co.id Jadi Startup Pertama yang Melantai di Kancah
									Internasional
								</h4>
								<span className='badge bg-danger'>Berita</span>
								<span className='mx-2'>4 Agustus 2021</span>
								<p className='mt-4 fw-lighter fs-6 text'>
									Lorem Ipsum is simply dummy text of the printing and typesetting
									industry. Lorem Ipsum has been the industry's standard dummy
									text ever since the 1500s, when an unknown printer took a galley
									of type and scrambled it to make a type specimen when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen.
								</p>
							</section>
						</section>
					</section>
				</div>
			</Container>

			<section className='mt-3 py-3' style={{ backgroundColor: '#f5f5f5' }}>
				<Container>
					<h3>Featured Article</h3>

					<section
						className='d-flex justify-content-evenly flex-wrap'
						style={{ borderTop: '3px solid black' }}
					>
						<Cards />
						<Cards />
						<Cards />
						<Cards />
					</section>
				</Container>
			</section>

			<section className='mt-3 py-3'>
				<Container>
					<h3>Featured Video</h3>

					<div className='d-flex justify-content-center align-items-center mt-3'>
						<video height='400' className='w-75' controls>
							<source src='movie.mp4' type='video/mp4' />
							<source src='movie.ogg' type='video/ogg' />
							Your browser does not support the video tag.
						</video>
					</div>
				</Container>
			</section>

			<section className='mt-3 py-3' style={{ backgroundColor: '#f5f5f5' }}>
				<Container>
					<h3>Latest Article</h3>

					<section
						className='d-flex justify-content-evenly flex-wrap'
						style={{ borderTop: '3px solid black' }}
					>
						<Cards />
						<Cards />
						<Cards />
						<Cards />
					</section>

					<section className='d-flex justify-content-center my-3'>
						<Button variant='primary' className='text-center'>
							Load more ...
						</Button>{' '}
					</section>
				</Container>
			</section>

			<footer className='py-3' style={{ backgroundColor: '#666666', color: '#fff' }}>
				<Container className='d-flex justify-content-between'>
					<h1 className='d-flex align-items-center justify-content-center'>
						Virtual.co.id
					</h1>
					<div className='d-flex justify-content-evenly w-50'>
						<div className='info'>
							<h4>Contact Us</h4>
							<p>
								<i className='fa fa-phone'></i>
								<span className='mx-2'>1234567890</span>
							</p>
							<p>
								<i className='fa fa-envelope'></i>
								<span className='mx-2'>info@otakkanan.com</span>
							</p>
							<p>
								<i className='fa fa-building'></i>
								<span className='mx-2'>Graha Pena Lantai 15</span>
							</p>
							<p>Jl. Ahmad Yani No. 58</p>
							<p>Surabaya , Jawa Timur 60231</p>
						</div>
						<div className='social-media'>
							<h4>Follow Us</h4>
							<span>
								<i
									style={{ fontSize: '20px', marginRight: '20px' }}
									className='fa fa-facebook'
								></i>
							</span>
							<span>
								<i
									style={{ fontSize: '20px', marginRight: '20px' }}
									className='fa fa-instagram'
								></i>
							</span>
							<span>
								<i
									style={{ fontSize: '20px', marginRight: '20px' }}
									className='fa fa-twitter'
								></i>
							</span>
						</div>
					</div>
				</Container>
			</footer>
		</>
	);
};

export default LandingPage;
