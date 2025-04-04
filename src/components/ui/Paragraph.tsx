import styles from './text.module.scss'

export default function Paragraph({ children, className, bold }: { children: React.ReactNode, className?: string, bold?: boolean }) {
    return (
        <p className={`${styles.paragraph} ${className} ${bold ? styles.bold : ''}`}>{children}</p>
    )
}