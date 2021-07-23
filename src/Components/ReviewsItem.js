import React from 'react'
import styled from 'styled-components'

function ReviewsItem({text}) {
    return (
        <ReviewsItemStyled>
            <p>{text}</p>
        </ReviewsItemStyled>  
    )
}
const ReviewsItemStyled = styled.div`
    padding: 1rem 1rem;
    border-left: 6px solid var(--border-color);
    background-color: var(--background-dark-grey);
    position: relative;
    width: 50%;
    display: flex;
    align-items: center;
    &:not(:first-child){
        margin-left: 1rem;
    }
    &::after{
        content: " ";
        position: absolute;
        top: 100%;
        left: 2rem;
        border-width: .8rem;
        border-style: solid;
        border-color: var(--background-dark-grey) transparent transparent var(--background-dark-grey) ;
    }
    p{
        padding: 0rem 0;
    }
`;
export default ReviewsItem
