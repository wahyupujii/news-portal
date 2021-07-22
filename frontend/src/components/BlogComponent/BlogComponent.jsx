import React from 'react';

const BlogComponent= () => {
    return(
        <article className="blog fadeIn">
            <div className="row no-gutters">
                <div className="col-lg-7">
                    <figure>
                        <a href="blog-post.html"><img src="https://placeimg.com/800/533/arch" alt=""/>
                            <div className="preview"><span>Read more</span></div>
                        </a>
                    </figure>
                </div>
                <div className="col-lg-5">
                    <div className="post_info">
                        <small>20 Nov. 2017</small>
                        <h3><a href="blog-post.html">Nec nihil menandri appellantur ut</a></h3>
                        <p>Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.</p>
                        <ul>
                            <li>
                                <div className="thumb"><img src="img/thumb_blog.jpg" alt=""/></div> Jessica Hoops
                            </li>
                            <li><i className="icon_comment_alt"></i> 20</li>
                        </ul>
                    </div>
                </div>
            </div>
        </article>
    )
};

export default BlogComponent;