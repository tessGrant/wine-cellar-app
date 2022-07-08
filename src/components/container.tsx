import styled from "styled-components";

export const Container = (props?: any) => <StyledContainer {...props}>{props.children}</StyledContainer>;

const StyledContainer = styled.div<any>`
    min-height: 100vh;
    width: 1200px;
    margin: 4rem auto;
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;