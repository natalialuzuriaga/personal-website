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
                <h4> I am <span>Natalia Luzuriaga</span></h4>
                <p className="paragraph">
                    Hi there, I'm Natalia Luzuriaga. I'm a third year student studying Computer Science and Public Affairs at UCLA. 
                    I enjoy front-end development, both web and mobile
                </p>
                <div className ='about-info'>
                    <div className='info-title'>
                        <p>Full Name: </p>
                        <p>University: </p>
                        <p>Graduation Date: </p>
                        <p>Nationality: </p>
                        <p>Languages: </p>
                        <p>Location: </p>
                    </div>
                    <div className='info'>
                        <p>Natalia Luzuriaga</p>
                        <p>University of California, Los Angeles (UCLA)</p>
                        <p>June 2023</p>
                        <p>Filipino-American</p>
                        <p>English</p>
                        <p>Los Angeles, California</p>
                    </div>
            </div>
            <div>
                <PrimaryButton title={"Download Resume"}/>
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