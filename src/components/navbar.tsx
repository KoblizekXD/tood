
interface NavbarProps {
    children: React.ReactNode
}

export default function Navbar({ children }: NavbarProps) {
    return (
        <nav className="flex h-[7vh] bg-[#1e2227] absolute top-0 left-0 right-0">
            {children}
        </nav>
    )
}