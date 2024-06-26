"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Key, LeafyGreen, MoveUpRight } from "lucide-react"

import type { TFooterLinks } from '@/types/marketing.types'
import { routes } from '@/config/routes.config'
import LogoLink from './logo-link'
import { FOOTER_LINKS_LIST } from '@/data/marketing'


export default function Footer() {
  const [isMouseInCareerLink, setMouseInCareerLink] = useState(false);

  return (
    <footer className='flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-around gap-5 sm:gap-0 py-10 sm:py-16 border-t-2 border-zinc-300 rounded-t-xl'>
      <LogoLink />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-20 gap-2 sm:gap-y-6 lg:gap-y-10'>
        {FOOTER_LINKS_LIST.map((link) => (
          <FooterLink
            key={`key-${link.label}`}
            {...link}
          />
        ))}
      </div>


      <Link
        onMouseEnter={() => setMouseInCareerLink(true)}
        onMouseLeave={() => setMouseInCareerLink(false)}
        href={routes.addNewModelRoute()}
        className={`
          flex items-center justify-center gap-3 text-base md:text-xl lg:text-2xl
          ${isMouseInCareerLink ? "text-zinc-500" : "text-black"}
        `}
      >
        Add new model

        <MoveUpRight
          className={`
          transition ease-out duration-150
            ${isMouseInCareerLink ? "rotate-0" : "rotate-45"}
          `}
        />
      </Link>
    </footer>
  )
}



// footer links 
function FooterLink({ href, label }: TFooterLinks) {
  return (
    <Link
      href={href}
      className='text-base 2xs:text-xl transition ease-out duration-150 hover:text-gray-500'
    >
      {label}
    </Link>
  )
}