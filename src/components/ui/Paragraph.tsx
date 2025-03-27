
export default function Paragraph({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <p className={`paragraph ${className}`}>{children}</p>
    )
}