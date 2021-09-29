import React from 'react';
import { Carousel } from 'react-bootstrap';
// import newImage1 from '../assets/newImage1.png';
import newImage1 from '../../../assets/newImage1.png';

const Hero = ({ size , dataSrc }) => {
	return (
		<div>
			<Carousel>
				<Carousel.Item>
					<img className={size.width <= 765 ? 'w-100' : 'w-75'} src={dataSrc} alt='' />
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Hero;
