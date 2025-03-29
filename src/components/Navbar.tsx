import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    // Image is 414 x 75
    return <nav className="h-20 absolute w-full bg-white backdrop-blur-lg inset-shadow-white inset-shadow border-b-0 border-amber-900 shadow-md flex px-4 align-middle justify-center shadow-neutral-700 z-100">
        <Link href="/" className="mx-4 my-auto text-nowrap items-center italic font-bold ">
            <span className="text-4xl py-2 text-blue-950  shadow-black  underline">Colony</span>
            <span className="text-3xl py-2">&nbsp;Irrigation</span>
            <br/>
            <div className="text-center text-sm">Professional Outdoor Services</div>
        </Link>
    </nav>
}