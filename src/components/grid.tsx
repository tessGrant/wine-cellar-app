import styled from "styled-components";

export const Grid = (props?: any) => <StyledGrid {...props}>{props.children}</StyledGrid>

const StyledGrid = styled.div<any>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1000px;
    @media (max-width: 600px) {
        .grid {
            width: 100%;
            flex-direction: column;
        }
    }
`;