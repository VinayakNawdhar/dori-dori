'use client'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
const Hero = () => {
  useGSAP(() => {
    gsap.from('.hiding h1',{
      y : '100%',
      opacity : 0,
      stagger : 0.5,
      ease : "Power1.easeInOut",
      duration : 0.8,
      delay : 1
    })
    gsap.from('nav',{
      y:'-100%',
      opacity : 0,
      ease : "Power1.easeInOut",
      duration : 1
    })
  })
  return (
    <section className="pt-[110px] relative" id="hero">
      <div className="px-8 pt-14 pb-6 xl:px-32 xl:py-20">
        <div className="hiding"><h1 className="text-[13vw] xl:text-8xl font-extrabold xl:w-[63%] tagline">Welcome to</h1></div>
        <div className="hiding"><h1 className="text-[13vw] xl:text-8xl font-extrabold xl:w-[63%] text-pink-800 tagline">Dori Dori</h1></div>
        <div className="hiding"><h1 className="text-[13vw] xl:text-8xl font-extrabold xl:w-[63%] tagline">Wonderland!</h1></div>
        <div className="flex gap-8 py-10">
          <button className="px-4 w-60 py-2 md:px-8 md:py-6 md:text-xl xl:w-48 font-semibold rounded-full text-white bg-pink-800 hover:bg-pink-700 transition-all duration-500">ORDER NOW</button>
          <button className="px-4 w-60 py-2 md:px-8 md:py-6 md:text-xl xl:w-48 font-semibold border-4 border-pink-900 rounded-full">Catering</button>
        </div>
      </div>
      <div className="img-div grid gap-10 justify-center xl:absolute top-0 xl:right-[300px]">
        <img src="/images/cookie-1.png" className="h-[150px] xl:h-[200px] rotate-[30deg]" alt="" />
        <div className="relative">
          <img src="/images/cookie-2.webp" className="h-[150px] xl:h-[200px] rotate-[-30deg]" alt="" />
          <div className="absolute top-0 right-[-60%] w-56 xl:flex flex-col hidden">
            <img src="/images/arrow.svg" className="w-32 rotate-[-0deg]" alt="" />
            <div className="absolute bottom-[-110px] right-[-20%] w-48">
              <h1 className="font-bold">MONSTER</h1>
              <h3 className="text-sm">Gluten-friendly peanut butter oatmeal cookie with semi-sweet chocolate chips & M&M’s</h3>
            </div>
          </div>
        </div>
        <img src="/images/cookie-3.png" className="h-[150px] xl:h-[200px] rotate-[30deg]" alt="" />
      </div>
    </section>
  )
}

export default Hero