import React, { useState } from 'react'
import { Navbar , Form , FormControl , Button , Dropdown } from 'react-bootstrap';
import { GoogleLogin , GoogleLogout } from 'react-google-login';

const Nav = () => {
    const [loginGoogle , setLoginGoogle] = useState(undefined);

    const responseGoogle = (response) => {
        setLoginGoogle(response);
        // if (response !== undefined) {
        //     localStorage.setItem("")
        // }
        console.log(response);
    }

    return (
        <div className="mb-4">
            <Navbar 
                bg="light" 
                expand="lg" 
                fixed="top" 
                style={{height: '75px'}}
                className="shadow-sm p-3 mb-3 bg-body rounded"
            >
                <div className="container d-flex justify-content-between">
                    <Navbar.Brand href="#">
                        <h2>Virtual.co.id</h2>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarScroll" />

                    <Navbar.Collapse id="navbarScroll" className="px-4 py-2" style={{backgroundColor: 'light'}}>
                        <Form className="d-flex w-100">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-2 py-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-primary">Search</Button>
                        </Form>

                        {/* DropDown Login Logout */}
                        {/* Google Login & Logout*/}
                        {
                            loginGoogle !== undefined ? (
                                // google logout
                                <Dropdown className="d-inline mx-2">
                                    <Dropdown.Toggle id="dropdown-autoclose-true">
                                        {loginGoogle === undefined ? "Login" : loginGoogle.Ys.Ve}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="">
                                            {/* button logout */}
                                            <GoogleLogout
                                                clientId="318644210935-oqrhq84njd8776oj81m0fv4fa2ml69sf.apps.googleusercontent.com"
                                                buttonText="Logout"
                                                onLogoutSuccess={responseGoogle}
                                            ></GoogleLogout>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>        
                            ) : (
                                // google login
                                <Dropdown className="d-inline mx-2">
                                    <Dropdown.Toggle id="dropdown-autoclose-true">
                                        Login
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="">
                                            <GoogleLogin 
                                                clientId="318644210935-oqrhq84njd8776oj81m0fv4fa2ml69sf.apps.googleusercontent.com"
                                                buttonText="Login"
                                                onSuccess={responseGoogle}
                                                onFailure={responseGoogle}
                                                cookiePolicy={'single_host_origin'}
                                                isSignedIn={true}
                                            />
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            )
                        }

                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
}


export default Nav
