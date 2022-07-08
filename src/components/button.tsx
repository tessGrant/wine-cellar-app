import React from 'react'
import styled, { css } from 'styled-components';

interface ButtonProps {
    iconbtn?: React.ReactNode;
    children?: React.ReactNode;
    onClick: () => void;
    left?: boolean;
    right?: boolean;
    centered?: boolean;
}

export default function Button(props: ButtonProps) {
    return (
        <StyledBtnContainer {...props}>
            <StyledButton {...props}>
                {props.iconbtn && props.iconbtn }
                {props.children}
            </StyledButton>
        </StyledBtnContainer>)
};

const BaseButton = styled.button<ButtonProps>`
    border: none;
    background-color: transparent;
`;

const StyledBtnContainer = styled.div<ButtonProps>`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    flex-direction: row;
    ${props => props.left && `justify-content: flex-start`};
    ${props => props.right && `justify-content: flex-end`};
    ${props => props.centered && `justify-content: center`};
`;

const StyledButton = styled(BaseButton)<ButtonProps>`
    ${props => props.iconbtn && `
        width: 30px;
        height: 30px;
    `};
`;