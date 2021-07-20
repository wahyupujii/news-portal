import React from 'react';
import { Carousel } from "react-bootstrap";

const Hero = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="w-75"
                        src="https://s3.bukalapak.com/bukalapak-kontenz-production/content_attachments/72318/original/IMG_1361.PNG"
                        alt=""
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Hero
