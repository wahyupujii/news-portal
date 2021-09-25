import React from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap'
import Article from "../../../assets/article.png"

const RecArticle = () => {
    return(
        <Container>
            <h3>Artikel Rekomendasi</h3>
            <Row className="justify-content-md-center my-4">
                <Col xs={6}>
                    <Card style={{ width: '18rem' }} >
                        <Card.Img src={Article} />
                        <Card.Body>
                            <Card.Title>Lorem Ipsum</Card.Title>
                            <Card.Text>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6}>
                    <Card style={{ width: '18rem' }} >
                        <Card.Img src={Article} />
                        <Card.Body>
                            <Card.Title>Lorem Ipsum</Card.Title>
                            <Card.Text>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="justify-content-md-center my-4">
                <Col xs={6}>
                    <Card style={{ width: '18rem' }} >
                        <Card.Img src={Article} />
                        <Card.Body>
                            <Card.Title>Lorem Ipsum</Card.Title>
                            <Card.Text>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6}>
                    <Card style={{ width: '18rem' }} >
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

export default RecArticle