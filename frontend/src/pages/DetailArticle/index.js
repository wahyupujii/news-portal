import React from 'react';
import { Container } from 'react-bootstrap';
import { Header, Post, Comments } from './LocalComponents';

const DetailArticle = ({ size }) => {
	return (
		<>
			<Container style={{ marginTop: '90px' }}>
				<Header size={size} />

				<main className='m-auto text-left lh-lg py-4' style={{ maxWidth: '800px' }}>
					{/* Blog Post area */}
					<Post />

					{/* tags */}
					<section className='my-4 flex align-items-center'>
						<span class='badge bg-info text-light fst-italic mx-2 py-2'>
							virtual.co.id
						</span>
					</section>

					<hr className='my-4' />

					{/* Comments Area */}
					<Comments />

					<hr className='my-4' />
				</main>
			</Container>

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

export default DetailArticle;
