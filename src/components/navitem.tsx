import Link from "next/link"
import clsx from 'clsx'

interface NavItemProps {
    children: React.ReactNode,
    href: string
    reverse?: boolean
    className?: string
    button?: boolean
}

export default function NavItem({ children, href, reverse, className, button }: NavItemProps) {
    return (
        <div className={clsx(`${className == undefined ? "" : className} select-none p-4 hover:bg-[#2c313a] flex items-center h-full hover:cursor-pointer`, {
            'ml-auto': reverse
        })}>
            <Link href={href}>
                {children}
            </Link>
        </div>
    )
}