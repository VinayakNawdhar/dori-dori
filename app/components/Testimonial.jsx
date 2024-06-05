'use client'
import { useGSAP } from '@gsap/react'
import React from 'react'

const Testimonial = () => {
    return (
        <section id='reviews' className="bg-pink-100/30 pb-16 pt-10 md:scroll-m-[110px] scroll-m-[80px]">
            <h1 className='px-10 text-2xl xl:text-5xl font-extrabold text-center font-["Outfit"] tracking-tighter drop-shadow-2xl'>WHAT OUR CUSTOMER SAYS</h1>
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6 flex gap-8 md:flex-wrap items-stretch overflow-x-scroll md:overflow-auto">
                {testimonials.map(test => (
                    <figure key={test.id} className="hover-target bg-[#FEFAF9] min-w-[250px] h-[300px] p-4 rounded-2xl shadow-2xl xl:h-96 xl:w-96 relative pb-20 xl:pb-0">
                        <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                        </svg>
                        <blockquote>
                            <p className="text-sm xl:text-xl font-medium text-gray-900 opacity-90">"{test.text}"</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3 absolute left-1/2 translate-x-[-50%] xl:bottom-10">
                            <div className="flex items-center divide-x-2 divide-gray-500">
                                <img className="w-10 h-10 object-cover object-center mr-3 rounded-full" src={test.image} alt="profile picture" />

                                <div className="pl-3 text-sm font-light text-gray-500">{test.author}</div>
                            </div>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    )
}

export default Testimonial

const testimonials = [
    {
        id: 1,
        author: "Deepika N.",
        image: "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY=",
        text: "The cookies from this shop are absolutely heavenly! Each bite melts in your mouth, and the flavors are out of this world. The marshmallows are so fluffy and light; they pair perfectly with a hot cup of cocoa!",
    },
    {
        id: 1,
        author: "Arpita R.",
        image: "https://i.pinimg.com/736x/55/a5/89/55a589c4c118141188f1396ebada5e9b.jpg",
        text: "These cookies are hands down the best I've ever tasted. The chocolate chip ones are my favorite! And the marshmallows? They are a game-changer for s'mores nights.",
    },
    {
        id: 1,
        author: "Naman T.",
        image: "https://t4.ftcdn.net/jpg/02/92/76/21/360_F_292762118_dmWqwlN9lDmhqCHKmUYmZW6F7LaUWc80.jpg",
        text: "The variety of cookies here is amazing, and each one is better than the last. The marshmallows are incredibly fluffy and make any dessert extra special.",
    },
    // Add more testimonials here
];