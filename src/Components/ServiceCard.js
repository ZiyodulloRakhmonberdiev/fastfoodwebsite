import React from 'react'
import styled from 'styled-components'

function ServiceCard({image, title, paragraph}) {
    return (
        <ServiceCardStyled>
            <div className="container">
                <div className="img"><img src={image}></img></div>
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </ServiceCardStyled>
    )
}
const ServiceCardStyled = styled.div`
    background-color: var(--background-dark-grey);
    margin: 0 1rem;
    border-top: 8px solid var(--border-color);
    transition: .4s ease;
    &:hover{
        border-top: 8px solid var(--primary-color);
        transform: translateY(3px);
    }
    .container{
        padding: 1rem;
        h4{
            font-size: 1.2rem;
            color: var(--white-color);
            padding-bottom: 0.5rem ;
            position: relative;
            &::after{
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                height: 0.1rem;
                width: 30%;
                border-radius: 1rem;
                background-color: var(--border-color);
            }
        }
        p{
            padding-top: 0.5rem ;
        }
        .img{
            width: 100px;
            color: var(--primary-color);
            /* background-color: var(--primary-color); */
            img{
                width: 100%;
            }
        } 
    }
`;

export default ServiceCard
