import styled from "styled-components";

export const Container = (props?: any) => {
    return (
        <StyledBgImage>
            <StyledContainer {...props}>
                {props.children}
            </StyledContainer>
        </StyledBgImage>
    );
}

const StyledContainer = styled.div<any>`
    min-height: 100vh;
    width: 700px;
    margin: 0 auto;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background-color: white;
`;

const StyledBgImage = styled.div`
    position: absolute;
    width: 100%;
    top: 0;
    height: 100hv;
    left: 0;
    background-size: auto;
    background-image: url('./wine_bg.svg');
`;