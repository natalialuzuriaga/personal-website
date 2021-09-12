import React from 'react';
import styled from 'styled-components';
import ImageSection from '../components/ImageSection';
import Title from '../components/Title';
import { MainLayout } from '../styles/Layouts';
import InterestsSection from '../components/InterestsSection';

function AboutPage() {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={'About Me'} span={'About Me'}/>
                <ImageSection/>
                <InterestsSection/>
            </AboutStyled>
        </MainLayout>
    )
}

const AboutStyled = styled.section`

`;

export default AboutPage