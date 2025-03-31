"use client";
import { getQuoteCategory, quoteCategory, quoteKind } from "./kinds"
import { Drawer } from "vaul";
import Image from "next/image";
import Link from "next/link";
import { jobsToTitles } from "./JobSelect";

export default function JobSelectPopout(props: {
    currentSelection: quoteKind,
    setSelected: (kind: quoteKind) => void,
    setCategory: (category: quoteCategory) => void
}) {
    const {
        setSelected, setCategory, currentSelection
    } = props;

    return <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/50" />
        {/* <Drawer.Content className="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white">
            <Drawer.Title>Services</Drawer.Title>
            <div className="bg-white h-80">
                <JobKind jobKind="masonry-patio" readMoreHref="/">
                    We install large scale patios and shii
                    <Image src={"/imgs/Patio with firepit.webp"} alt="Patio image" width={984} height={738}/>
                </JobKind>
            </div>
        </Drawer.Content> */}
        <Drawer.Content className="bg-gray-100 rounded-t-4xl mt-24 fixed bottom-0 left-0 right-0 outline-none" style={{height: "calc(100% - 100px)"}}>
            <div className="p-4 bg-white rounded-t-4xl overflow-y-auto h-full">
                <Drawer.Title className="text-4xl text-center font-bold  font-sans">
                    Services
                </Drawer.Title>
                <div className="h-0  border-neutral-500 border-1 rounded-lg m-4"/>
                <div className="pb-25">
                    <JobCategoryHeader className="mb-4">Lawncare</JobCategoryHeader>
                    <JobKind jobKind="lawncare" readMoreHref="/" noTitle {...props}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        <Image src={"/imgs/Patio with firepit.webp"} alt="Patio image" width={984} height={738} />
                    </JobKind>

                    <JobCategoryHeader className="mt-16 mb-4">Irrigation</JobCategoryHeader>
                    <section className="space-y-6">
                        <JobKind jobKind="sprinkler-install" readMoreHref="/" {...props}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            <Image src={"/imgs/Sprinklers.webp"} alt="Patio image" width={984} height={738} />
                        </JobKind>
                        <JobKind jobKind="sprinkler-startup" readMoreHref="/" {...props}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            <Image src={"/imgs/Sprinklers.webp"} alt="Patio image" width={984} height={738} />
                        </JobKind>
                        <JobKind jobKind="sprinkler-winterization" readMoreHref="/"  {...props}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            <Image src={"/imgs/Sprinklers.webp"} alt="Patio image" width={984} height={738} />
                        </JobKind>
                        <JobKind jobKind="sprinkler-repair" readMoreHref="/" {...props}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            <Image src={"/imgs/Sprinklers.webp"} alt="Patio image" width={984} height={738} />
                        </JobKind>
                    </section>

                    <JobCategoryHeader className="mt-16 mb-4">Landscaping</JobCategoryHeader>
                    <section className="space-y-6">
                        <JobKind jobKind="landscaping-install" readMoreHref="/" {...props}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            <Image src={"/imgs/Landscape 2.jpg"} alt="Patio image" width={984} height={738} />
                        </JobKind>
                        <JobKind jobKind="landscaping-mulch" readMoreHref="/" {...props}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            <Image src={"/imgs/Landscape 2.jpg"} alt="Patio image" width={984} height={738} />
                        </JobKind>
                        <JobKind jobKind="landscaping-trimming" readMoreHref="/"  {...props}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            <Image src={"/imgs/Landscape 2.jpg"} alt="Patio image" width={984} height={738} />
                        </JobKind>
                    </section>

                    <JobCategoryHeader className="mt-16 mb-4">Masonry</JobCategoryHeader>
                    <section className="space-y-6">
                        <JobKind jobKind="masonry-patio" readMoreHref="/" {...props}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            <Image src={"/imgs/Stone Staircase.webp"} alt="Patio image" width={984} height={738} />
                        </JobKind>
                        <JobKind jobKind="masonry-path" readMoreHref="/" {...props}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            <Image src={"/imgs/Stone Staircase.webp"} alt="Patio image" width={984} height={738} />
                        </JobKind>
                        <JobKind jobKind="masonry-cleaning" readMoreHref="/"  {...props}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            <Image src={"/imgs/Stone Staircase.webp"} alt="Patio image" width={984} height={738} />
                        </JobKind>
                        <JobKind jobKind="masonry-repair" readMoreHref="/"  {...props}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            <Image src={"/imgs/Stone Staircase.webp"} alt="Patio image" width={984} height={738} />
                        </JobKind>
                    </section>
                   
                   <JobCategoryHeader className="mt-16 mb-4">Anything Else</JobCategoryHeader>
                   <JobKind jobKind="other" readMoreHref="/"  {...props} noTitle>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            <Image src={"/imgs/Beach.webp"} alt="Patio image" width={984} height={738} />
                    </JobKind>
                </div>

            </div>
        </Drawer.Content>
    </Drawer.Portal>
}

function JobKind(props: {
    jobKind: quoteKind,
    readMoreHref: string,
    currentSelection: quoteKind
    setSelected: (jobKind: quoteKind) => void,
    setCategory: (category: quoteCategory) => void,
    noTitle?: boolean,
    // close: () => void,
    children: [
        description: string,
        image: ReturnType<typeof Image>,
    ]
}) {

    return <div className={`font-sans p-2 duration-100 shadow-neutral-600 rounded-lg outline-primary ${props.currentSelection == props.jobKind && "shadow-lg scale-95 outline-2"}`}onClick={() => {
        props.setSelected(props.jobKind);
        props.setCategory(getQuoteCategory(props.jobKind));
    }}>
        {!props.noTitle && <div className="text-center text-lg font-semibold">
            {jobsToTitles[props.jobKind]}

        </div>}
        <div className={`flex h-30 `}>
            <div className="h-full">
                <div className="h-full ">
                    <Image className={`rounded-lg aspect-auto h-full w-auto`} {...(props.children[1]! as any).props}></Image>

                </div>

            </div>
            <div className="h-full grow w-min p-2 rounded-r-lg">
                <div>
                </div>
                <div className="">
                    {props.children[0]}
                    <Link href={props.readMoreHref} className="text-neutral-500 text-sm pl-2 underline">Read More</Link>
                </div>
            </div>
        </div>

    </div>

}

function JobCategoryHeader(props: {children: string, className?: string}) {
    return <div className={"text-3xl text-center font-bold font-sans mb-2 " + props.className || ""}>{props.children}</div>
}
