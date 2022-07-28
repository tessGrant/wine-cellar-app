import styled from "styled-components";

interface TextProps {
    heading?: boolean;
    subtitle?: boolean;
    left?: boolean;
    centered?: boolean;
    right?: boolean;
    logotitle?: boolean;
    logosubtitle?: boolean;
    logosmall?: boolean;
    children: string;
    bodyText?: boolean;
};

export default function Text(props: TextProps) {
    return (
        <StyledText {...props}>{props?.children}</StyledText>
    )
};

const StyledText = styled.div<TextProps>`
    ${props => props.logosubtitle && `font-size: 1.5rem`};
    ${props => props.bodyText && `font-size: 1rem`};
    ${props => props.logosmall && 
        `font-size: 2rem;
        font-family: 'The Nautigal', cursive;`};
    ${props => props.logotitle && `
        margin: 0;
        line-height: 1.15;
        font-size: 7rem;
        font-family: 'The Nautigal', cursive;
    `};
`;