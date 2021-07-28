import React from 'react'
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';

function Menu({menuItem}) {
    return (
       <MenuStyled>
           {
               menuItem.map((item)=> 
               
                <div className="grid-item">
                <div className="portfolio-content">
                    <div className="portfolio-image">
                    <img src={item.image} />
                    <ul>
                        <li><a href={item.link1} target="_blank"><GitHubIcon /></a></li>
                        <li><a href={item.link2} target="_blank"><LanguageIcon /></a></li>
                    </ul>
                </div>
                <h6>{item.title}</h6>
                <p>{item.text}</p>
                </div>
            </div>
              
               
            )
           }
           
       </MenuStyled> 
    )
}
const MenuStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    @media screen and (max-width: 992px){
        grid-template-columns: repeat(2, 1fr)
    }
    @media screen and (max-width: 500px){
        grid-template-columns: repeat(1, 1fr)
    }
    .grid-item{
        .portfolio-content{
            display: block;
            position: relative;
            overflow: hidden;
            h6{
                font-size: 1.5rem;
            }
            img{
                width: 100%;
                height: 30vh;
                object-fit: cover;
            }
            ul{
                position: absolute;
                transform: translateY(-1000px) ;
            }
            .portfolio-image:hover{
                &:before{
                    content: " ";
                    position: absolute;
                    left: 2%;
                    top: 4%;
                    background-color: var(--white-color);
                    height: calc(100% - 50% );
                    width: calc(100% - 5%);
                    transform-origin: left;
                    opacity: .7;
                    transition: .4s ease;
                }
                ul{
                    display: flex;
                    position: absolute;
                    top: 30%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    li{
                        background-color: var(--border-color);
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 3rem;
                        height: 3rem;
                        margin-left: .5rem;
                        transition: .4s ease;
                        &:hover{
                            svg{
                                color: var(--white-color);
                            }
                        }
                        &:hover{
                            background-color: var(--primary-color);
                        }
                        a{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            svg{
                                font-size: 2rem;

                            }
                        }
                    }

                }
            }
            .portfolio-image{
                &:before{
                    content: " ";
                    position: absolute;
                    left: 2%;
                    top: 4%;
                    background-color: var(--white-color);
                    height: 0;
                    width: 0;
                    opacity: .9;
                    transition: .4s ease;
                }
            }
        }
    }
`;
export default Menu
