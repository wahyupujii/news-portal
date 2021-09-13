import React from 'react'
import { Breadcrumb , Row } from 'react-bootstrap'
import { Hero } from '../../../components'

const Header = ({size}) => {
    return (
        <div>
            {/* breadcrumbs */}
            <Breadcrumb>
                <Breadcrumb.Item href="#"><i className="fa fa-home"></i></Breadcrumb.Item>
                <Breadcrumb.Item active>Virtual.co.id Jadi Startup Pertama Indonesia yang Melantai di Bursa Efek Indonesia</Breadcrumb.Item>
            </Breadcrumb>

            <Row className="d-flex text-center" >
                <header className="w-75 m-auto">
                    <h2 className="mb-3">Virtual.co.id Jadi Startup Pertama yang Melantai di Kancah Internasional</h2>
                    <div className="article-info mb-3">
                        <span class="badge bg-danger text-light fst-italic mx-2">Berita</span>
                        <span className="mx-2">4 Agustus 2021</span>
                    </div>
                </header>
                <Hero size={size} />
            </Row>
        </div>
    )
}

export default Header
