import React from 'react'
import styled from 'styled-components'

function ResumeItem({year, title, subtitle, text}) {
    return (
        <ResumeItemStyled>
            <div className="left-content">{year}</div>
            <div className="right-content">
                <h5>{title}</h5>
                <h6>{subtitle}</h6>
                <p>{text}</p>
            </div>
        </ResumeItemStyled>
    )
}
const ResumeItemStyled = styled.div`
    display: flex;
    margin-bottom: 2rem;
    @media screen and (max-width: 560px){
        flex-direction: column;
    }
    .left-content{
        @media screen and (max-width: 560px){
            width: 100%;
            padding: 1rem;
    }
        width: 50%;
        position: relative;
        &::before{
            content: " ";
            position: absolute; 
            top: 0;
            left: -1.6rem;
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            background-color: var(--background-dark-color);
            border: 2px solid var(--border-color);
        }
        p{
            display: inline-block;
        }
    }
    .right-content{
        @media screen and (max-width: 560px){
            width: 100%;
    }
        
        width: 100%;
        position: relative;
        @media screen and (max-width: 992px){
                &::before{
                    display: none;
                }
            }
        &:before{
            position: absolute;
            content: " ";
            background-color: var(--border-color);
            height: 1px;
            width: 3rem;
            top: 15px;
            left: -12%;
           
        }
        h5{
            color: var(--primary-color);
            font-size: 1.6rem;
            padding-bottom: .4rem;
        }
        h6{
            font-size: 1.2rem;
            padding-bottom: .6rem;
        }
        p{
            font-size: 0.7rem;
        }
    }

`;
export default ResumeItem
