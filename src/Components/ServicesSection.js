import React from 'react'
import styled from 'styled-components'
import {InnerLayout} from '../styles/Layout' 
import ServiceCard from './ServiceCard'
import Title from './Title';
import design from '../images/svg/cod.png'
function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'services'} span={'services'} />
                <div className="services">
                    <ServiceCard 
                    image={design}
                    title={'Web Design'} 
                    paragraph={'Lorem ipsum dolor sit amet balo battar'}
                    />
                    <ServiceCard 
                    image={design}
                    title={'Web Design'} 
                    paragraph={'Lorem ipsum dolor sit amet balo battar'}
                    >
                    </ServiceCard>
                    <ServiceCard 
                    image={design}
                    title={'Web Design'} 
                    paragraph={'Lorem ipsum dolor sit amet balo battar'}
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
        display: flex;
        justify-content: space-between;
    }
`;
export default ServicesSection
