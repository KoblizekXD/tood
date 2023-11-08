interface ReversedProps {
    children: React.ReactNode
}

export default function ReversedNavItems({children}: ReversedProps) {
    return(
        <div className="ml-auto flex">
            {children}
        </div>
    )
}