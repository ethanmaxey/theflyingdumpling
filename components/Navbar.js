import Link from "next/link"
import React from "react"

export default function Navbar() {
    return (
        <ul>
            <li><Link href="/menu">Menu</Link></li>
            <li><Link href="/hours">Hours</Link></li>
            <li><Link href="/location">Location</Link></li>
        </ul>
    )
}
