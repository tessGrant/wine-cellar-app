import React from 'react'
import styled from 'styled-components';

interface ButtonProps {
    iconbtn?: React.ReactNode;
    buttontext?: string;
    children?: React.ReactNode;
    onClick?: () => void;
    primary?: boolean;
    type?: 'submit' | 'reset' | 'button';
}

export const Button = (props: ButtonProps) => {
    return (
        <StyledButton {...props}>
            {props.iconbtn && props.iconbtn}
            {props.children}
        </StyledButton>)
};

const BaseButton = styled.button<ButtonProps>`
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: 18px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    `;

const StyledButton = styled(BaseButton)<ButtonProps>`
    ${props => props.iconbtn && `
        width: 95px; 
        height: fit-content; 
        color: #2D71FA;
        :hover,
        :active {
            color: #F88181;
            border: none;
        }
    `};
    ${props => props.primary && `
        width: 100px; height: 30px;
        :hover,
        :active {
            color: red;
            border: 1px solid;
            border-color: #0070f3;
        }
    `};
`;
