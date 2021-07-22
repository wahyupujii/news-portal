import React from 'react';

const WidgetComponent = () => {
    return(
        <aside class="col-lg-3">
            <div class="widget">
                <form>
                    <div class="form-group">
                        <input type="text" name="search" id="search" class="form-control" placeholder="Search..." />
                    </div>
                    <button type="submit" id="submit" class="btn_1 rounded"> Search</button>
                </form>
            </div>
            
            <div class="widget">
                <div class="widget-title">
                    <h4>Recent Posts</h4>
                </div>
                <ul class="comments-list">
                    <li>
                        <div class="alignleft">
                            <a href="/"><img src="https://placeimg.com/800/533/tech" alt="" /></a>
                        </div>
                        <small>11.08.2016</small>
                        <h3><a href="/" title="">Verear qualisque ex minimum...</a></h3>
                    </li>
                    <li>
                        <div class="alignleft">
                            <a href="/"><img src="https://placeimg.com/800/533/tech/grayscale" alt="" /></a>
                        </div>
                        <small>11.08.2016</small>
                        <h3><a href="/" title="">Verear qualisque ex minimum...</a></h3>
                    </li>
                    <li>
                        <div class="alignleft">
                            <a href="/"><img src="https://placeimg.com/800/533/tech/any" alt="" /></a>
                        </div>
                        <small>11.08.2016</small>
                        <h3><a href="/" title="">Verear qualisque ex minimum...</a></h3>
                    </li>
                </ul>
            </div>
            
            <div class="widget">
                <div class="widget-title">
                    <h4>Blog Categories</h4>
                </div>
                <ul class="cats">
                    <li><a href="/">Admissions <span>(12)</span></a></li>
                    <li><a href="/">News <span>(21)</span></a></li>
                    <li><a href="/">Events <span>(44)</span></a></li>
                    <li><a href="/">Focus in the lab <span>(31)</span></a></li>
                </ul>
            </div>
            
            <div class="widget">
                <div class="widget-title">
                    <h4>Popular Tags</h4>
                </div>
                <div class="tags">
                    <a href="/">Information tecnology</a>
                    <a href="/">Students</a>
                    <a href="/">Community</a>
                    <a href="/">Carreers</a>
                    <a href="/">Literature</a>
                    <a href="/">Seminars</a>
                </div>
            </div>
            
        </aside>
    )
}

export default WidgetComponent;