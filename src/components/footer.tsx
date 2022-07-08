import styled from "styled-components";

export const Footer = (props?: any) => <StyledFooter {...props}>{props.children}</StyledFooter>

const StyledFooter = styled.footer<any>`
    display: flex;
    width: 100%;
    flex: 1;
    margin-top: 2rem;
    padding: 1rem 0;
    border-top: 1px solid #eaeaea;
    justify-content: center;
    align-items: center;
`;
