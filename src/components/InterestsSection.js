import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts'; 
import Title from '../components/Title';
import InterestCard from './InterestCard';
import website from '../img/website.svg'
import phone from '../img/phone.svg'
import education from '../img/education.svg'

function InterestsSection() {
    return (
        <InnerLayout>
            <InterestsSectionStyle>
                <Title title={'Interests'} span ={'interests'}/>
                <div className="interests">
                    <InterestCard
                        image={website}
                        title={'Frontend Development'}
                        paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                    />

                <div className="mid-card">
                    <InterestCard
                        image={phone}
                        title={'Mobile Development'}
                        paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                    />
                </div>
                <InterestCard
                        image={education}
                        title={'Education'}
                        paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                    />
                </div>
            </InterestsSectionStyle>
        </InnerLayout>
    )
}

//<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
//<div>Icons made by <a href="" title="Nhor Phai">Nhor Phai</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
//<div>Icons made by <a href="https://www.flaticon.com/authors/geotatah" title="geotatah">geotatah</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

const InterestsSectionStyle = styled.section`
    .interests {
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width: 1000px) {
            flex-direction: column;
        }
        @media screen and (max-width: 950px) {
            flex-direction: repeat(2, 1fr);
        }
        @media screen and (max-width: 650px) {
            flex-direction: repeat(1, 1fr);
        }
    }
`;

export default InterestsSection;