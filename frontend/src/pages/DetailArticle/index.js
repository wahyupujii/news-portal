import React from 'react'
import { Container } from "react-bootstrap";
import { Header, Post, Comments, MoreArticles } from './LocalComponents';

const DetailArticle = ({ size }) => {
    return (
        <>
            <Container style={{marginTop: '90px'}}>
                <Header />

                <main className="m-auto text-left lh-lg py-4" style={{maxWidth: '800px'}}>
                    {/* Blog Post area */}
                    <Post />

                    {/* tags */}
                    <section className="my-4 flex align-items-center">
                        <span class="badge bg-info text-light fst-italic mx-2 py-2">virtual.co.id</span>
                    </section>

                    <hr className="my-4"/>

                    {/* Comments Area */}
                    <Comments />

                    <hr className="my-4" />

                    {/* more article from same categories */}
                    <MoreArticles size={size} />

                    
                </main>

            </Container>
        </>
    )
}

export default DetailArticle
