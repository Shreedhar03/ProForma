import Link from 'next/link'
import React from 'react'

export default function GeneralNotFound() {
  return (
    <div className='h-[65vh] flex flex-col items-center justify-center gap-6'>
      <p className='text-secondary text-3xl'>404 | Page not found</p>
      <Link href={'/'} className='bg-primary text-white py-2 px-3 text-sm rounded-lg'>Back to Home</Link>
    </div>
  )
}
