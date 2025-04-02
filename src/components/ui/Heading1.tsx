import styles from './text.module.scss';

export default function Heading1({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <h1 className={`${styles.heading1} ${className}`}>{children}</h1>
    )
}