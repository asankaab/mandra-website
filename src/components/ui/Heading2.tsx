import styles from './text.module.scss';

export default function Heading2({ children, className, bold }
    : { children: React.ReactNode, className?: string, bold?: boolean }) {
    
    return (
        <h3 className={`${styles.heading2} ${className} ${bold ? styles.bold : ''}`}>{children}</h3>
    )
}