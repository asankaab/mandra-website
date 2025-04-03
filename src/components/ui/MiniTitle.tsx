import styles from './text.module.scss';

export default function MiniTitle({ children, className }: { children: React.ReactNode, className?: string }) {
    
    return (
        <h4 className={`${styles.miniTitle} ${className}`}>{children}</h4>
    )
}