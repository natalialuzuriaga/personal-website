import React from 'react';
import styled from 'styled-components';

function Button({filter, button}) {
    return (
        <ButtonsStyle>
            {
                button.map((but, i) => {
                    return <ButtonStyle 
                                key={i} 
                                onClick={() => filter(but)}>
                            {but}
                            </ButtonStyle>
                })
            }
        </ButtonsStyle>
    )
}

const ButtonsStyle = styled.button`
    outline: none;
    border: none;
    background-color: var(--background-light-color-2);
    padding: .4rem 2rem;
    font-size: inherit;
    color: var(--white-color);
    cursor: pointer;
    transition: all .4s ease-in-out;
    margin-bottom: .6rem;
    &:active, &:focus {
        background-color: var(--primary-color);
    }
    &:hover {
        background-color: var(--primary-color);
    }
    &::not(:last-child){
        margin-right: .6rem;
    }
`;

const ButtonStyle = styled.button`
    outline: none;
    border: none;
    background-color: var(--background-light-color-2);
    padding: .4rem 2rem;
    font-size: inherit;
    color: var(--white-color);
    cursor: pointer;
    transition: all .4s ease-in-out;
    margin-bottom: .6rem;
    &:active, &:focus {
        background-color: var(--primary-color);
    }
    &:hover {
        background-color: var(--primary-color);
    }
    &:not(last-child) {
        margin-right: .6rem;
    }
`;

export default Button;