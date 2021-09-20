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
                        paragraph={'This type of development gives me so much freedom to be creative! I enjoy being able to put any of my ideas into digital form and experimenting with a blank canvas!'}
                    />

                <div className="mid-card">
                    <InterestCard
                        image={phone}
                        title={'Mobile Development'}
                        paragraph={'Love how phones unlocks tons of increased functionality such as using the camera/microphone to working with location-based data. With millions having smartphones, this type of development is more accessible and reaches many potential users!'}
                    />
                </div>
                <InterestCard
                        image={education}
                        title={'Education'}
                        paragraph={'Not only do I love crafting my own lesson plans and workshops but I love interacting with students and seeing them grow fascinated with a new subject they have never been exposed too!'}
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