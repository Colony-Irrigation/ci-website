import Image from "next/image"
import Link from "next/link"
import MobileNavMenu from "./MobileNavMenu"
import PhoneCall from "./Phonecall"
import { ArrowRightIcon } from "@heroicons/react/24/solid"

export default function Navbar() {
    // Image is 414 x 75
    return <>
        <nav className=" z-30  sticky w-full  top-0">
            <div className="h-20 w-full bg-neutral-200 backdrop-blur-lg inset-shadow-white inset-shadow border-b-0 border-amber-900 shadow-md flex flex-wrap px-4  shadow-neutral-700 ">
                <Link href="/" className="mx-auto lg:mx-4 my-auto text-nowrap items-center italic font-bold flex h-full">
                    <Image src={"/LogoTemp.png"} width={358} height={228} alt="Site logo" className="object-contain h-full w-fit p-2 hidden md:block" />
                    <div className="pl-2">
                        <span className="text-4xl py-2 text-blue-950  shadow-black  underline">Colony</span>
                        <span className="text-3xl py-2">&nbsp;Irrigation</span>
                        <br />
                        <div className="text-center text-sm">Professional Outdoor Services</div>
                    </div>
                </Link>
                <div className="hidden lg:flex ml-auto font-sans h-full">
                    <div className="h-full flex items-end">
                        <ul className="flex space-x-8 mt-auto mb-5 underline text-neutral-600 h-fit">
                            <li><Link href={"/about"}>About Us</Link></li>
                            <li><Link href={"/services"}>Our Services</Link></li>
                            <li><Link href={"/gallery"}>Project Gallery</Link></li>
                            <li><Link href={"/quote#contact"}>Contact</Link></li>
                        </ul>
                    </div>
                    <Link href="/quote" className="rounded-lg flex text-center text-primary justify-center items-center p-3 h-10 my-auto font-sans text-xl font-semibold ml-10 shadow-neutral-600 shadow">
                        Get Quote <ArrowRightIcon  className="w-6 ml-2"/>
                    </Link>
                </div>
                <MobileNavMenu />
            </div>


        </nav>
        <div className=" sticky top-20 w-full z-20 bg-green-800 text-white font-sans p-0.5 font-semibold text-center  shadow-neutral-700 shadow-md">
            Spring Is Staring - Schedule a Irrigation Startup Today: <PhoneCall number={7343985837} className="underline">(734) 398-5837</PhoneCall>
        </div>
    </>
}