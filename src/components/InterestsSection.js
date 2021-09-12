import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts'; 
import Title from '../components/Title';

function InterestsSection() {
    return (
        <InnerLayout>
            <InterestsSectionStyle>
                <Title title={'Interests'} span ={'interests'}/>
            </InterestsSectionStyle>
        </InnerLayout>
    )
}

const InterestsSectionStyle = styled.section`

`;

export default InterestsSection;