import React from 'react'
import styled from 'styled-components';
import PrimaryButton from '../components/PrimaryButton';
import avatar from '../img/avatar.jpg';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className='left-content'>
                <img src={avatar} alt=""/>
            </div>
            <div className='right-content'>
                <h3><span>Natalia Luzuriaga</span></h3>
                <p className="paragraph">
                    I'm a third year student studying Computer Science and Public Affairs at UCLA. As a previous user of hearing aids, I owe it all to assistive technologies for enhancing my quality of life. I aspire to become a software engineer to create technologies that help others just like with what hearing aids have done to myself and the hearing-impaired community.
                </p>
                <div className ='about-info'>
                    <div className='info-title'>
                        <p>School: </p>
                        <p>Graduation Date: </p>
                        <p>Background: </p>
                        <p>Location: </p>
                    </div>
                    <div className='info'>
                        <p>University of California, Los Angeles (UCLA)</p>
                        <p>June 2023</p>
                        <p>Filipino-American from NJ</p>
                        <p>Los Angeles, CA</p>
                    </div>
            </div>
            
            <div>
                <PrimaryButton title={"Download Resume"} link={'https://tinyurl.com/natalialuzuriagaresume'}/>
            </div>
        </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    .left-content {
        width: 100%;
        img {
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span {
                font-size: 2rem;
            }
        }
        .paragraph {
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title {
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info {
                p {
                    padding: .3rem 0;
                }
            }
        }
    }

`;

export default ImageSection;