import { Wine } from 'pages/allWines';
import React from 'react'
import Button from './Button';

interface WineProps {
    key: string;
    wine: Wine;
    onClick: () => void;
}

export default function WineComponent(props: WineProps){
    return (
    <>
        <div>This is {props.wine.name}</div>
        <div>{props.wine.year}</div>
        <Button id={props.wine.id} onClick={props.onClick}>See more</Button>
    </>)
};