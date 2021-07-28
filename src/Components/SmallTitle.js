import React from 'react'
import styled from 'styled-components'

function SmallTitle({icon, title}) {
    return (
        <SmallTitleStyled>
            <p>{icon}</p>
            <h3>{title}</h3>
        </SmallTitleStyled>
    )
}
const SmallTitleStyled = styled.div`
    display: flex;
    align-items: center;
    &:not(:first-child){
        margin-top: 4rem;
    }
    p{
        padding-right: 1rem;
        svg{
            font-size: 3rem;
        }
    }
    h3{
        font-size: 2rem;
        color: var(--white-color);

    }

`;
export default SmallTitle
