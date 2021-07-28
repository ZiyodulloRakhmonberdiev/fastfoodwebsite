import React from 'react'
import styled from 'styled-components'
import blogs from '../data/blogs'
import Title from '../Components/Title'
import {InnerLayout, MainLayout} from '../styles/Layout'
import YouTubeIcon from '@material-ui/icons/YouTube';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import LanguageIcon from '@material-ui/icons/Language';

function BlogsPage() {
    return (
        <MainLayout>
            <BlogsPageStyle> 
                <Title title="blogs" title="blogs" />
                <InnerLayout className={'event'}>       
            {   
                blogs.map((event) => 
                    <div key={event.id} className={'blog'}>
                        <div className="image" >
                            <img src={event.image} alt=" "  className="img" />
                            <div className="links">
                                <a href={event.youtube} target='_blank'><YouTubeIcon  className="icon youtube"/></a>
                                <a href={event.telegram} target='_blank'><TelegramIcon  className="icon telegram"/></a>
                                <a href={event.instagram} target='_blank'><InstagramIcon  className="icon instagram"/></a>
                            </div>
                        </div>
                        <div className="title">
                            <a href={event.web} target='_blank'>
                                {event.title}
                            </a>
                        </div>

                    </div>
                )
            }
                </InnerLayout>
            
            </BlogsPageStyle>
        </MainLayout>
    )
}

const BlogsPageStyle = styled.div`
    .event{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        grid-row-gap: 3rem;
        @media screen and (max-width: 650px){
            grid-template-columns: repeat(1, 1fr);
        }
        .blog{
            border-radius: 5px;
            background-color: var(--background-dark-grey);
            padding: 2rem 1rem;
        }

        .image{
            position: relative;
            width: 100%;
            overflow: hidden;
            padding-bottom: .5rem;
            transition: .4s;

            &:hover .links{
                    display: flex;
                    align-items: center;
                    transition: .4s;
                    flex-direction: column;
                }
            .links{
                padding: .3rem .6rem;
                border-radius: 5px;
                background-color: var(--background-dark-color);
                display: none;
                position: absolute;
                top: 1%;
                left: 10%;
                transform: translate(-50%);
                .icon{

                    font-size: 1.5rem;
                    padding-top: 0.2rem;
                    transition: .4s;
                    &:hover{
                        transform: scale(1.1);
                    }
                    
                }
                .youtube{
                    &:hover{
                        color: red;
                    }
                }
                .telegram{
                    &:hover{
                        color: var(--primary-color);
                    }
                                        
                }
                .instagram{
                    &:hover{
                        color: #F73583;
                    }
                                        
                }
            }
            img{
                cursor: pointer;    
                width: 100%;
                height: 90%;
                transition: .4s ;   
            }
        }
    .title{
        a{
            color: var(--white-color);
            transition: .4s ;
            &:hover{
                color: var(--primary-color);
            }
        }
    }
    }
`;
export default BlogsPage
