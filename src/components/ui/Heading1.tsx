
export default function Heading1({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <h1 className={`heading1 ${className}`}>{children}</h1>
    )
}