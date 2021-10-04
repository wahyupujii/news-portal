import React from 'react'
import {Form , FormControl , Button} from "react-bootstrap";

const FooterLink = () => {
    return (
        <>
            <footer
				className='py-4'
				style={{ backgroundColor: '#666666', color: '#fff', fontFamily: 'Open Sans' }}
			>
				<div className='d-flex justify-content-between'>
					<ul
						style={{
							width: '400px',
							textAlign: 'justify',
							listStyle: 'none',
							marginLeft: '50px',
						}}
					>
						<li className='mb-3'>
							<span
								style={{
									fontSize: '28px',
									fontWeight: 'bold',
									letterSpacing: '1px',
								}}
							>
								Virtual.co.id
							</span>
						</li>
						<li>
							<span
								className='d-flex align-items-center justify-content-center'
								style={{ fontSize: '14px', lineHeight: '30px' }}
							>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy text
								ever since the 1500s, when an unknown printer took a galley of type
								and scrambled it to make a type specimen.
							</span>
						</li>
					</ul>

					<ul
						style={{
							width: '200px',
							textAlign: 'justify',
							listStyle: 'none',
							marginLeft: '50px',
						}}
					>
						<li className='mb-4 mt-2'>
							<span
								style={{
									fontSize: '18px',
									fontWeight: 'bold',
									letterSpacing: '1px',
								}}
							>
								Useful Links
							</span>
						</li>
						<li>
							<a href='/' style={{ fontSize: '15px', color: '#fff' }}>
								Top Article
							</a>
						</li>
						<li className='my-2'>
							<a href='/' style={{ fontSize: '15px', color: '#fff' }}>
								Latest Article
							</a>
						</li>
						<li>
							<a href='/' style={{ fontSize: '15px', color: '#fff' }}>
								Rent Space
							</a>
						</li>
					</ul>

					<ul
						style={{
							width: '300px',
							textAlign: 'justify',
							listStyle: 'none',
							marginLeft: '50px',
						}}
					>
						<li className='mb-4 mt-2'>
							<span
								style={{
									fontSize: '18px',
									fontWeight: 'bold',
									letterSpacing: '1px',
								}}
							>
								Contact Us
							</span>
						</li>
						<li>
							<i className='fa fa-phone' />
							<span className='mx-2' style={{ fontSize: '15px' }}>
								1234567890
							</span>
						</li>
						<li className='my-2'>
							<p>
								<i className='fa fa-envelope' />
								<span className='mx-2' style={{ fontSize: '15px' }}>
									info@otakkanan.com
								</span>
							</p>
						</li>
						<li>
							<p>
								<i className='fa fa-building' />
								<span className='mx-2' style={{ fontSize: '15px' }}>
									Graha Pena Lantai 15
								</span>
							</p>
						</li>
						<li>
							<p style={{ fontSize: '15px', marginLeft: '25px' }}>
								Jl. Ahmad Yani No. 58
							</p>
						</li>
						<li>
							<p style={{ fontSize: '15px', marginLeft: '25px' }}>
								Surabaya, Jawa Timur 60231
							</p>
						</li>
					</ul>

					<div
						className='social-media'
						style={{
							width: '400px',
							textAlign: 'justify',
							listStyle: 'none',
							marginLeft: '50px',
						}}
					>
						<div className='mb-4 mt-2'>
							<span
								style={{
									fontSize: '18px',
									fontWeight: 'bold',
									letterSpacing: '1px',
								}}
							>
								Follow Us
							</span>
						</div>

						<ul
							style={{
								listStyle: 'none',
								padding: '0',
							}}
						>
							<li>
								<span>
									<a href='https://www.facebook.com/' style={{ color: '#fff' }}>
										<i
											style={{ fontSize: '20px', marginRight: '20px' }}
											className='fa fa-facebook'
										/>
									</a>
								</span>
								<span className='mx-4'>
									<a href='https://www.instagram.com/' style={{ color: '#fff' }}>
										<i
											style={{ fontSize: '20px', marginRight: '20px' }}
											className='fa fa-instagram'
										/>
									</a>
								</span>
								<span>
									<a href='https://www.twitter.com/' style={{ color: '#fff' }}>
										<i
											style={{ fontSize: '20px', marginRight: '20px' }}
											className='fa fa-twitter'
										/>
									</a>
								</span>
							</li>
							<li className='mt-4'>
								<Form className='d-flex justify-content-start'>
									<FormControl
										className='header-search mr-1 py-2'
										type='text'
										style={{
											position: 'relative',
											height: '40px',
											width: '199px',
											backgroundColor: '#C4C4C4',
											borderRadius: '10px',
										}}
									/>
									<Button
										style={{
											padding: '7px',
											height: '40px',
											backgroundColor: '#F25B3A',
											borderRadius: '10px',
											borderColor: '#F25B3A',
											color: '#fff',
											fontWeight: '500',
											fontSize: '15px',
										}}
									>
										Subscribe
									</Button>
								</Form>
							</li>
						</ul>
					</div>
				</div>
			</footer>   
        </>
    )
}

export default FooterLink
