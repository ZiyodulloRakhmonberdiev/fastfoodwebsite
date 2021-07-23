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
        text-transform: uppercase;
        position: relative;
        padding-bottom: .8rem;
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
            color: rgba(25, 29, 43, .95);
            font-size: 3.8rem;
            z-index: -1;

        }
    }
`;
export default Title
