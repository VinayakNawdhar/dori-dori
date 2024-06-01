'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import gsap from 'gsap'
const Navbar = () => {
  const [nav, setnav] = useState(false)
  return (
    <nav className='flex py-3 bg-pink-50 shadow-md translate-y-[-100%] justify-between items-center px-32 fixed w-full z-[100]'>
        <ul className='md:flex gap-10 text-gray-600 hidden'>
            <li className='font-[400] text-xl'>
                <Link  href=''>Shipping</Link>
            </li>
            <li className='font-[400] text-xl'>
                <Link href=''>Corporate Gifting</Link>
            </li>
            <li className='font-[400] text-xl'>
                <Link href=''>Location</Link>
            </li>
        </ul>
        {
            nav == true ? <button className='md:hidden' onClick={() => {
                setnav(false)
                gsap.to('.mob-nav',{
                    x : '-100%',
                    opacity : 0
                })
            }}>
                <i className="text-[var(--secondary-color)] ri-menu-unfold-2-line text-4xl absolute left-5 top-1/2 translate-y-[-50%]"></i>
            </button> : <button className='md:hidden' onClick={() => {
                setnav(true)
                gsap.to('.mob-nav',{
                    x : '0',
                    opacity : 1
                })
                gsap.from('.mob-nav li',{
                    x : -300,
                    stagger : 0.2
                })
            }}>
                <i className="text-[var(--secondary-color)] ri-menu-fold-2-line text-4xl absolute left-5 top-1/2 translate-y-[-50%]"></i>
            </button>
        }
        <div className='h-screen bg-pink-50 w-full absolute left-0 top-[110px] mob-nav translate-x-[-100%]'>
            <ul className='flex flex-col gap-3'>
                <li className='font-[400] tracking-wide text-2xl p-4 border-b-4 border-pink-400/10'>
                    <Link className='drop-shadow-2xl' href=''>Shipping</Link>
                </li>
                <li className='font-[400] tracking-wide text-2xl p-4 border-b-4 border-pink-400/10'>
                    <Link href=''>Corporate Gifting</Link>
                </li>
                <li className='font-[400] tracking-wide text-2xl p-4 border-b-4 border-pink-400/10'>
                    <Link href=''>Location</Link>
                </li>
                <li className='font-[400] tracking-wide text-2xl p-4 border-b-4 border-pink-400/10'>
                <Link href=''>About</Link>
                </li>
                <li className='font-[400] tracking-wide text-2xl p-4 border-b-4 border-pink-400/10'>
                <Link href=''>Reviews</Link>
                </li>
                <li className='font-[400] tracking-wide text-2xl p-4 border-b-4 border-pink-400/10'>
                <Link href=''>Contact</Link>
                </li>
            </ul>
        </div>
        <Image src='/images/dori-dori.png' width={100} height={100} className='absolute left-1/2 translate-x-[-50%]'></Image>
        <ul className='md:flex gap-10 text-gray-600 w-[300px] hidden'>
            <li className='font-[400] text-xl'>
                <Link href=''>About</Link>
            </li>
            <li className='font-[400] text-xl'>
                <Link href=''>Reviews</Link>
            </li>
            <li className='font-[400] text-xl'>
                <Link href=''>Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar