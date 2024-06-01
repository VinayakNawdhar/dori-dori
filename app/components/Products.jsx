'use client'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const Products = () => {
    return (
        <section id='product' className='min-h-screen mt-96 xl:mt-0 xl:pt-32 pb-8'>
            <h1 className='text-6xl text-center font-extrabold tracking-tighter text-black/85 mb-5'>Indulge Your Craving!</h1>
            <h3 className='text-center font-semibold text-xl tracking-tighter'>because sometimes you deserve a treat.</h3>
            <div className='px-2 py-3 xl:px-10 xl:py-4 bg-white/50 mx-5 rounded-xl mt-8'>
                <h1 className='text-4xl xl:text-5xl mb-8 font-semibold font-["Outfit"]'>Gourmet Marshmallows</h1>
                <div className='flex flex-wrap gap-8 justify-center'>
                    <div className='w-[350px] h-[350px] overflow-hidden relative product rounded-xl'>
                        <div className='w-[350px] h-[350px] overflow-hidden product-img '>
                            <img className='h-full w-full object-cover object-center transition-all duration-500' src="/images/blueberry-gourmet-marshmallow.jpg" alt="" />
                        </div>
                        <p className='text-[var(--font-color)] bg-pink-50/70 px-8 py-3 rounded-full text-3xl z-20 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] transition-all tracking-wide'>Blueberry</p>
                    </div>
                    <div className='w-[350px] h-[350px] overflow-hidden relative product rounded-xl'>
                        <div className='w-[350px] h-[350px] overflow-hidden product-img '>
                            <img className='h-full w-full object-cover object-center transition-all duration-500' src="/images/caramel-marshmallow.jpg" alt="" />
                        </div>
                        <p className='text-[var(--font-color)] bg-pink-50/70 px-8 py-3 rounded-full text-3xl z-20 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] transition-all tracking-wide'>Caramel</p>
                    </div>
                    <div className='w-[350px] h-[350px] overflow-hidden relative product rounded-xl'>
                        <div className='w-[350px] h-[350px] overflow-hidden product-img '>
                            <img className='h-full w-full object-cover object-center transition-all duration-500' src="/images/cookie-and-cream-marshmallow.jpg" alt="" />
                        </div>
                        <p className='text-[var(--font-color)] bg-pink-50/70 px-8 py-3 rounded-full text-3xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] transition-all'>Cookie & Cream</p>
                    </div>
                    <div className='w-[350px] h-[350px] overflow-hidden relative product rounded-xl'>
                        <div className='w-[350px] h-[350px] overflow-hidden product-img '>
                            <img className='h-full w-full object-cover object-center transition-all duration-500' src="/images/lemon-meringue-marshmallow.jpg" alt="" />
                        </div>
                        <p className='text-[var(--font-color)] bg-pink-50/70 px-8 py-3 rounded-full text-3xl z-20 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] transition-all tracking-wide'>Lemon Meringue</p>
                    </div>
                    <div className='w-[350px] h-[350px] overflow-hidden relative product rounded-xl'>
                        <div className='w-[350px] h-[350px] overflow-hidden product-img '>
                            <img className='h-full w-full object-cover object-center transition-all duration-500' src="/images/strawberry-cheesecake-marshmallow.jpg" alt="" />
                        </div>
                        <p className='text-[var(--font-color)] bg-pink-50/70 px-8 py-3 rounded-full text-3xl z-20 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] transition-all tracking-wide'>Strawberry Cheescake</p>
                    </div>
                    <div className='w-[350px] h-[350px] overflow-hidden relative product rounded-xl'>
                        <div className='w-[350px] h-[350px] overflow-hidden product-img '>
                            <img className='h-full w-full object-cover object-center transition-all duration-500' src="/images/nutella-chocochip.jpg" alt="" />
                        </div>
                        <p className='text-[var(--font-color)] bg-pink-50/70 px-8 py-3 rounded-full text-3xl z-20 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] transition-all tracking-wide'>Nutella Chocochip</p>
                    </div>
                </div>
            </div>
            <div className='px-2 py-3 xl:px-10 xl:py-4 bg-red-800/5 mx-5 rounded-xl mt-8'>
                <h1 className='text-4xl xl:text-5xl mb-8 font-semibold font-["Outfit"]'>New York Style Cookies </h1>
                <div className='flex flex-wrap gap-8 justify-center'>
                    <div className='w-[350px] h-[350px] overflow-hidden relative product rounded-xl'>
                        <div className='w-[350px] h-[350px] overflow-hidden product-img '>
                            <img className='h-full w-full object-cover object-center transition-all duration-500' src="/images/chocochip-walnut-cookie.jpg" alt="" />
                        </div>
                        <p className='text-[var(--font-color)] bg-pink-50/70 px-8 py-3 rounded-full text-3xl z-20 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] transition-all tracking-wide'>Chocochip Walnut</p>
                    </div>
                    <div className='w-[350px] h-[350px] overflow-hidden relative product rounded-xl'>
                        <div className='w-[350px] h-[350px] overflow-hidden product-img '>
                            <img className='h-full w-full object-cover object-center transition-all duration-500' src="/images/coconut-and-llime-cookie.jpg" alt="" />
                        </div>
                        <p className='text-[var(--font-color)] bg-pink-50/70 px-8 py-3 rounded-full text-3xl z-20 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] transition-all tracking-wide'>Coconut & Lime</p>
                    </div>
                    <div className='w-[350px] h-[350px] overflow-hidden relative product rounded-xl'>
                        <div className='w-[350px] h-[350px] overflow-hidden product-img '>
                            <img className='h-full w-full object-cover object-center transition-all duration-500' src="/images/dark-chocolate-cookie.jpg" alt="" />
                        </div>
                        <p className='text-[var(--font-color)] bg-pink-50/70 px-8 py-3 rounded-full text-3xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] transition-all'>Dark Chocolate</p>
                    </div>
                    <div className='w-[350px] h-[350px] overflow-hidden relative product rounded-xl'>
                        <div className='w-[350px] h-[350px] overflow-hidden product-img '>
                            <img className='h-full w-full object-cover object-center transition-all duration-500' src="/images/marshmallow-stuffed-cookie.jpg" alt="" />
                        </div>
                        <p className='text-[var(--font-color)] bg-pink-50/70 px-8 py-3 rounded-full text-3xl z-20 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] transition-all tracking-wide'>Marshmallow Stuffed</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products