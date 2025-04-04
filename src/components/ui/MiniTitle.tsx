import styles from './text.module.scss';

export default function MiniTitle({ children, className, bold }: { children: React.ReactNode, className?: string, bold?: boolean }) {
    
    return (
        <h4 className={`${styles.miniTitle} ${className} ${bold ? styles.bold : ''}`}>{children}</h4>
    )
}