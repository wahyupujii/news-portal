import React from 'react'
import { Container } from 'react-bootstrap'
import { Headline, RecArticle, Video, NewArticle } from "./LocalComponents";

const LandingPage = () => {
    return (
        <> 
            <Container>
                <Headline />
                <RecArticle />
                <Video />
                <NewArticle />
            </Container>

        </>
    )
}

export default LandingPage
