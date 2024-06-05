'use client'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react"
import Link from "next/link"
const Hero = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.screen.width > 790) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#product',
          markers: false,
          start: "-25% 0%",
          end: "50% 100%",

        }
      })
      tl.from('#product h1', {
        opacity: 0
      })
      tl.from('#product h3', {
        opacity: 0
      })
      tl.from('#gm .product', {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: "expo.inOut"
      })
      tl.from('#nysc .product', {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: "expo.inOut"
      })


      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#about",
          start: "top 30%",
          end: "80% 100%",
          markers: false
        }
      })
      tl2.from('.about-1', {
        x: "-100px",
        opacity: 0
      })
      tl2.from('.about-2', {
        x: "100px",
        opacity: 0,
        delay: 0.2
      })
    }
  });
  useEffect(() => {
    Shery.mouseFollower({
      //Parameters are optional.
      skew: true,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 0.1,
    });


    gsap.to('.hiding h1', {
      y: '0%',
      opacity: 1,
      stagger: 0.5,
      ease: "Power1.easeInOut",
      duration: 0.8,
      delay: 1
    })
    gsap.to('nav', {
      y: '0%',
      opacity: 1,
      ease: "Power1.easeInOut",
      duration: 1
    })

    document.querySelector('#hero').addEventListener("mousemove", function (e) {
      const { clientX, clientY } = e;
      const { clientWidth, clientHeight } = document.querySelector('#hero');

      const xPos = (clientX / clientWidth - 0.5) * 100;
      const yPos = (clientY / clientHeight - 0.5) * 100;

      gsap.to('.img-div', {
        x: xPos / 3,
        y: yPos / 3
      })
    })
  })

  return (
    <section className="pt-[80px] md:pt-[110px] relative" id="hero">
      <div className="pt-8 px-8 md:pt-14 md:pb-6 md:px-32 md:py-20 flex flex-col gap-0 space-y-[-15px] md:space-y-0 md:scroll-m-[110px] scroll-m-[80px]">
        <div className="hiding"><h1 className="text-[9vw] md:text-8xl font-extrabold md:w-[63%] tagline">Welcome to</h1></div>
        <div className="hiding"><h1 className="text-[9vw] md:text-8xl font-extrabold md:w-[63%] text-pink-800 tagline">Dori Dori</h1></div>
        <div className="hiding"><h1 className="text-[9vw] md:text-8xl font-extrabold md:w-[63%] tagline">Wonderland!</h1></div>
        <div className="flex gap-4 md:gap-8 py-6 md:py-10">
          <button className="px-4 w-60 py-2 md:px-8 md:py-6 text-sm md:text-xl md:w-48 font-semibold rounded-full text-white bg-pink-800 hover:bg-pink-700 transition-all duration-500">ORDER NOW</button>
          <Link href='/our-story' className="px-4 w-60 py-2 md:px-8 md:py-6 text-sm md:text-xl md:w-48 font-semibold border-4 border-pink-900 rounded-full">KNOW MORE</Link>
        </div>
      </div>
      <div className="img-div grid gap-10 pl-16 md:pl-0 justify-start md:justify-center xl:absolute top-0 xl:right-[300px]">
        <img src="/images/cookie-1.png" className="h-[90px] md:h-[200px] rotate-[30deg]" alt="" />
        <div className="relative">
          <img src="/images/cookie-2.webp" className="h-[90px] md:h-[200px] rotate-[-30deg]" alt="" />
          <div className="scale-[0.7] md:scale-100 absolute top-0 right-[-110%] md:right-[-60%] w-56 flex flex-col">
            <img src="/images/arrow.svg" className="pl-5 md:pl-0 w-24 md:w-32 rotate-[-0deg]" alt="" />
            <div className="absolute bottom-[-110px] right-[-20%] w-48">
              <h1 className="font-bold">MONSTER</h1>
              <h3 className="text-sm">Savor New York-style cookies, gourmet marshmallows and semi-sweet chocolate chips for an exquisite treat.</h3>
            </div>
          </div>
        </div>
        <img src="/images/cookie-3.png" className="h-[90px] md:h-[200px] rotate-[30deg]" alt="" />
      </div>
    </section>
  )
}

export default Hero