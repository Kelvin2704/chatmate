'use client'
import { on } from "events"
import Link from "next/link"

interface MobileItemProps {
    icon: any,
    href: string,
    onClick?: () => void,
    active?: boolean
}
const MobileItem: React.FC<MobileItemProps> = ({
    icon: Icon,
    href,
    onClick,
    active
}) => {
    const handleClick = () => {
        if (onClick) {
            return onClick()
        }
    }
    return (
        <Link
            onClick={onClick}
            href={href}
            className={`group flex gap-x-3 text-sm leading-6 font-semibold w-full justify-center p-4 
        ${active ? 'text-blue-500' : 'text-slate-400'}`
            }>
            <Icon className='h-8 w-8 shrink-0' />
        </Link>
    )
}

export default MobileItem