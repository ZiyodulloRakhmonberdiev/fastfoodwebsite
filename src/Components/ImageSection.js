import React from 'react';
import styled from 'styled-components';
import resume from '../images/resume.jpg';
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
                            <p>Tashkent, Uzbekistan</p>
                            <p>Freelance</p>
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
                /* padding: 1rem; */
                p{
                    padding: .3rem 0;
                }  
            }
        }
    }
`;
export default ImageSection
