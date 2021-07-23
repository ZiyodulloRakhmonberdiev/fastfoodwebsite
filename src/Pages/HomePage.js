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
                {/* <Particles /> */}
            </div>
            <div className="typography">
                <h1>Hi, I'm  <span>Ziyodullo Rakhmonberdiev</span></h1>
                <p>
                Ingliz tilidan tarjima qilingan-Google Fonts - bu mingdan ortiq bepul va ochiq kodli shriftlar oilasi, kutubxonani ko'rib chiqish uchun interaktiv veb-katalog va shriftlardan CSS va Android orqali foydalanish uchun API. Veb-sayt 135 dan ortiq tillarda mavjud
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
        position: absolute;
        top: 0;
        left: 0;
    }
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
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
