import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Article from "../../../assets/article.png"

const NewArticle = () => {
    return(
        <Container>
            <h3>Artikel Terbaru</h3>
            <Row className="justify-content-md-center my-4">
                <Col xs={4}>
                    <Card style={{ width: '20rem' }} >
                        <Card.Img src={Article} />
                        <Card.Body>
                            <Card.Title>Lorem Ipsum</Card.Title>
                            <Card.Text>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4}>
                    <Card style={{ width: '20rem' }} >
                        <Card.Img src={Article} />
                        <Card.Body>
                            <Card.Title>Lorem Ipsum</Card.Title>
                            <Card.Text>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4}>
                    <Card style={{ width: '20rem' }} >
                        <Card.Img src={Article} />
                        <Card.Body>
                            <Card.Title>Lorem Ipsum</Card.Title>
                            <Card.Text>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="justify-content-md-center my-4">
                <Col xs={4}>
                    <Card style={{ width: '20rem' }} >
                        <Card.Img src={Article} />
                        <Card.Body>
                            <Card.Title>Lorem Ipsum</Card.Title>
                            <Card.Text>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4}>
                    <Card style={{ width: '20rem' }} >
                        <Card.Img src={Article} />
                        <Card.Body>
                            <Card.Title>Lorem Ipsum</Card.Title>
                            <Card.Text>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4}>
                    <Card style={{ width: '20rem' }} >
                        <Card.Img src={Article} />
                        <Card.Body>
                            <Card.Title>Lorem Ipsum</Card.Title>
                            <Card.Text>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default NewArticle