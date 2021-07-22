import React, { Component, Fragment } from 'react';
import Nav from '../../components/Nav';
import HeroLandingPageComponent from '../../components/HeroLandingPageComponent/HeroLandingPageComponent';
import BlogComponent from '../../components/BlogComponent/BlogComponent';
import PaginationComponent from '../../components/PaginationComponent/PaginationComponent';
import WidgetComponent from '../../components/WidgetComponent/WidgetComponent';

import "./css/bootstrap.min.css"
import "./css/style.css"
import "./css/vendors.css"
import "./css/blog.css"
import "./css/custom.css"
import FooterComponent from '../../components/FooterComponent/FooterComponent';

class LandingPage extends Component {
    render() {
        return(
            <Fragment>
                <body>
                    <Nav />
                    <div id="page">
                        <main>
                            <HeroLandingPageComponent />
                            <div className="container margin_60_35">
                                <div className="row">
                                    <div className="col-lg-9">
                                        <BlogComponent />
                                        <BlogComponent />
                                        <BlogComponent />
                                        <BlogComponent />

                                        <PaginationComponent />
                                    </div>
                                    <WidgetComponent />
                                </div>
                            </div>
                        </main>
                        <FooterComponent />              
                    </div>
                </body>
                
                
            </Fragment>
        )
    }
}

export default LandingPage;