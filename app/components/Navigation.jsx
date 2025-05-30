'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const navigation = () => {
  const pathname = usePathname();

  return (
    <nav>
      <Link href='/' className={pathname === '/' ? 'font-bold mr-4 text-white' : 'mr-4 text-blue-500'}>Home</Link>
      <Link href='/about' className={pathname === '/about' ? 'font-bold mr-4' : 'mr-4 text-blue-500'}>About</Link>
      <Link href='/products/1' className={pathname.startsWith('/products/1') ? 'font-bold mr-4' : 'mr-4 text-blue-500'}>Product 1</Link>
    </nav>
  )
}

export default navigation