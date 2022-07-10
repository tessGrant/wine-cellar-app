import styled from "styled-components";
import Text from 'src/components/text';

export const Footer = (props?: any) => <StyledFooter {...props}>
    <Text logosmall>Wine Cellar App</Text>
    {props.children}</StyledFooter>

const StyledFooter = styled.footer<any>`
    height: 80px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 1rem;
    padding: 0.5rem 0;
    border-top: 1px solid #eaeaea;
    justify-content: center;
    align-items: center;
`;
