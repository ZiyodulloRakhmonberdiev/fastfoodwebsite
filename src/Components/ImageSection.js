import React from 'react';
import styled from 'styled-components';
import resume from '../images/port.jpg';
import PrimaryButton from './PrimaryButton';
function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="resume photo" />
            </div>
            <div className="right-content">
                <div className="sub-title">
                    <h4>I am <span>Ziyodullo</span></h4>
                    <div className="about-info">
                        <div className="info-title">
                            <p>Full Name</p>
                            <p>Age</p>
                            <p>Nationality</p>
                            <p>Languages</p>
                            <p>Location</p>
                            <p>Services</p>
                        </div>
                        <div className="info">
                            <p>: Ziyodullo Rakhmonberdiev</p>
                            <p>: 20</p>
                            <p>Uzbek</p>
                            <p>Uzbek, English, Russian</p>
                            <p>Ferghana, Tashkent, Uzbekistan</p>
                            <p>Freelance</p>
                        </div>
                        <div className="label">
                            <div>
                                <h6>Full Name :</h6>
                                <p>  Ziyodullo Rakhmonberdiev</p>
                            </div>
                            <div>
                                <h6>Age :</h6>
                                <p>  20</p>
                            </div>
                            <div>
                                <h6>Nationality :</h6>
                                <p> Uzbek</p>
                            </div>
                            <div>
                                <h6>Languages :</h6>
                                <p> Uzbek, Russian, English</p>
                            </div>
                            <div>
                                <h6>Location :</h6>
                                <p>Ferghana, Tashkent, Uzbekistan</p>
                            </div>
                            <div>
                                <h6>Services :</h6>
                                <p> Freelance</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <PrimaryButton title={'Download CV'} /> 
            </div>
        </ImageSectionStyled>    
    )
}
const ImageSectionStyled = styled.div`
    display: flex;
    margin-top: 1rem;
    .left-content{
        width: 50%;
        img{
            width: 80%;
            height: 100%;
            object-fit: cover;
        }
    }
    .right-content{
        .label{
            display: none;
            @media screen and (max-width: 360px){
                display: block  ;
            }
        }
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .about-info{
            padding-bottom: 1.4rem;
            display: flex;
            
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title , .info{
                @media screen and (max-width: 360px){
                display: none  ;
            }
                p{
                    padding: .3rem 0;
                }  
            }
        }
    }
    @media screen and (max-width: 992px){
        display: flex;
        flex-direction: column;
        .left-content{
            width: 100%;
            img{
                width: 100%;
            }
        }
        .right-content{
            width: 100%;
        }
    }
    
`;
export default ImageSection
