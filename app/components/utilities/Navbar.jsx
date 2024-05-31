import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='flex py-3 bg-pink-50/90 justify-between items-center px-32 fixed w-full shadow-2xl'>
        <ul className='flex gap-10 text-gray-600'>
            <li className='font-[300] text-xl'>
                <Link  href=''>Shipping</Link>
            </li>
            <li className='font-[300] text-xl'>
                <Link href=''>Corporate Gifting</Link>
            </li>
            <li className='font-[300] text-xl'>
                <Link href=''>Location</Link>
            </li>
        </ul>
        <Image src='/images/dori-dori.png' width={100} height={100} className='absolute left-1/2 translate-x-[-50%]'></Image>
        <ul className='flex gap-10 text-gray-600 w-[300px]'>
            <li className='font-[300] text-xl'>
                <Link href=''>About</Link>
            </li>
            <li className='font-[300] text-xl'>
                <Link href=''>Reviews</Link>
            </li>
            <li className='font-[300] text-xl'>
                <Link href=''>Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar