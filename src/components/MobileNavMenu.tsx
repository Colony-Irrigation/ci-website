"use client"
import {ClipboardDocumentListIcon,  } from "@heroicons/react/24/outline";
import { Bars3Icon,  PhotoIcon, HomeIcon, PhoneIcon,  InformationCircleIcon} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react"
import { createPortal } from "react-dom";
import { text } from "stream/consumers";
import { Drawer } from "vaul";

export default function MobileNavMenu() {
    const [open, setOpen] = useState(false);
    // console.log(open)

    return <Drawer.Root direction="top" open={open} onOpenChange={setOpen}>

        <Drawer.Trigger className="lg:hidden">
            <Bars3Icon className={`h-10 duration-200 ${open ? "scale-y-125" :"scale-y-75"}`}/>
        </Drawer.Trigger>
        <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/50 z-28" />
            <Drawer.Content className={"after:pointer-events-none bg-gray-100 rounded-b-4xl fixed left-0 right-0 top-0 mt-20 outline-none z-29 flex  font-sans"}
            >
                <div className="w-full mx-8">
                    <Drawer.Title className="text-center text-2xl mt-4 mb-2 font-semibold ">
                        Quick Links
                    </Drawer.Title>
                    <div className="space-y-3 flex flex-col w-fit mx-auto mb-4">
                        <PageLink title="Our Services" href="/services" imageLink="/Projects/98/IMG_0100.JPEG" setOpen={setOpen} icon={HomeIcon} />
                        <PageLink title="About Us" href="/about" imageLink="/Projects/865/IMG_0865.JPEG" setOpen={setOpen} icon={InformationCircleIcon} />
                        <PageLink title="Project Gallery" href="/gallery" imageLink="/Projects/1097/IMG_1098.JPEG" setOpen={setOpen} icon={PhotoIcon} />
                        <PageLink title="Contact" href="/quote#contact" imageLink="/Projects/1149/IMG_1153.JPEG" setOpen={setOpen} icon={PhoneIcon} />
                        <PageLink title="Request a Quote" href="/quote" imageLink="/Projects/161/IMG_0161.JPG" setOpen={setOpen} icon={ClipboardDocumentListIcon} />
                    </div>

                    <div className="h-0  border-neutral-500 border-2 rounded-lg mx-auto mb-4 w-20"/>
                </div>

                {/* <Drawer.Title>Explore</Drawer.Title> */}
            </Drawer.Content>
        </Drawer.Portal>
    </Drawer.Root>
}

function PageLink(props: { 
    title: string, 
    href: string, 
    imageLink: string, 
    setOpen: (val: boolean) => void, 
    icon: React.ElementType 
}) {
    const IconComponent = props.icon;
    
    return <Link href={props.href} onClick={() => props.setOpen(false)} 
        className={`flex items-center relative py-2  rounded-lg w-full bg-primary last:bg-white last:outline-primary last:outline-2 last:text-primary text-white font-semibold text-xl px-4 `}
    >   
        <IconComponent className="h-6 inline mr-4"/>
        {props.title}
        {/* <Image src={props.imageLink} fill loading="eager" alt="Background Image" className="object-cover -z-1"/> */}
        {/* <div className="h-full w-full flex items-center justify-center text-2xl text-white font-bold italic bg-gradient-to-r from-black/25 via-black/65 via-50% to-black/25 rounded-lg ">
            <div className="relative rounded-lg z-10 px-4 py-2">
                <div className="relative z-10 underline text-shadow-[0_0_4px_black] shadow-black">
                    {props.title} 
                </div>
            </div>
        </div> */}
    </Link>
}