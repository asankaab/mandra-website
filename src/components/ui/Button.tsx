import { ReactNode } from 'react';
import styles from './button.module.scss';

export default function Button({ children, className, varient, asLink, ...props }
    : { children: ReactNode; className?: string; varient?: string; asLink?: boolean }) {

    if (varient === 'outline') {
        return (
            <button className={`${styles.outline} ${className}`}
                {...props}
            >
                {children}
            </button>
        );
        
    }

    return (
        <button className={`${styles.default} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}