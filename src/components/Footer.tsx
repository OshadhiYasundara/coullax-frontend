import React from "react";
import Image from 'next/image';

export default function Footer(){
   return (
        <div className="bg-custom-yellow">
            <div className="grid grid-cols-12 px-44 py-10">
                <div className="col-span-7 ">
                    <Image src="/logo.png" alt="logo" width={150} height={30} />
                    <p className="text-base font-normal text-[#828282] font-['Merriweather']">Is the best place to review a book </p>
                </div>
                <div className="col-span-3">
                    <h2>Navigation</h2>
                    <ul className="text-sm text-[#828282] font-['Merriweather']">
                        <li>Home</li>
                        <li>BestSeller</li>
                        <li>Category</li>
                        <li>Community</li>
                        <li>Blog</li>
                    </ul>    
                </div>
                <div className="col-span-2">
                    <h2>Company</h2>
                    <ul className="text-sm text-[#828282] font-['Merriweather']">
                        <li>admin@reviewbook.com</li>
                        <li>Jln. Stiabudhi No. 193</li>
                        <li>Bandung Indonesia</li>
                    </ul>            
                </div>

            </div>

            <div className="flex px-44 justify-between">
                <div className="space-x-20">
                    <p className="text-center text-[#828282] text-sm">© 2021 ReviewBook. All Rights Reserved</p>
                </div>
                <div>
                    <ul className="flex space-x-4">
                        <li>
                            <Image src="/facebook.svg" alt="logo" width={30} height={30} />
                        </li>
                        <li>
                            <Image src="/instagram.svg" alt="logo" width={30} height={30} />
                        </li>
                    </ul>
                </div>
            </div>

            <div>

            </div>
        </div>
   ) 
}