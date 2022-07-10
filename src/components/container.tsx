import styled from "styled-components";

export const Container = (props?: any) => <StyledContainer {...props}>{props.children}</StyledContainer>;

const StyledContainer = styled.div<any>`
    min-height: 95vh;
    width: 1024px;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;