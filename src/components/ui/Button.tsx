'use client'
import { ReactNode } from 'react';
import styles from './button.module.scss';
import Link from 'next/link';

interface ButtonProps {
    children: ReactNode;
    className?: string;
    varient?: string;
    href?: string;
    type?: "button" | "submit" | "reset";
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    loading?: boolean;
    disabled?: boolean;
}

export default function Button({ children, className, varient, href, onClick, disabled, ...props }
    : ButtonProps ) {

        const style = styles[varient || 'default']

        if (href) {

            return (
                <Link style={ disabled ? { opacity: .5, cursor: 'wait'} : { opacity: 1}} href={href} className={`${style} ${className}`}
                        {...props}
                    >
                        {children}
                </Link>
            );
            
        }

        return (
            <button style={ disabled ? { opacity: .5, cursor: 'not-allowed'} : { opacity: 1}} onClick={onClick} disabled={disabled} className={`${style} ${className}`}
                {...props}
            >
                {children}
            </button>
        );
}