import React, { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import axios from "axios";

const Comments = ({ data }) => {
	const [input, setInput] = useState("");

	// belum bisa fungsi add commentnya
	const submitComment = (e) => {
		e.preventDefault();
		let tokenUser = JSON.parse(localStorage.getItem("dataUser"))
		const config = {
			headers: { Authorization: `Bearer ${tokenUser.access_token}` }
		}
		const bodyParameters = {
			slug: data.slug,
			content: input,
		}

		// pengecekan di localstorage apa sudah login / belum
		if (localStorage.key("dataUser")) {
			axios.post("http://127.0.0.1:8000/api/articles/comment/store" , 
				bodyParameters , 
				config
			).then(response => console.log(response)).catch(err => console.log(err))
		} else {
			alert("anda belum login")
		}
	}

	return (
		<div>
			{
				Object.keys(data).length !== 0 ? (
					<section className='mb-4'>
						<div className='comment'>
							<h6 className='mb-3'>
								<span>Comments | </span>
								<span className='ms-4'>
									<i className='fa fa-heart' style={{ cursor: 'pointer' }}></i>
									<span className='ms-2'> 3 Likes | </span>
								</span>
								{/* <span className='ms-4'>
									<i className='fa fa-share' style={{ cursor: 'pointer' }}></i>
									<span className='ms-2'> Share | </span>
								</span> */}
							</h6>
							<Form onSubmit={submitComment}>
								<Form.Group className='mb-3'>
									<Form.Control as='textarea' row={5} placeholder='Comment here' onChange={(e) => setInput(e.target.value)} />
								</Form.Group>
								<Button
									style={{
										backgroundColor: '#F25B3A',
										borderRadius: '12px',
										borderColor: '#F25B3A',
										fontSize: '16px',
									}}
									type='submit'
								>
									Submit
								</Button>
							</Form>
							<br />
							<div>
								<h6>{data.article_comments_count} Comments</h6>
								{
									data.article_comments.map((comment) => {
										return (
											<Card className='mb-4'>
												<Card.Header
													as='h5'
													className='d-flex justify-content-between align-items-center'
												>
													<div className='account d-flex align-items-center'>
														<h6>Wahyu Puji Ramadhan</h6>
													</div>
													<h6>{comment.created_at}</h6>
												</Card.Header>
												<Card.Body>
													<Card.Text>
														{comment.content}
													</Card.Text>
												</Card.Body>
											</Card>
										)
									})
								}
							</div>
						</div>
					</section>
				) : ( <span>loading ... </span> )
			}
		</div>
	);
};

export default Comments;
