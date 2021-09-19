import React from 'react';
import { Breadcrumb, Row, Image } from 'react-bootstrap';
import Hero from './Hero';
import Elipse from '../../../assets/elipse.png';

const Header = ({ size }) => {
	return (
		<div style={{ fontFamily: 'Open Sans' }}>
			{/* breadcrumbs */}
			<Breadcrumb>
				<Breadcrumb.Item href='#'>
					<i className='fa fa-home'></i>
				</Breadcrumb.Item>
				<Breadcrumb.Item active>
					Virtual.co.id Jadi Startup Pertama Indonesia yang Melantai di Bursa Efek
					Indonesia
				</Breadcrumb.Item>
			</Breadcrumb>

			<Row className='d-flex text-center'>
				<header className='w-75 m-auto'>
					<p
						className='mb-3'
						style={{ fontSize: '30px', letterSpacing: '1px', fontWeight: '500' }}
					>
						Virtual.co.id Jadi Startup Pertama yang Melantai di Kancah Internasional
					</p>
					<div className='article-info mb-3'>
						<span
							className='p-2'
							style={{
								backgroundColor: '#3AD1F2',
								color: '#fff',
								fontSize: '14px',
								fontWeight: 'bold',
								borderRadius: '12px',
								letterSpacing: '1px',
							}}
						>
							BERITA
						</span>
						<span className='mx-3' style={{ fontSize: '18px' }}>
							Virtual.co.id Comunications{' '}
						</span>
						<Image src={Elipse} style={{ height: '7px', width: '7px' }} />
						<span className='mx-4'>4 Agustus 2021</span>
					</div>
				</header>
				<Hero size={size} />
			</Row>
		</div>
	);
};

export default Header;
