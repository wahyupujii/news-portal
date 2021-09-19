import React from 'react';
import { Card } from 'react-bootstrap';
import featuredArticle from '../../../assets/featuredArticle1.png';

const Cards = () => {
	return (
		<div>
			<Card
				style={{ width: '20rem', boxShadow: '0px 5px 10px 0px rgb(0, 0, 0, 0.1)' }}
				className='my-4 mx-4'
			>
				<Card.Img variant='top' src={featuredArticle} />
				<Card.Body>
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
					<a href='/article' className='card-title'>
						<Card.Title className='mt-3' style={{ fontWeight: '500' }}>
							Perubahan Batas Waktu Proses Pesanan Terkait Hari Libur Idul Adha
						</Card.Title>
					</a>
					<Card.Text style={{ fontSize: '14px', color: '#A6A0A0' }}>
						15 Juli 2021
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Cards;
