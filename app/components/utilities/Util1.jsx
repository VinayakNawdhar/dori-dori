import React from 'react'

const Util1 = () => {
  return (
    <div className='min-h-[300px] flex flex-wrap gap-8 justify-evenly pt-16'>
        <div className='flex flex-col gap-3 w-[300px] justify-start items-center'>
            <img className=' w-[55px]' src="/images/hand-love.avif" alt="" />
            <h1 className='text-xl font-semibold font-["Archivo"]'>Handmade</h1>
            <p className='text-lg text-center opacity-60 font-medium'>All of our products are lovingly crafted to give them the perfect soft, cloud-like texture</p>
        </div>
        <div className='flex flex-col gap-3 w-[300px] justify-start items-center'>
            <img className=' w-[55px]' src="/images/aus-map.png" alt="" />
            <h1 className='text-xl font-semibold font-["Archivo"]'>Made with ❤️ in India</h1>
            <p className='text-lg text-center opacity-60 font-medium'>We ship all over India!</p>
        </div>
        <div className='flex flex-col gap-3 w-[300px] justify-start items-center'>
            <img className=' w-[55px]' src="/images/bowl.png" alt="" />
            <h1 className='text-xl font-semibold font-["Archivo"]'>Small Batches</h1>
            <p className='text-lg text-center opacity-60 font-medium'>So you know they're going to be super fresh and fluffy!</p>
        </div>
    </div>
  )
}

export default Util1