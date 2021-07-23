import React from 'react'
import styled from 'styled-components'
import {InnerLayout} from '../styles/Layout'
import ReviewsItem from './ReviewsItem'
import Title from './Title'
function ReviewsSection() {
    return (
            <ReviewsSectionStyled>
                <Title title={'Review'} span={'Review'} />
                <InnerLayout>
                    <div className="reviews">
                        <ReviewsItem text={'Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title '}/>
                        <ReviewsItem text={'Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title '}/>
                    </div>
                    
                </InnerLayout> 
            </ReviewsSectionStyled>
    )
}
const ReviewsSectionStyled = styled.section`
    .reviews{
        display: flex;
    }

`;
export default ReviewsSection
