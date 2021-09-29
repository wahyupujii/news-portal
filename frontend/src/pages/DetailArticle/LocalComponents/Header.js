import React from 'react';
import { Breadcrumb, Row, Image } from 'react-bootstrap';
import Hero from './Hero';
import Elipse from '../../../assets/elipse.png';

const Header = ({ size , data }) => {
	return (
		<div style={{ fontFamily: 'Open Sans' }}>
			{
				Object.keys(data).length !== 0 ? (
					<>
						{/* breadcrumbs */}
						<Breadcrumb>
							<Breadcrumb.Item href='#'>
								<i className='fa fa-home'></i>
							</Breadcrumb.Item>
							<Breadcrumb.Item active>
								{data.article.title}
							</Breadcrumb.Item>
						</Breadcrumb>

						<Row className='d-flex text-center'>
							<header className='w-75 m-auto'>
								<p
									className='mb-3'
									style={{ fontSize: '30px', letterSpacing: '1px', fontWeight: '500' }}
								>
									{data.article.title}
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
										{data.article.name}
									</span>
									<span className='mx-3' style={{ fontSize: '18px' }}>
										Virtual.co.id Comunications{' '}
									</span>
									<Image src={data.article.header_image} style={{ height: '7px', width: '7px' }} />
									<span className='mx-4'>belum</span>
								</div>
							</header>
							<Hero size={size} dataSrc={data.article.header_image} />
						</Row>
					</>
				) : ( <span>loading ...</span> )
			}
		</div>
	);
};

export default Header;
