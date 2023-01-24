import React from 'react';
import styled from 'styled-components';
import Particle from '../components/Particle';
import InstagramIcon from '@material-ui/icons/Instagram';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedinIcon from '@material-ui/icons/LinkedIn';

function HomePage(){
    return(
        <HomePageStyle>
            <div className="particle-container">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hey! </h1>
                <h1>I'm <span>Natalia Luzuriaga</span></h1>
                <p>
                👩🏻‍💻 4th Year Computer Science Student at UCLA 👩🏻‍💻
                </p>
                <p>
                🥯 Originally from New Jersey 🥯
                </p>
                <p>
                🍟 French Fry Enthusiast 🍟
                </p>
                <div className="icons">
                    <a href="https://instagram.com/nataleeyaa" className="icon i-instagram">
                        <InstagramIcon />
                    </a>
                    <a href="https://github.com/natalialuzuriaga" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://linkedin.com/in/natalialuzuriaga" className="icon i-linkedin">
                        <LinkedinIcon />
                    </a>
                </div>
            </div>
        </HomePageStyle>
    )
}

const HomePageStyle = styled.header`
    width: 100%;
    height: 100vh;

    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
    }

    .icons{
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        .icon{
            border: 2px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all .4s ease-in-out;
            cursor: pointer;
            &:not(:last-child){
                margin-right: 1rem;
            }
            svg{
                margin: .5rem;
            }
        }
        .i-instagram{
                &:hover{
                    border: 2x solid #5f4687;;
                    color: var(--primary-color);
                }
            }
            .i-github{
                &:hover{
                    border: 2x solid #5f4687;
                    color: var(--primary-color);
                }
            }
            .i-linkedin{
                &:hover{
                    border: 2x solid #5f4687;;
                    color: var(--primary-color);
                }
            }
    }
`;

export default HomePage;