import React from 'react';
import { Carousel } from "react-bootstrap";
import Headline1 from '../../../assets/headline1.png'

const Hero = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="w-75"
                        src={Headline1}
                        alt="Headline1"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Hero
