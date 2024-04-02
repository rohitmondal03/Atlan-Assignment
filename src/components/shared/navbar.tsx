import Link from 'next/link'

import { NAV_LINKS_LIST } from '@/data/marketing'
import LogoLink from './logo-link'
import { MoveRight, MoveUpRight } from 'lucide-react'


export default function Navbar() {
  return (
    <nav className='flex items-center justify-between py-16 px-56'>
      <LogoLink />

      <div className='flex items-center justify-between gap-16 text-2xl'>
        {NAV_LINKS_LIST.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className='transition ease-out duration-200 hover:text-slate-600 hover:scale-105 hover:underline hover:underline-offset-4'
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
