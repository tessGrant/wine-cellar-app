import styled from 'styled-components'

interface IProps {
    small?: boolean;
    medium?: boolean;
    large?: boolean;
    children: React.ReactNode;
}

export const Card = (props: IProps) => <StyledCard {...props}>{props.children}</StyledCard>

const StyledCard = styled.div<IProps>`
    margin: 0.5rem;
    padding: 1rem;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, 
    border-color 0.15s ease;
    ${props => props.large && `width: 700px`};
    ${props => props.medium && `width: 550px`};
    ${props => props.small && `width: 350px`};
    :hover,
    :focus,
    :active {
        color: #0070f3;
        border-color: #0070f3;
    }
    @media (max-width: 400px) {
        width: 70%;
    }
`;