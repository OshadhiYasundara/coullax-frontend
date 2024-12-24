import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-custom-yellow sm:p-20 p-5 border-t-2">
      <div className="sm:grid grid-cols-12 ">
        <div className="col-span-7 ">
          <Image src="/logo.png" alt="logo" width={150} height={30} />
          <p className="text-base font-normal text-[#828282] font-['Merriweather']">
            Is the best place to review a book
          </p>
        </div>
        <div className="col-span-3 max-sm:my-5">
          <h2>Navigation</h2>
          <ul className="text-sm space-y-2 text-[#828282] font-['Merriweather']">
            <li>
              <Link href={"/"}>Home</Link>
            </li>

            <li>
              <Link href={"/allreviews"}>All Review</Link>
            </li>

            <li>
              <Link href={"/addreview"}>Add Review</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-2 space-y-5">
          <h2>Company</h2>
          <ul className="text-sm text-[#828282] font-['Merriweather']">
            <li>admin@reviewbook.com</li>
            <li>Jln. Stiabudhi No. 193</li>
            <li>Bandung Indonesia</li>
          </ul>
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
      </div>

      <div className="flex  justify-between">
        <div className="space-x-20">
          <p className="text-center text-[#828282] text-sm">
            © 2024 ReviewBook. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
