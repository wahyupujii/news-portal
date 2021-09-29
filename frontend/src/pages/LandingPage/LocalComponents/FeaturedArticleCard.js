import React from 'react'
import { Card, Button } from 'react-bootstrap'
import featuredArticle from "../../../assets/featuredArticle1.png"

const FeaturedArticleCard = () => {
    return (
        <div>
            <div>
                <Card style={{ width: '18rem' }} className="my-4">
                    <Card.Img variant="top" src={featuredArticle} />
                    <Card.Body>
                        <Card.Title>Perubahan Batas Waktu Proses Pesanan Terkait Hari Libur Idul Adha</Card.Title>
                        <span class="badge bg-danger text-light fst-italic mb-2 p-2">Berita</span>
                        <Card.Text>
                            15 Juli 2021
                        </Card.Text>
                        <Button variant="primary">Baca Selengkapnya</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default FeaturedArticleCard
