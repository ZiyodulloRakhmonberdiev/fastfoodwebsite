import React from 'react'
import styled from 'styled-components'
import {InnerLayout} from '../styles/Layout' 
import ServiceCard from './ServiceCard'
import Title from './Title';
import design from '../images/svg/cod.png'
import figma from '../images/figma.png'
import ps from '../images/ps.png'
function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'services'} span={'services'} />
                <div className="services">
                    <ServiceCard 
                    image={design}
                    title={'Web Programming'} 
                    paragraph={'Front-End programming through the React library'}
                    />
                    <ServiceCard
                    image={figma}
                    title={'Web Design'} 
                    paragraph={'Creating a web design using a Figma program'}
                    >
                    </ServiceCard>
                 
                    <ServiceCard
                    image={ps}
                    title={'Graphic Design'} 
                    paragraph={'Graphic design using Adobe software'}
                    >
                    </ServiceCard>
                 

                </div>
            </ServicesSectionStyled>
        </InnerLayout>    
    )
}
const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        @media screen and (max-width: 650px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;
export default ServicesSection
