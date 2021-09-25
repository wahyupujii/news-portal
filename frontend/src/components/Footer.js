import React from 'react';

const Footer = () => {
	return (
		<footer
			className='p-3'
			style={{
				maxHeight: '200px',
				backgroundColor: '#222222',
				bottom: '0',
				left: '0',
				right: '0',
			}}
		>
			<span style={{ color: '#fff', opacity: '0.6', marginLeft: '70px' }}>
				Powered by PT Otak Kanan
			</span>
		</footer>
	);
};

export default Footer;
