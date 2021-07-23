import React from 'react'
import styled from 'styled-components'

function PrimaryButton({title}) {
    return (
        <PrimaryButtonStyled>
            {title}
        </PrimaryButtonStyled>
    )
}
const PrimaryButtonStyled = styled.a`
    background-color: var(--primary-color);
    padding: .8rem 2.5rem;
    color: var(--white-color);
    display: inline-block;
    font-size: inherit;
    cursor: pointer;
    position: relative;
    transition: .4s ease;
    &::after{
        transition: .4s ease;
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0%;
        height: 0%;
        background-color: var(--background-light-color);
        opacity: .7;
    }
    &:hover::after{
        width: 100%;
        height: 10%;
        
    }
`;
export default PrimaryButton
