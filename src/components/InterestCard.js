import React from 'react'
import styled from 'styled-components'

function InterestCard({image, title, paragraph}) {
    return (
        <InterestCardStyle>
            <div className ="card">
                <img src={image} alt=""/>
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </InterestCardStyle>
    )
}

const InterestCardStyle = styled.div`
    background-color: var(--background-dark-gray);
    border-left: 1px solid var(--border-color);
    border-top: 8px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    transition: all .4 ease-in-out;

    &:hover {
        border-top: 8px solid var(--primary-color);
        transform: translateY(3px);
    }
    .card {
        padding: 1.2rem;
        h4 {
            color: var(--white-color);
            font-size: 1.6rem;
            padding: 1rem 0;
            position: relative;
            &::after {
                content: "";
                width: 4rem;
                background-color: var(--border-color);
                height: 3px;
                position: absolute;
                left: 0;
                bottom: 0;
                border-radius: 10px;
            }
        }
        p {
            padding: .8rem 0;
        }
        img {
        width: 50%;
        height: 50%;
        color: var(--white-color);
    }
    }
`;

export default InterestCard;