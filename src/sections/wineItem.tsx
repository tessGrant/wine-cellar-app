import { useRouter } from 'next/router';
import React from 'react';
import { Wine } from 'src/service/types';
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
    <>
        <div>This is {props.wine.name}</div>
        <div>{props.wine.year}</div>
        <Button onClick={() => goToWineDetails()}>See more</Button>
    </>)
};