import { useRouter } from 'next/router';
import React from 'react';
import { Card } from 'src/components/card';
import { Wine } from 'src/utils/types';
import styled from 'styled-components';
import Button from '../components/button';

interface WineProps {
    key?: string;
    wine: Wine;
}

export default function WineComponent(props: WineProps){
    const router = useRouter();
    const goToWineDetails = () => {
        router.push({
        pathname: '/wineDetails',
        query:  {id: props.wine.id}
        })
    }
    
    return (
        <StyledItem medium>
            <div>
                <div>{props.wine.name}, {props.wine.year} </div>
                <div>{props.wine.vineyard}</div>
            </div>
            <Button primary onClick={() => goToWineDetails()}>See more</Button>
        </StyledItem>)
};

const StyledItem = styled(Card)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;