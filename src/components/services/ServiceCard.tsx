"use client";

import Link from "next/link";
import Image from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";

interface ServiceCardProps {
    imageSrc: string;
    imageAlt: string;
    title: ReactNode;
    description: ReactNode;
    quoteLink: string;
    id: string;
}

export default function ServiceCard({
    imageSrc,
    imageAlt,
    title,
    description,
    quoteLink,
    id
}: ServiceCardProps) {
    // const [open, setOpen] = useState(false);
    // const [showToggle, setShowToggle] = useState(false);
    // const textRef = useRef<HTMLParagraphElement>(null);

    return (
        <div className="p-4 border border-primary rounded-xl shadow-md relative pb-20 max-w-160" id={id}>
            <div className="flex justify-center items-center">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={500}
                    height={400}
                    className="rounded-lg w-full object-cover"
                />
            </div>
            
            <div className="max-w-100 mx-auto lg:mt-8">

                <h3 className="text-xl font-semibold mt-4 text-center">{title}</h3>
                <hr />
                <div className="mt-4 mb-8">
                    {description}
                </div>


            </div>
            <Link href={quoteLink} className="flex items-center justify-center font-sans w-full absolute bottom-0 bg-primary hover:brightness-110 -ml-4  p-2 rounded-b-lg text h-20 ">
                    <div className="text-xl text-white p-1 underline text-center font-semibold">Request a Quote</div>
                </Link>
        </div>
    );
}