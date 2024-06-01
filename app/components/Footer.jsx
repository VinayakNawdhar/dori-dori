import React from 'react'
import Link from 'next/link'
const Footer = () => {
    return (
        <section id='footer' className=''>
            <div className='flex flex-wrap p-10 gap-5 justify-evenly'>
                <div className='flex flex-col items-center'>
                    <img className='h-48' src="/images/dori-dori.png" alt="" />
                    <img className='h-48 xl:flex hidden' src="/images/cookie.png" alt="" />
                </div>
                <div className='w-96 xl:mt-10'>
                    <h1 className='text-3xl font-bold mb-4'>Quick Links</h1>
                    <ul className='flex flex-col gap-3 px-2'>
                        <li className='underline'>Gourmet Marshmallows</li>
                        <li className='underline'>New York Style Cookies</li>
                        <li className='underline'>Corporate Gifting</li>
                        <li className='underline'>Careers</li>
                        <li className='underline'>Shipping Policy</li>
                        <li className='underline'>Terms of Service</li>
                        <li className='underline'>Return Policy</li>
                    </ul>
                </div>
                <div className='w-96 xl:mt-10'>
                    <h1 className='text-3xl font-bold mb-4'>Contact Us</h1>
                    <p>Have a question about our products or need assistance with your order?
                        Our friendly team is here to help!
                    </p>
                    <a className='font-semibold' href="tel:123456789"><i className="ri-phone-fill"></i> 123456789</a>
                    <p className='mt-5'>
                        Reach out to us via phone, email, or social media, and we'll be happy to assist you.
                    </p>
                    <a className='font-semibold' href="mailto:help@doridori.com"><i className="ri-mail-fill"></i> help@doridori.com</a>
                    <p className='mt-5'>
                        Your satisfaction is our top priority at Dori Dori, and we're committed to making your experience delightful.
                    </p>
                </div>
            </div>
            <hr />
            <div className='p-5'>
                <h1 className='text-center'>Copyright © 2024 <Link href='/'>Dori Dori</Link></h1>
            </div>
        </section>
    )
}

export default Footer