import styled from "styled-components";

interface IProps {
    width?: number;
    height?: number;
    debug?: boolean;
}

export const SizedBox = (props: IProps) => {
    return (
        <StyledDiv {...props} />
    );
};


const StyledDiv = styled.div<IProps>`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    background-color: ${props => props.debug ? 'tomato' : null}; 
`;