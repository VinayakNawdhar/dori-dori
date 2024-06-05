'use client'
import React from 'react'
import Footer from './Footer'

const Ourstory = () => {
    return (
        <div className='md:pt-[110px] pt-[80px] bg-[url("/images/bg-2.jpg")] bg-no-repeat md:bg-contain' id='ourstory'>
            <h1 className='font-extrabold uppercase font-["Kode_Mono"] h-[250px] w-full text-4xl bg-black/20 text-white flex justify-center items-center'>Our Story</h1>
            <div className='bg-white px-5 py-10 md:px-32 md:py-20'>
                <h1 className='text-2xl text-[var(--font-color)] font-bold'>Our Story</h1>
                <div className='flex lg:flex-row flex-col gap-10 mt-8'>
                    <p className='flex justify-center pr-10 text-gray-800 font-["Outfit"]'>
                        Welcome to Dori Dori, where gourmet marshmallows and cookies are crafted with passion and precision. At Dori Dori, we believe in elevating the simple pleasure of indulgence into an art form. Our journey began with a vision to redefine the boundaries of flavor and texture, creating treats that tantalize the taste buds and ignite the imagination.Whether you're indulging in our classic Strawberry Cheesecake or savoring our unique marshmallow flavors like toasted coconut or salted caramel, every bite is a delicious experience. We take pride in our artisanal approach, ensuring that every batch is made with love and care.
                        <br /><br /><br />
                        Each marshmallow and cookie that bears the Dori Dori name is a masterpiece of craftsmanship, meticulously handcrafted using only the finest ingredients. From classic favorites to innovative creations, every bite is a symphony of taste and texture, designed to transport you to a realm of pure delight.
                    </p>
                    <img className='lg:w-1/2' src="https://themarshmallow.co/cdn/shop/files/Mix_Bag_eb429db2-4a76-4448-a11b-0f5675201072.jpg?v=1696504356" alt="" />
                </div>
                <p className='mt-10 font-["Outfit"]'>But Dori Dori is more than just a purveyor of gourmet sweets; we're a community united by our love for exceptional treats and shared experiences. Whether you're savoring a moment of indulgence alone or sharing our delights with loved ones, we invite you to join us on a journey of flavor and discovery.</p>
                <iframe className='w-full aspect-video mt-10' src="https://www.youtube-nocookie.com/embed/oWmejS8fx_0?si=9gPTSR1e1VqLJbr0&amp;start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <p className='mt-10 font-["Outfit"]'>
                    Join us as we redefine the art of indulgence, one delectable treat at a time. Welcome to Dori Dori – where every bite tells a story of passion, creativity, and unparalleled flavor.
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default Ourstory