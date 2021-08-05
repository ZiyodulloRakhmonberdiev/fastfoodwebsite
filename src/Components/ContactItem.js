import React from 'react';
import styled from 'styled-components'

function ContactItem({icon, title, contact, contact2}) {
    return (
        <ContactItemStyled>
            <div className="left-content">
                {icon}
            </div>
            <div className="right-content">
                <h6>{title}</h6>
                <p>{contact}</p>
                <p>{contact2}</p>
            </div>
        </ContactItemStyled>
    )
}
const ContactItemStyled = styled.div`
    padding: 1.5rem 2rem;
    background-color: var(--background-dark-grey);
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    &:first-child{
        margin-top: 6rem;
    }
    .left-content{
        padding: 1rem;
        margin-right: 1rem;
        border: 1px solid var(--border-color);
        @media screen and (max-width: 650px){
            padding: 1rem;
            margin-right: 1rem;
            }
        svg{
            font-size: 2.3rem;
            @media screen and (max-width: 650px){
                font-size: 1.5rem;
            }
        }
    }
    .right-content{
        h6{
            color: var(--white-color);
            font-size: 1.2rem;
            padding-bottom: .4rem;
        }
    }
`; 
export default ContactItem
