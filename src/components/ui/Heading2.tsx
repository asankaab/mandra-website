
export default function Heading2({ children, className }: { children: React.ReactNode, className?: string }) {
    
    return (
        <h3 className={`heading2 ${className}`}>{children}</h3>
    )
}