import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className=" h-24 flex justify-between   mx-20 items-center"> 
    <Image src="/logo.png" alt="logo" width={150} height={30} />
    <div className="">
        
            <ul className="flex space-x-6 text-custom-text font-merriweather text-lg font-semibold">
                <li><Link href="#home" className="delay-100 ease-out transition  hover:text-fuchsia-900">Home</Link></li>
                <li><Link href="#about" className="delay-100 ease-out transition  hover:text-fuchsia-900">All Reviews</Link></li>
                <li><Link href="#services" className="delay-100 ease-out transition  hover:text-fuchsia-900">Add Review</Link></li>
            </ul>
            
      
    </div>

         
    </nav>
  )
}
