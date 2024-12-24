import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return (
    <div className='sm:m-20 h-96 bg-custom-yellow rounded-3xl sm:px-20 px-5'>
      <div className="sm:grid grid-cols-2 content-center h-full  ">
        <div className=" space-y-5 grid content-center font-merriweather">
            <h1 className="text-5xl font-bold text-custom-text">Book is a 
            window to the world</h1>
            <p className="text-md text-custom-text">wake up your dream by reading a book every day</p>
        </div>
        <div className="hidden justify-center sm:grid pl-10  ">
        <Image src="/heroimage1.png" alt="book" width={300} height={300} />
        </div>
      </div>
    </div>
  )
}

