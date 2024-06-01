import React from 'react'

const About = () => {
    return (
        <section id='about' className='py-10 bg-white/70'>
            <div className='flex items-center'>
                <div className='w-1/2 flex flex-col pl-32 gap-5'>
                    <h1 className='w-[70%] text-left text-5xl font-extrabold tracking-tighter font-[Archivo]'>NOT JUST ANOTHER COOKIE.</h1>
                    <p className='w-[85%] font-["Archivo"] tracking-tight opacity-75'>At Dori Dori, we bake the tastiest cookies and craft gourmet marshmallows. Our cookies are baked to perfection, with a crunchy exterior and a soft, chewy center. Each marshmallow is handcrafted using only the finest ingredients, resulting in fluffy clouds of sweetness that melt in your mouth.</p>
                </div>
                <div className='overflow-hidden rounded-2xl h-[500px] w-[500px]'>
                    <img src="/images/img-not-just.webp" className='w-full h-full object-cover object-center' alt="" />
                </div>
            </div>
            <div className='flex flex-row-reverse items-center mt-10'>
                <div className='w-1/2 flex flex-col gap-5'>
                    <h1 className='w-[60%] text-left text-5xl font-extrabold tracking-tighter font-[Archivo]'>NOT JUST ANOTHER BAKER.</h1>
                    <div>
                    <p className='w-[75%] font-["Archivo"] tracking-tight opacity-75'>Gourmet marshmallows and cookies are crafted with passion and precision. we believe in elevating the simple pleasure of indulgence into an art form. Our journey began with a vision to redefine the boundaries of flavor and texture, creating treats that tantalize the taste buds and ignite the imagination.</p>
                    <p className='w-[75%] font-["Archivo"] tracking-tight opacity-75'>we're a community united by our love for exceptional treats and shared experiences. Whether you're savoring a moment of indulgence alone or sharing our delights with loved ones, we invite you to join us on a journey of flavor and discovery.</p>
                    </div>
                </div>
                <div className='w-1/2 flex justify-center'>
                    <div className='overflow-hidden rounded-2xl h-[500px] w-[500px]'>
                        <img src="/images/img-not-just-baker.webp" className='w-full h-full object-cover object-center' alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About