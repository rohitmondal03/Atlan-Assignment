import Link from 'next/link'

import { NAV_LINKS_LIST } from '@/data/marketing'
import LogoLink from './logo-link'


export default function Navbar() {
  return (
    <nav className='flex items-center justify-between py-6 sm:py-10 md:py-16 px-5 sm:px-16 md:px-20 lg:px-40 xl:px-56'>
      <LogoLink />

      <div className='flex items-center justify-between gap-4 sm:gap-8 md:gap-16 text-base 2xs:text-lg sm:text-2xl'>
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
