import styles from './text.module.scss'

export default function Paragraph({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <p className={`${styles.paragraph} ${className}`}>{children}</p>
    )
}