import React, { useState } from 'react';
import {
	Navbar,
	NavDropdown,
	Form,
	FormControl,
	Button,
	Dropdown,
	NavItem,
	NavLink,
} from 'react-bootstrap';
import './Nav.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const Nav = () => {
	const [loginGoogle, setLoginGoogle] = useState(undefined);

	const responseGoogle = (response) => {
		setLoginGoogle(response);
		// if (response !== undefined) {
		//     localStorage.setItem("")
		// }
		console.log(response);
	};

	return (
		<div className='mb-4' style={{ fontFamily: 'Open Sans' }}>
			<Navbar
				expand='lg'
				fixed='top'
				style={{ height: '73px', backgroundColor: '#fff' }}
				className='shadow-sm py-3 mb-3 bg-body rounded'
			>
				<div className='container d-flex justify-content-start ml-5'>
					<Navbar.Brand href='/'>
						<p
							style={{
								fontSize: '28px',
								fontWeight: 'bold',
								letterSpacing: '3px',
								marginTop: '14px',
							}}
						>
							Virtual.co.id
						</p>
					</Navbar.Brand>

					<NavItem>
						<NavLink className='nav-link-home' href='/'>
							HOME
						</NavLink>
					</NavItem>
					<NavItem>
						<NavDropdown
							title='NEWS'
							className='nav-link-dropdown'
							style={{ fontSize: '18px ', color: '#fff' }}
						>
							<NavDropdown.Item href='#action/3.1'>Top Article</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.1'>Latest Article</NavDropdown.Item>
						</NavDropdown>
					</NavItem>
				</div>
				<div className='container d-flex justify-content-end mr-5'>
					{window.location.pathname === '/login' ||
					window.location.pathname === '/register' ? (
						<span></span>
					) : (
						<div>
							<Navbar.Toggle aria-controls='navbarScroll' />

							<Navbar.Collapse
								id='navbarScroll'
								className='px-4 py-2'
								style={{ backgroundColor: 'white' }}
							>
								<Form className='d-flex'>
									{/* <FormControl
										type='search'
										placeholder='Search'
										className='mr-2 py-2'
										aria-label='Search'
									/> */}
									<Form method='get' className='search-bar'>
										{/* <GoSearch
											className='icon-search'
											style={{
												position: 'absolute',
												top: '50%',
												transform: 'translateY(${yPercent}%)',
												left: '1215px',
												color: '#fff',
											}}
										/> */}
										<FormControl
											className='header-search mr-1 py-2'
											type='text'
											style={{
												position: 'relative',
												height: '35px',
												width: '353px',
												backgroundColor: '#F25B3A',
												opacity: '.34',
												borderRadius: '10px',
											}}
										/>
									</Form>

									<Button
										className='mr-3'
										style={{
											width: '50px',
											height: '35px',
											backgroundColor: '#F25B3A',
											borderRadius: '10px',
											borderColor: '#F25B3A',
											color: '#fff',
											fontWeight: 'bold',
										}}
									>
										Go
									</Button>

									{/* DropDown Login Logout */}
									{/* Google Login & Logout*/}
									{loginGoogle !== undefined ? (
										// google logout
										<Dropdown className='d-inline mx-2'>
											<Dropdown.Toggle id='dropdown-autoclose-true'>
												{loginGoogle === undefined
													? 'Login'
													: loginGoogle.profileObj.name}
											</Dropdown.Toggle>
											<Dropdown.Menu>
												<Dropdown.Item href=''>
													{/* button logout */}
													<GoogleLogout
														clientId='318644210935-oqrhq84njd8776oj81m0fv4fa2ml69sf.apps.googleusercontent.com'
														buttonText='Logout'
														onLogoutSuccess={responseGoogle}
													></GoogleLogout>
												</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
									) : (
										// google login
										<Dropdown className='d-inline mx-2'>
											<Dropdown.Toggle
												id='dropdown-autoclose-true'
												style={{
													height: '35px',
													backgroundColor: '#fff',
													color: '#F25B3A',
													borderRadius: '10px',
													borderColor: '#F25B3A',
												}}
											>
												Login
											</Dropdown.Toggle>
											<Dropdown.Menu>
												<Dropdown.Item href='/login'>
													Akun Anda
												</Dropdown.Item>
												<Dropdown.Item href=''>
													<GoogleLogin
														clientId='318644210935-oqrhq84njd8776oj81m0fv4fa2ml69sf.apps.googleusercontent.com'
														buttonText='Login'
														onSuccess={responseGoogle}
														onFailure={responseGoogle}
														cookiePolicy={'single_host_origin'}
														isSignedIn={true}
													/>
												</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
									)}
								</Form>
							</Navbar.Collapse>
						</div>
					)}
				</div>
			</Navbar>
		</div>
	);
};

export default Nav;
