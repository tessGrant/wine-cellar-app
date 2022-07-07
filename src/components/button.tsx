import React from 'react'

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}

export default function Button(props: ButtonProps) {
    return (
    <button {...props}>
        {props?.children}
    </button>)
};