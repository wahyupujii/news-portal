import React from 'react';
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
import {useHistory} from "react-router-dom"

const Nav = () => {
	// get data dari localStorage
	const dataUser = JSON.parse(localStorage.getItem("dataUser"));
	const history = useHistory();
	const logout = (e) => {
		e.preventDefault();
		localStorage.removeItem("dataUser");
		window.location.href = "/"
	}
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
							<NavDropdown.Item href='#featured-article'>Top Article</NavDropdown.Item>
							<NavDropdown.Item href='#latest-article'>Latest Article</NavDropdown.Item>
						</NavDropdown>
					</NavItem>
				</div>

				<div className='container d-flex justify-content-end mr-5'>
						<div>
							<Navbar.Toggle aria-controls='navbarScroll' />
							<Navbar.Collapse
								id='navbarScroll'
								className='px-4 py-2'
								style={{ backgroundColor: 'white' }}
							>
								{/* inputan pencarian */}
								<Form className='d-flex'>
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
								</Form>

								{
									dataUser !== null ? (
										<Dropdown>
											<Dropdown.Toggle variant="primary" id="dropdown-basic">
												{dataUser.name.charAt(0).toUpperCase()}
											</Dropdown.Toggle>
											<Dropdown.Menu>
												<Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
									) : (
										<Button
											className='mr-3'
											style={{
												height: '35px',
												backgroundColor: '#F25B3A',
												borderRadius: '10px',
												borderColor: '#F25B3A',
												color: '#fff',
												fontWeight: 'bold',
											}}
											onClick={() => history.push("/login")}
										>
											Login
										</Button>
									)
								}

							</Navbar.Collapse>
						</div>
				</div>
			</Navbar>
		</div>
	);
};

export default Nav;
