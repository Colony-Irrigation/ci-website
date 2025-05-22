import Image from "next/image"
import Link from "next/link"

export default function Service(props: {
    name: string,
    description: string,
    href: string,
    imgSrc: string,
    imgHeight: number,
    imgWidth: number
}) {
    return <Link href={props.href} className={`relative group rounded-lg border-1 overflow-hidden h-60 bg-green-950 border-neutral-500 shadow-neutral-600 shadow-lg text-white text-center flex items-center justify-center`}
        // style={{
        //     backgroundImage: `url("${props.imgSrc}")`

        // }}
    >           

        <Image src={props.imgSrc} alt={props.name} width={props.imgWidth} height={props.imgHeight} className="object-cover w-auto h-auto min-w-full min-h-full " />
        {/* <img src={props.imgSrc} className="rounded-t-lg h-48 w-full "/> */}
        <div className="absolute bottom-0 w-full pt-20 bg-gradient-to-b from-transparent to-primary to-60% pb-2">
            <h1 className="text-xl font-bold font-sans tracking-wider p-2 text-white ">
                <span className="">{props.name}</span>
            </h1>
            <div className="h-0 group-hover:h-auto transition-all duration-200 overflow-hidden m-2 mt-0">
                {props.description}
            </div>                
        </div>
        {/* <div className="inset-0 bg-gradient-to-t h-full from-neutral-900 to-transparent/30% rounded-lg p-3">
            <div className="text-xl font-bold">{props.name}</div>
            <p className="text-sm mt-auto">{props.description}</p>
        </div> */}


    </Link>
}