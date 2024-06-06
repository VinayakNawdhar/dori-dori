import React from 'react'

const Loader = () => {
  return (
    <div className='h-screen w-full bg-pink-50 absolute z-[999] flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-5'>
            <img className='h-32' src="https://66.media.tumblr.com/tumblr_maw5xhB1jb1rfjowdo1_500.gif" alt="" />
            <h1 className='text-xl font-medium text-center text-[var(--font-color)]'>Loading...</h1>
        </div>
    </div>
  )
}

export default Loader