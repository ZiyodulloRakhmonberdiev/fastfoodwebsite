import React from 'react'
import styled from 'styled-components'

function ProgressBar({title, width, text}) {
    return (
        <ProgressBarStyled>
            <h6>{title}</h6>
            <div className="progress-bar">
                <p>{text}</p>
                <div className="progress">
                    <span style={{width: width}}></span>
                </div>
            </div>
        </ProgressBarStyled>
    )
}
const ProgressBarStyled = styled.div`
    .progress-bar{
        display: flex;
        align-items: center;
        padding-right: 1.1rem;
        .progress{
            position: relative; 
            width: 100%;
            height: 0.4rem;
            margin-left: .5rem;
            background-color: var(--border-color);
            span{
                border-radius: 5px;
                height: 100%;
                position: absolute;
                bottom: 0;
                left: 0;
                background-color: var(--primary-color);
            }
        }
    }
`;
export default ProgressBar
