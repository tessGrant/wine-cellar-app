import styled from "styled-components";

interface TextProps {
    title?: boolean;
    subtitle?: boolean;
    left?: boolean;
    centered?: boolean;
    right?: boolean;
    logotitle?: boolean;
    logosubtitle?: boolean;
    children: string;
};

export default function Text(props: TextProps) {
    return (
        <StyledText {...props}>{props?.children}</StyledText>
    )
};

const StyledText = styled.div<TextProps>`
    ${props => props.logosubtitle && `font-size: 2rem`};
    ${props => props.logotitle && `
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
        font-family: 'The Nautigal', cursive;
    `};
`;