import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import { MainLayout } from '../styles/Layouts';

function AboutPage() {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={'About Me'} span={'About Me'}/>
            </AboutStyled>
        </MainLayout>
    )
}

const AboutStyled = styled.section`

`;

export default AboutPage