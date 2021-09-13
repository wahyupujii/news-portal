import React from 'react'
import { Container, Form, Button, InputGroup , FormControl} from 'react-bootstrap'
import Pattern from '../../assets/Pattern'

const Login = () => {
    return (
        <>
            <section style={{ position: 'absolute', top: '0', bottom: '50px', right: '0', left: '0' }} className="d-flex">
                <section className="w-50 h-100" style={{ background: 'linear-gradient(211.29deg, #F25B3A 37.35%, #FBC7BB 104.48%)', position: 'relative' }}>
                    <Pattern />
                    <Container className="w-75 h-100 d-flex justify-content-start align-items-center">
                        <div style={{ width: '413px', height: '302px', marginLeft: '50px' }} className="d-flex flex-column justify-content-center">
                            <h1 className="text-light" style={{ fontSize: '50px' }}>Virtual.co.id</h1>
                            <h6 className="text-light">Trusted and complete news about Co-Work Space only on us</h6>
                        </div>
                    </Container>
                </section>
                <section style={{ width: '50%', height: '100%' }}>
                    <Container className="w-75 h-100 d-flex justify-content-center align-items-center">
                        <Form style={{ width: '460px' }}>
                            <div className="text mb-4">
                                <h4 className="mb-3" style={{ fontSize: '48px' }}>Hello!</h4>
                                <p className="text-muted font-weight normal" style={{ fontSize: '34px' }}>Welcome Back</p>
                            </div>
                            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group> */}

                            <InputGroup className="my-4">
                                <InputGroup.Text id="basic-addon1"><i className="fa fa-envelope"></i></InputGroup.Text>
                                <FormControl
                                    placeholder="Email"
                                    aria-label="Email"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>

                            <InputGroup className="my-4">
                                <InputGroup.Text id="basic-addon1"><i className="fa fa-lock"></i></InputGroup.Text>
                                <FormControl
                                    placeholder="Password"
                                    aria-label="Password"
                                    aria-describedby="basic-addon1"
                                    type="password"
                                />
                            </InputGroup>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Text className="text-decoration-underline d-flex justify-content-end">
                                    Forgot Password ?.
                                </Form.Text>
                            </Form.Group>
                            <div className="d-flex flex-column align-items-center">
                                <Button style={{ backgroundColor: '#F25F3E' }} type="submit" className="my-2 w-100 border-0 py-2">
                                    Login
                                </Button>
                                <span style={{fontSize: '14px'}}>Don't have any account ? </span>
                                <Button variant="outline-secondary" type="submit" className="my-2 w-100 py-2">
                                    Register
                                </Button>
                            </div>
                        </Form>
                    </Container>
                </section>
            </section>
            <footer style={{ backgroundColor: '#222222', position: 'absolute', bottom: '0', left: '0', right: '0', height: '50px' }}>
                <Container className="d-flex h-100 align-items-center">
                    <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#fff' }}>Powered by PT Otak Kanan</span>
                </Container>
            </footer>
        </>
    )
}

export default Login