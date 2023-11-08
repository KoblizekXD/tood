import Link from "next/link"

interface NavbarProps {
  children: React.ReactNode
  className?: string
  href: string
}

export default function Button({ children, className, href }: NavbarProps) { // BLUE = bg-[#077dbe]
  return <div className={`${className} flex justify-center items-center rounded cursor-pointer select-none p-2.5`}>
    <Link href={href}>{children}</Link>
  </div>
}