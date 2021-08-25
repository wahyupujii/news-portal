import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import headline1 from "../../../assets/headline1.png"
import headline2 from "../../../assets/headline2.png"

const Headline = () => {
    return(
        <Container>
            <Carousel style={{ margin:"90px 0px 80px 0px", height:"396px", width:"650.99px" }}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={headline1} alt="headline1"
                    />
                    <Carousel.Caption>
                        <h3>Judul</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={headline2} alt="headline2"
                    />
                    <Carousel.Caption>
                        <h3>Judul</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default Headline