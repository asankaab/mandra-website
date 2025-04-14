import styles from './text.module.scss';

interface childrenType {
    children: React.ReactNode;
    className?: string;
    bold?: boolean 
}

export default function Heading2({ children, className, bold }: childrenType) {
    
    return (
        <h3 className={`${styles.heading2} ${className} ${bold ? styles.bold : ''}`}>{children}</h3>
    )
}