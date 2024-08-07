'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const Navbar = () => {
    useGSAP(() => {
        // Shery.makeMagnet(".magnet-target" /* Element to target.*/, {
        //     //Parameters are optional.
        //     ease: "cubic-bezier(0.12, 0, 0.39, 0)",
        //     duration: 1,
        // });
        // Shery.makeMagnet(".scroll-links" /* Element to target.*/, {
        //     //Parameters are optional.
        //     ease: "cubic-bezier(0.12, 0, 0.39, 0)",
        //     duration: 100,
        // });
        document.querySelectorAll('.scroll-links').forEach(elem => {
            elem.addEventListener('click', function (e) {
                e.preventDefault()
                console.log(e.target.getAttribute('href'))
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth',
                });
            })
        })
        document.querySelectorAll('.mob-nav .scroll-links').forEach(elem => {
            elem.addEventListener('click', function (e) {
                setnav(false)
                if (!this.classList.contains('dropdown')) {
                    gsap.to('.mob-nav', {
                        x: '-100%',
                        opacity: 0
                    })
                }
            })
        })
    })
    const [nav, setnav] = useState(false)
    return (
        <nav className='flex py-3 h-[80px] md:h-[110px] bg-watermelon-pink/90 shadow-md justify-between items-center px-32 fixed w-full z-[100]'>
            <ul className='lg:flex gap-10 text-seashell hidden'>
                <li className='font-[400] text-xl'>
                    <Link className='scroll-links' href='#hero'>Home</Link>
                </li>
                <li className='font-[400] text-xl relative group'>
                    <Link className='scroll-links' href='#product'>Flavours <i className="ri-arrow-down-s-fill"></i></Link>
                    <div className='bg-seashell text-black py-2 left-[-20%] rounded-xl w-[170px] shadow-xl absolute flex flex-col gap-1 top-10 group-hover:opacity-100 group-hover:scale-y-100 scale-y-0 opacity-0 transition-all duration-50 origin-top'>
                        <Link className='py-1 scroll-links  hover:bg-watermelon-pink px-2 text-[18px] hover:before:w-0' href='#gm'>Gourmet Marshmallows</Link>
                        <Link className='py-1 scroll-links hover:bg-watermelon-pink px-2 text-[18px] hover:before:w-0' href='#nysc'>Big Cookies</Link>
                        <Link className='py-1 scroll-links hover:bg-watermelon-pink px-2 text-[18px] hover:before:w-0' href='#product'>Shop All</Link>
                    </div>
                </li>
                
                <li className='font-[400] text-xl'>
                    <Link href='/corporate-gifting'>Corporate Gifting</Link>
                </li>
            </ul>
            {
                nav == true ? <button className='lg:hidden' onClick={() => {
                    setnav(false)
                    gsap.to('.mob-nav', {
                        x: '-100%',
                        opacity: 0
                    })
                }}>
                    <i className="text-seashell ri-menu-unfold-2-line text-3xl absolute left-5 top-1/2 translate-y-[-50%]"></i>
                </button> : <button className='lg:hidden' onClick={() => {
                    setnav(true)
                    gsap.to('.mob-nav', {
                        x: '0',
                        opacity: 1
                    })
                    gsap.from('.mob-nav li', {
                        x: -300,
                        stagger: 0.05
                    })
                }}>
                    <i className="text-seashell ri-menu-fold-2-line text-3xl absolute left-5 top-1/2 translate-y-[-50%]"></i>
                </button>
            }
            <div className='min-h-screen bg-seashell w-full absolute left-0 top-[80px] md:top-[110px] mob-nav translate-x-[-100%]'>
                <ul className='flex flex-col gap-3'>
                    <li className='font-[400] tracking-wide text-xl px-4 py-2 border-b-4 border-pink-400/10'>
                        <Link className='scroll-links' href='#hero'>Home</Link>
                    </li>
                    <li className='font-[400] tracking-wide text-xl px-4 py-2 border-b-4 border-pink-400/10 group'>
                        <Link className='' href=''>Flavours <i className="ri-arrow-down-s-fill"></i></Link>
                        <div className='bg-seashell text-black py-2 left-[10%] rounded-xl shadow-xl hidden flex-col gap-1 top-10 group-hover:opacity-100 group-hover:flex opacity-0 transition-all duration-50 origin-top'>
                            <Link className='py-1 scroll-links  hover:bg-watermelon-pink px-2 text-[18px] hover:before:w-0' href='#gm'>Gourmet Marshmallows</Link>
                            <Link className='py-1 scroll-links hover:bg-watermelon-pink px-2 text-[18px] hover:before:w-0' href='#nysc'>Big Cookies</Link>
                            <Link className='py-1 scroll-links hover:bg-watermelon-pink px-2 text-[18px] hover:before:w-0' href='#product'>Shop All</Link>
                        </div>
                    </li>
                    <li className='font-[400] tracking-wide text-xl px-4 py-2 border-b-4 border-pink-400/10'>
                        <Link href='/our-story'>Our Story</Link>
                    </li>
                    <li className='font-[400] tracking-wide text-xl px-4 py-2 border-b-4 border-pink-400/10'>
                        <Link href='/corporate-gifting'>Corporate Gifting</Link>
                    </li>
                    <li className='font-[400] tracking-wide text-xl px-4 py-2 border-b-4 border-pink-400/10'>
                        <Link className='scroll-links' href='#about'>About</Link>
                    </li>
                    <li className='font-[400] tracking-wide text-xl px-4 py-2 border-b-4 border-pink-400/10'>
                        <Link className='scroll-links' href='#reviews'>Reviews</Link>
                    </li>
                    <li className='font-[400] tracking-wide text-xl px-4 py-2 border-b-4 border-pink-400/10  group dropdown'>
                        <Link className='' href='/'>Support <i className="ri-arrow-down-s-fill"></i></Link>
                        <div className='bg-seashell text-black py-2 left-[10%] rounded-xl shadow-xl hidden flex-col gap-1 top-10 group-hover:opacity-100 group-hover:flex opacity-0 transition-all duration-50 origin-top'>
                            <Link className='py-1 hover:bg-watermelon-pink px-2 text-[18px] hover:before:w-0' href='/faq'>FAQ's</Link>
                            <Link className='py-1 hover:bg-watermelon-pink px-2 text-[18px] hover:before:w-0' href='/shipping-policy'>Shipping policy</Link>
                            <Link className='py-1  hover:bg-watermelon-pink px-2 text-[18px] hover:before:w-0' href='/careers'>Careers</Link>
                            <Link className='py-1 hover:bg-watermelon-pink px-2 text-[18px] hover:before:w-0' href='/contact-us'>Contact Us</Link>
                        </div>
                    </li>
                </ul>
            </div>
            <img src='/images/secondary-white.png' width={100} height={100} className='absolute left-[52%] translate-x-[-50%] w-[50px] md:w-[140px]'/>
            <ul className='lg:flex gap-10 text-seashell w-[350px] hidden'>
                <li className='font-[400] text-xl'>
                    <Link className='scroll-links' href='#about'>About</Link>
                </li>
                <li className='font-[400] text-xl'>
                    <Link href='/our-story'>Our Story</Link>
                </li>
                <li className='font-[400] text-xl relative group'>
                    <Link className='' href='/'>Support <i className="ri-arrow-down-s-fill"></i></Link>
                    <div className='bg-seashell text-black py-2 left-[-20%] rounded-xl w-[170px] shadow-xl absolute flex flex-col gap-1 top-10 group-hover:opacity-100 group-hover:scale-y-100 scale-y-0 opacity-0 transition-all duration-50 origin-top'>
                        <Link className='py-1  hover:bg-watermelon-pink px-2 text-[18px] hover:before:w-0' href='/faq'>FAQ's</Link>
                        <Link className='py-1  hover:bg-watermelon-pink px-2 text-[18px] hover:before:w-0' href='/shipping-policy'>Shipping policy</Link>
                        <Link className='py-1  hover:bg-watermelon-pink px-2 text-[18px] hover:before:w-0' href='/careers'>Careers</Link>
                        <Link className='py-1  hover:bg-watermelon-pink px-2 text-[18px] hover:before:w-0' href='/contact-us'>Contact Us</Link>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar