import React from 'react';
import styled from 'styled-components';
function Button({button, filter}) {
    return (
        <ButtonStyled>
            {
                button.map((but, i) => 
                    
                    <ButtonsStyled key={i} onClick={() => filter(but)}>
                        {but}
                    </ButtonsStyled>
                )
            }
        </ButtonStyled>
        
    )
}
const ButtonsStyled = styled.button`
    outline: none;
    border: none;
    background-color: var(--background-light-color-2);
    padding: .4rem 2rem;
    cursor: pointer;
    transition: .4s ease;
    &:hover{
        background-color: var(--primary-color);
    }
    &:active, &:focus{
        background-color: var(--primary-color);
    }
    &:not(:last-child){
        margin  : .6rem;
    }

`;
const ButtonStyled = styled.div`
    margin: 2.4rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 70%;
    `;
export default Button
