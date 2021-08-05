import React from 'react'
import styled from 'styled-components'

function Title({title, span}) {
    return (
        <TitleStyled>
            <h2>{title} <span>{span}</span></h2>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    position: relative;
    h2{
        color: var(--white-color);
        font-size: 2.8rem;
        font-weight: 600;
        position: relative;
        text-transform: uppercase;
        padding-bottom: .8rem;
        @media screen and (max-width: 1200px){
            padding-top: 3rem; 
        }
        @media screen and (max-width: 450px){
            font-size: 2.4rem;
        }
        @media screen and (max-width: 400px){
            width: 100%;
            font-size: 2rem;
        }
        &::before{
            content: " ";
            position: absolute;
            bottom: 0;
            width: 3.4rem;
            height: 0.33rem;
            background-color: var(--background-light-color-2);
            border-radius: 15px;
            left: 3.4rem;

        }
        &::after{
            content: " ";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 3.4rem;
            height: 0.33rem;
            background-color: var(--primary-color);
            border-radius: 15px;

        }
        span{
            position: absolute;
            top: 15%;
            left: 5%;    
            font-weight: 600;
            color: var(--span-color);
            font-size: 3.8rem;
            z-index: -1;
            opacity: 0.3;
            @media screen and (max-width: 650px){
               font-size: 4rem;
            @media screen and (max-width: 450px){
               font-size: 3rem;
            @media screen and (max-width: 400px){
               font-size: 1rem;
    }

        }
    }
`;
export default Title
