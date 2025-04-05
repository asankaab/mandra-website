import { ReactNode } from 'react';
import styles from './button.module.scss';
import Link from 'next/link';

interface ButtonProps {
    children: ReactNode;
    className?: string;
    varient?: string;
    href?: string;
    type?: "button" | "submit" | "reset";
}

export default function Button({ children, className, varient, href, ...props }
    : ButtonProps ) {

        const style = styles[varient || 'default']

        if (href) {

            return (
                <Link href={href} className={`${style} ${className}`}
                        {...props}
                    >
                        {children}
                </Link>
            );
            
        }

        return (
            <button className={`${style} ${className}`}
                {...props}
            >
                {children}
            </button>
        );
}