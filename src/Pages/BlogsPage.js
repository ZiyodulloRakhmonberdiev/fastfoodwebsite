import React from 'react'
import styled from 'styled-components'
import blogs from '../data/blogs'
import Title from '../Components/Title'
import {MainLayout} from '../styles/Layout'
function BlogsPage() {
    return (
        <MainLayoty>
            <BlogsPageStyle> 
        <Title title="blogs" title="blogs" />

            {   
                blogs.map((event) => {
                    const {id, title, image} = blogs;
                    return 
                    <div key={event.id}>
                        <div className="image" className={'event'}>
                            <img src={event.image} alt=" " />
                        </div>
                        <div className="title">
                            <h4>
                                {event.title}
                            </h4>
                        </div>

                    </div>
                })
            }
        </BlogsPageStyle>
        </MainLayoty>
    )
}
const BlogsPageStyle = styled.div`

`;
export default BlogsPage
