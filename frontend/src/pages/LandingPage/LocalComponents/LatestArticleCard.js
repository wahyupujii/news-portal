import React from 'react';
import { Card , Button } from 'react-bootstrap';
// import featuredArticle from '../../../assets/featuredArticle1.png';
import {useHistory} from "react-router-dom";

const LatestArticleCard = ({data}) => {
	const history = useHistory();
	return (
		<div>
			{
				data === undefined ? (
					<span>loading</span>
				) : (
					<Card
						style={{ width: '20rem', boxShadow: '0px 5px 10px 0px rgb(0, 0, 0, 0.1)' }}
						className='my-4 mx-4'
					>
						<Card.Img variant='top' src={data.header_image} />
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
								{data.name}
							</span>
							<a href='/article' className='card-title'>
								<Card.Title className='mt-3' style={{ fontWeight: '500' }}>
									{console.log(data.header_image)}
									{data.title}
								</Card.Title>
							</a>
							<Card.Text style={{ fontSize: '14px', color: '#A6A0A0' }}>
								{data.published_date}
							</Card.Text>
							<Button variant="primary" onClick={() => history.push(`/article/${data.slug}`)}>Baca Selengkapnya</Button>
						</Card.Body>
					</Card>
				)
			}
		</div>
	);
};

export default LatestArticleCard;
