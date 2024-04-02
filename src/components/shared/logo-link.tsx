import Link from 'next/link'

import { routes } from '@/config/routes.config'


export default function LogoLink() {
  return (
    <Link
      href={routes.homeRoute()}
      className='text-5xl font-bold text-slate-500 transition ease-out hover:text-slate-700'
    >
      ModelVerse
      <span className='text-orange-400'>.</span>
    </Link>
  )
}