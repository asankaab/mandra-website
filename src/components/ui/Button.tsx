import { ReactNode } from 'react';
import styles from './button.module.scss';
import Link from 'next/link';

export default function Button({ children, className, varient, href, ...props }
    : { children: ReactNode; className?: string; varient?: string; href?: string }) {

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