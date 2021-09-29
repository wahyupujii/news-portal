import React , {useState} from 'react';
import { Container, Form, Button, InputGroup, FormControl , Spinner } from 'react-bootstrap';
import Pattern from '../../assets/Pattern';
import './index.css';
import axios from "axios"
import {useHistory} from "react-router-dom"

const Login = () => {
	const history = useHistory();
	const [inputs , setInputs] = useState({});
	const [loading , setLoading] = useState(false)

	const sendData = (e) => {
		e.preventDefault();
		setLoading(true)
		axios.post("http://127.0.0.1:8000/api/auth/login" , {
			email: inputs.email , 
			password: inputs.password
		})
		.then(user => {
			setLoading(false)
			localStorage.setItem("dataUser" , JSON.stringify(user.data))
			window.location.href = "/"
		})
		.catch(err => {
			alert("gagal login")
			console.error(err)
			setLoading(false)
		})
	}

	return (
		<>
			<div style={{ fontFamily: 'Open Sans' }}>
				<section
					style={{
						position: 'absolute',
						top: '0',
						bottom: '50px',
						right: '0',
						left: '0',
					}}
					className='d-flex'
				>
					<section
						className='w-50 h-100'
						style={{
							background:
								'linear-gradient(211.29deg, #F25B3A 37.35%, #FBC7BB 104.48%)',
							position: 'relative',
						}}
					>
						<Pattern />
						<Container className='w-75 h-100 d-flex justify-content-start align-items-center'>
							<div
								style={{ width: '413px', height: '302px', marginLeft: '50px' }}
								className='d-flex flex-column justify-content-center'
							>
								<h1
									className='text-light'
									style={{
										fontSize: '50px',
										fontWeight: 'bold',
										marginTop: '20px',
									}}
								>
									Virtual.co.id
								</h1>
								<h6 className='text-light' style={{ fontWeight: '400' }}>
									Trusted and complete news about Co-Work Space only on us
								</h6>
							</div>
						</Container>
					</section>
					<section style={{ width: '50%', height: '100%' }}>
						<Container className='w-75 h-100 d-flex justify-content-center align-items-center'>
							<Form style={{ width: '460px' }} onSubmit={sendData} >
								<div className='text mb-4'>
									<h4 className='mb-3' style={{ fontSize: '40px' }}>
										Hello!
									</h4>
									<p
										className='text-muted font-weight normal'
										style={{ fontSize: '30px' }}
									>
										Welcome Back
									</p>
								</div>
								{/* <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group> */}

								<InputGroup className='my-4'>
									<InputGroup.Text id='basic-addon1'>
										<i className='fa fa-envelope'></i>
									</InputGroup.Text>
									<FormControl
										placeholder='Email'
										aria-label='Email'
										aria-describedby='basic-addon1'
										name="email"
										onChange={(e) => setInputs({...inputs , [e.target.name]: e.target.value})}
										/>
								</InputGroup>

								<InputGroup className='my-4'>
									<InputGroup.Text id='basic-addon1'>
										<i className='fa fa-lock'></i>
									</InputGroup.Text>
									<FormControl
										placeholder='Password'
										aria-label='Password'
										aria-describedby='basic-addon1'
										type='password'
										name="password"
										onChange={(e) => setInputs({...inputs , [e.target.name]: e.target.value})}
									/>
								</InputGroup>

								<Form.Group className='mb-3' controlId='formBasicCheckbox'>
									<a href=''>
										<Form.Text className='text-decoration-underline d-flex justify-content-end'>
											Forgot Password?
										</Form.Text>
									</a>
								</Form.Group>
								<div className='d-flex flex-column align-items-center'>
									<Button
										// href='/'
										style={{
											fontWeight: 'bold',
											borderRadius: '20px',
										}}
										type='submit'
										className='button-login my-2 w-100 border-0 py-2'
									>
										{
											loading ? (
												<Spinner animation="border" variant="light" />
											) : ( <span>Login</span> )
										}
									</Button>
									<span style={{ fontSize: '14px' }}>
										Don't have any account?{' '}
									</span>
									<Button
										onClick={() => history.push("/register")}
										variant='outline-secondary'
										type='submit'
										className='my-2 w-100 py-2'
										style={{ borderRadius: '20px' }}
									>
										Register
									</Button>
								</div>
							</Form>
						</Container>
					</section>
				</section>
				<footer
					className='p-3'
					style={{
						maxHeight: '200px',
						backgroundColor: '#222222',
						position: 'absolute',
						bottom: '0',
						left: '0',
						right: '0',
					}}
				>
					<span style={{ color: '#fff', opacity: '0.6', marginLeft: '70px' }}>
						Powered by PT Otak Kanan
					</span>
				</footer>
			</div>
		</>
	);
};

export default Login;
