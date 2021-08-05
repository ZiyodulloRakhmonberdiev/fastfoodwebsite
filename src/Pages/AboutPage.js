import React from 'react';
import styled from 'styled-components';
import {MainLayout} from '../styles/Layout';
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';
import ServicesSection from '../Components/ServicesSection';

function AboutPage() {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={'About Me'} span={'about me'} />
                <ImageSection />
                <ServicesSection />
            </AboutStyled>
        </MainLayout>    
    )
}

const AboutStyled = styled.section`
`;
export default AboutPage
