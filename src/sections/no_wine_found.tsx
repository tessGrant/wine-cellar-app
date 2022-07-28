import styled from "styled-components";
import Text from 'src/components/text';
import Image from "next/image";

export const NoWineFoundComponent = () => 
<StyledWrap>
    <Text bodyText >No wine found ...</Text>
    <StyledImg>
        <Image src="/no_wine_found.jpeg" width={230} height={180} alt="musk_has_drunk_all_your_wine" />
    </StyledImg>
</StyledWrap>;

const StyledWrap = styled.div`
    padding: 30px;
`;

const StyledImg = styled.div`
    margin-top: 30px;
`;
