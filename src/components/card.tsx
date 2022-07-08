import styled from 'styled-components'

export const Card = (props: any) => <StyledCard {...props}>{props.children}</StyledCard>

const StyledCard = styled.div`
    margin: 1rem;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, 
    border-color 0.15s ease;
    width: 450px;
    :hover,
    :focus,
    :active {
        color: #0070f3;
        border-color: #0070f3;
}
`;