import React from 'react'

interface ButtonProps {
    id: string;
    children: React.ReactNode;
    onClick: () => void;
}

export default function Button(props: ButtonProps) {
    console.log('button')
    return (
    <button {...props}>
        {props?.children}
    </button>)
};