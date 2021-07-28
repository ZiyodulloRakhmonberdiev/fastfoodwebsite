import React from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
import YouTubeIcon from '@material-ui/icons/YouTube';
function HomePage() {
    return (
        <HomePageStyled>
             <div className="p-particles-js">
                <Particles />
            </div>
            <div className="typography">
                <h1>Hi, I'm  <span>Ziyodullo Rakhmonberdiev</span></h1>
                <p>
                Hello there. I am a Web Programmer, Web and Graphic Designer. You have the opportunity to get acquainted with my work through the site. If you have an offer or order, you can contact me through the following social networks. Before you get in touch, pay attention to what field I work in. I wish you an interesting day / night. Sincerely, Ziyodullo Rakhmonberdiev    
                </p>
                <div className="icons">
                    <a target="_blank" href="https://www.facebook.com/ziyodullo.rakhmanberdiyev/" className="icon facebook">
                        <FacebookIcon />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/ziyodillo808/" className="icon instagram">
                        <InstagramIcon />
                    </a>
                    <a target="_blank" href="https://github.com/ZiyodulloRakhmonberdiev" className="icon github">
                        <GitHubIcon />
                    </a>
                    <a target="_blank" href="https://t.me/ziyodullorakhmonberdiev" className="icon telegram">
                        <TelegramIcon />
                    </a>
                    <a target="_blank" href="https://www.youtube.com/" className="icon youtube">
                        <YouTubeIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    .p-particles-js{
        top: 0;
        left: 0;
        @media screen and (max-width: 992px){
            display: none;
        }
    }
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
        @media screen and (max-width: 360px){
                h1{
                    font-size: 1.5rem;

                    span{
                        font-size: 1.5rem;
                    }
                }
            }
        .icons{
            display: flex;
            margin-top: 2rem;
            justify-content: center;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                border-radius: 50%;
                cursor: pointer;
                transition: .4s ease;
                &:hover{
                    border-color: var(--primary-color);
                    color:var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem ;
                }
            }
            .youtube{
                &:hover{
                    border-color: red;
                    color: red;
                }
            }
            .instagram{
                &:hover{
                    border-color: #F73583;
                    color: #F73583;
                }
            }
            .github{
                &:hover{
                    border-color: #5f4687;
                    color: #5f4687;
                }
            }
        }
    }
`;
export default HomePage
