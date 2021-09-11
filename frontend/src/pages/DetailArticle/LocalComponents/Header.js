import React from 'react'
import { Breadcrumb , Row } from 'react-bootstrap'
import { Hero } from '../../../components'

const Header = ({size}) => {
    return (
        <div>
            {/* breadcrumbs */}
            <Breadcrumb>
                <Breadcrumb.Item href="#"><i className="fa fa-home"></i></Breadcrumb.Item>
                <Breadcrumb.Item active>Judul Detail Article</Breadcrumb.Item>
            </Breadcrumb>

            <Row className="d-flex text-center" >
                <header className="w-75 m-auto">
                    <h2 className="mb-3">Bukalapak Jadi Unicorn Indonesia Pertama yang Melantai di Bursa Efek Indonesia</h2>
                    <div className="article-info mb-3">
                        <span class="badge bg-primary text-light fst-italic mx-2 p-2">Berita</span>
                        <span className="mx-2">18 Juli 2021</span>
                    </div>
                </header>
                <Hero size={size} />
            </Row>
        </div>
    )
}

export default Header
