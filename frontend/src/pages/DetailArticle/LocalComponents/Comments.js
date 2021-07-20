import React from 'react'
import { Form , Button , Card } from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css';

const Comments = () => {
    return (
        <div>
            <section className="mb-4">
                <div className="comment">
                    <h5 className="mb-3">
                        <span>Comment | </span>
                        <span className="ms-4">
                            <i className="fa fa-heart-o" style={{cursor: 'pointer'}}></i>
                            <span className="ms-2">1.000 Likes | </span>
                        </span>
                        <span className="ms-4">
                            <i className="fa fa-share" style={{cursor: 'pointer'}}></i>
                            <span className="ms-2">Share | </span>
                        </span>
                    </h5>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control as="textarea" row={5} placeholder="Comment here" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <br />
                    <div>
                        <h6>2.000 Comments</h6>
                        <Card className="mb-4">
                            <Card.Header as="h5" className="d-flex justify-content-between align-items-center">
                                <div className="account d-flex align-items-center">
                                    <img src="https://s3.bukalapak.com/bukalapak-kontenz-production/content_attachments/72318/original/IMG_1361.PNG" width="50" height="50" className="rounded-circle" style={{marginRight: '20px'}} alt="" />
                                    <h6>Wahyu Puji Ramadhan</h6>
                                </div>
                                <h6>19 Juli 2021 at 23:00</h6>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>Blog nya bagus sekali , informasinya sangat berguna , terima kasih</Card.Text>

                                {/* show another reply */}
                                <Card style={{marginLeft: '20px'}} className="mb-3">
                                    <Card.Header className="d-flex justify-content-between align-items-center">
                                        <div className="account d-flex align-items-center">
                                            <img src="https://s3.bukalapak.com/bukalapak-kontenz-production/content_attachments/72318/original/IMG_1361.PNG" width="50" height="50" className="rounded-circle" style={{marginRight: '20px'}} alt="" />
                                            <h6>Wahyu Puji Ramadhan</h6>
                                        </div>
                                        <h6>19 Juli 2021 at 23:00</h6>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem possimus cumque quibusdam fugiat aliquid? Non ad quibusdam officiis. Aperiam, corporis!
                                        </Card.Text>
                                    </Card.Body>
                                </Card>


                                {/* form for reply */}
                                <Form>
                                    <Form.Control as="textarea" row={5} placeholder="Reply" className="mb-3" />
                                    <Button variant="primary" type="submit">Reply</Button>                                
                                </Form>

                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Comments
