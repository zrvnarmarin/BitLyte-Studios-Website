"use client"

import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "../utils/animations/animations"
import { ReactNode } from "react";

interface Props {
    href: string;
    label:string;
    style: string;
    children?: ReactNode
}

const TransitionLink = ({ href, label, style, children } : Props) => {
    const router = useRouter()
    const pathname = usePathname()

    const handleClick = () => {
        if (pathname !== href) {
            animatePageOut(href, router)
        }
    } 

    return (
        <button className={style} onClick={handleClick}>
            {label}
            {children}
        </button>
    )
}

export default TransitionLink