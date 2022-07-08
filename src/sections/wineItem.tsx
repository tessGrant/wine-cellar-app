import { useRouter } from 'next/router';
import React from 'react';
import { Card } from 'src/components/card';
import { Wine } from 'src/utils/types';
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
    <Card>
        <div>{props.wine.name}, {props.wine.year} </div>
        <div>{props.wine.vineyard}</div>
        <Button right onClick={() => goToWineDetails()}>See more</Button>
    </Card>)
};