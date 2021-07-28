import React from 'react';
import styled from 'styled-components';
import {MainLayout, InnerLayout} from '../styles/Layout';
import ProgressBar from './ProgressBar';
import Title from './Title'
function Skills() {
    return (
        <SkillsStyled>
                <Title title={'My Skills'} span={'My Skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar
                            title={'HTML 5'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar
                            title={'CSS 3'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar
                            title={'JAVASCRIPT'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar
                            title={'REACT JS'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar
                            title={'JQUERY'}
                            width={'50%'}
                            text={'50%'}
                        />
                        <ProgressBar
                            title={'FIGMA'}
                            width={'70%'}
                            text={'70%'}
                        />
                    </div>
                </InnerLayout>

        </SkillsStyled>        
    )
}
const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 2rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;
export default Skills
