import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return (
    <div className='m-20 h-96 bg-custom-yellow rounded-3xl px-20'>
      <div className="grid grid-cols-2 content-center h-full  ">
        <div className=" space-y-5 grid content-center font-merriweather">
            <h1 className="text-5xl font-bold text-custom-text">Book is a 
            window to the world</h1>
            <p className="text-md text-custom-text">wake up your dream by reading a book every day</p>
        </div>
        <div className=" justify-center grid pl-10  ">
        <Image src="/heroimage1.png" alt="book" width={300} height={300} />
        </div>
      </div>
    </div>
  )
}
