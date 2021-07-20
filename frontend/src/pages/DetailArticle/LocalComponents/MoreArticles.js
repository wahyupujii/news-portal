import React from 'react'
import { Card } from "react-bootstrap";
import { useHistory } from 'react-router-dom';

const MoreArticles = ({ size }) => {
    const history = useHistory();
    
    return (
        <div>
            <section>
                <header className="d-flex justify-content-between align-items-center">
                    <h5 className="my-2">More articles in this category</h5>
                    <span onClick={() => history.push("/more-articles")} style={{cursor: 'pointer'}}>Lihat semua ... </span>
                </header>

                {/* card articles */}
                <section className={size.width <= 500 ? '' : 'd-flex justify-content-evenly align-items-center'}>
                    <Card style={{ width: `${size.width <= 500 ? '100%' : '15rem'}` }} className="my-4 shadow-sm bg-body rounded">
                        <Card.Img variant="top" src="https://s0.bukalapak.com/bukalapak-kontenz-production/content_attachments/72410/original/buka_jual_motor.jpeg" />
                        <Card.Body>
                            <Card.Text className="text-danger fw-bold">Berita</Card.Text>
                            <Card.Title>Mau Jual Motor Bekas Cepat Laku? Di BukaJual Motor Aja!</Card.Title>
                            <Card.Text className="text-muted">19 Juli 2021</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: `${size.width <= 500 ? '100%' : '15rem'}` }} className="my-4 shadow-sm bg-body rounded">
                        <Card.Img variant="top" src="https://s0.bukalapak.com/bukalapak-kontenz-production/content_attachments/72410/original/buka_jual_motor.jpeg" />
                        <Card.Body>
                            <Card.Text className="text-danger fw-bold">Berita</Card.Text>
                            <Card.Title>Mau Jual Motor Bekas Cepat Laku? Di BukaJual Motor Aja!</Card.Title>
                            <Card.Text className="text-muted">19 Juli 2021</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: `${size.width <= 500 ? '100%' : '15rem'}` }} className="my-4 shadow-sm bg-body rounded">
                        <Card.Img variant="top" src="https://s0.bukalapak.com/bukalapak-kontenz-production/content_attachments/72410/original/buka_jual_motor.jpeg" />
                        <Card.Body>
                            <Card.Text className="text-danger fw-bold">Berita</Card.Text>
                            <Card.Title>Mau Jual Motor Bekas Cepat Laku? Di BukaJual Motor Aja!</Card.Title>
                            <Card.Text className="text-muted">19 Juli 2021</Card.Text>
                        </Card.Body>
                    </Card>
                </section>
            </section>
        </div>
    )
}

export default MoreArticles
