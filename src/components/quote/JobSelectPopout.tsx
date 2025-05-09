"use client";
import { getQuoteCategory, quoteCategory, quoteKind } from "./kinds";
import { Drawer } from "vaul";
import Image from "next/image";
import Link from "next/link";
import { jobsToTitles } from "./JobSelect";
import { useCallback, useState } from "react";

export default function JobSelectPopout(props: {
    currentSelection: quoteKind,
    setSelected: (kind: quoteKind) => void,
    setCategory: (category: quoteCategory) => void
}) {
    const [open, setOpen] = useState(false);
    const close = useCallback(() => setOpen(false), [setOpen]);
    const drilledProps = { ...props, close };

    return <Drawer.Root open={open} onOpenChange={setOpen}>
        <Drawer.Trigger className="p-1 font-bold text-center underline underline-offset-2 cursor-pointer w-full inline-block">
            See More Options →
        </Drawer.Trigger>
        <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/50 z-30" />
            <Drawer.Content className="bg-white rounded-t-4xl mt-24 fixed bottom-0 left-0 right-0 outline-none z-50" style={{ height: "calc(100% - 100px)" }}>
                <div className="w-20 h-1 rounded-full bg-neutral-600 mx-auto mt-4 mb-6" />
                <div className="p-4 bg-white rounded-t-4xl overflow-y-auto h-full">
                    <Drawer.Title className="text-4xl text-center font-bold  font-sans">
                        Services
                    </Drawer.Title>
                    <div className="h-0  border-neutral-500 border-1 rounded-lg m-4" />
                    <div className="pb-25 max-w-175 mx-auto">
                        <JobCategoryHeader className="mb-4">Lawncare</JobCategoryHeader>
                        <section className="space-y-6">
                            <JobKind jobKind="lawncare-weekly" readMoreElId="lawncare-weekly" {...drilledProps}>
                                Professional weekly lawn mowing, edging, and cleanup to keep your yard looking its best all season long.
                                <Image src={"/imgs/Lawncare.jpg"} alt="Weekly lawn maintenance" width={360} height={270} />
                            </JobKind>
                            <JobKind jobKind="lawncare-seasonal" readMoreElId="lawncare-seasonal" {...drilledProps}>
                                Fall and spring outdoor cleanups to prepare your lawn for the changing seasons.
                                <Image src={"/imgs/Leaf-Blower.jpg"} alt="Seasonal lawn cleanup" width={1874} height={1412} />
                            </JobKind>

                        </section>

                        <JobCategoryHeader className="mt-16 mb-4">Irrigation</JobCategoryHeader>
                        <section className="space-y-6">
                            <JobKind jobKind="sprinkler-install" readMoreElId="sprinkler-install" {...drilledProps}>
                                Complete sprinkler system installation or expansion to ensure your lawn is thoroughly watered all summer long.
                                <Image src={"/imgs/Sprinkler-Box.jpg"} alt="Sprinkler installation" width={1080} height={810} />
                            </JobKind>
                            <JobKind jobKind="sprinkler-startup" readMoreElId="sprinkler-startup" {...drilledProps}>
                                Spring activation and inspection fo your sprinkler system. We provide repairs, adjustments, and system reprogramming for the growing season.
                                <Image src={"/imgs/Sprinkler-2.jpg"} alt="Sprinkler startup service" width={984} height={738} />
                            </JobKind>
                            <JobKind jobKind="sprinkler-winterization" readMoreElId="sprinkler-winterization" {...drilledProps}>
                                Professional winterization to protect your irrigation system from freezing damage during the cold months.
                                <Image src={"/imgs/Sprinkler-1.jpg"} alt="Sprinkler winterization" width={885} height={667} />
                            </JobKind>
                            <JobKind jobKind="sprinkler-repair" readMoreElId="sprinkler-repair" {...drilledProps}>
                                Diagnosis and repair of leaks, broken heads, malfunctioning valves, and other irrigation system issues.
                                <Image src={"/imgs/Broken-Sprinkler.jpg"} alt="Sprinkler repair service" width={443} height={332} />
                            </JobKind>
                        </section>

                        <JobCategoryHeader className="mt-16 mb-4">Landscaping</JobCategoryHeader>
                        <section className="space-y-6">
                            <JobKind jobKind="landscaping-install" readMoreElId="landscaping-install" {...drilledProps}>
                                Complete landscape design and installation services tailored to your property's unique features and your preferences.
                                <Image src={"/imgs/Landscape-5.JPEG"} alt="Landscape installation" width={2048} height={1536} />
                            </JobKind>
                            <JobKind jobKind="landscaping-mulch" readMoreElId="landscaping-mulch" {...drilledProps}>
                                Professional mulch application or resurfacing to enhance curb appeal, retain moisture, and protect your plants.
                                <Image src={"/imgs/Landscape-3.JPEG"} alt="Mulch application" width={2048} height={1536} />
                            </JobKind>
                            <JobKind jobKind="landscaping-trimming" readMoreElId="landscaping-trimming"  {...drilledProps}>
                                Expert pruning and trimming of bushes, hedges, and overgrown plants to maintain shape and promote healthy growth.
                                <Image src={"/imgs/Bush-Trimming.JPG"} alt="Bush trimming" width={4032} height={3024} />
                            </JobKind>
                            <JobKind jobKind="landscaping-weeding" readMoreElId="landscaping-weeding"  {...drilledProps}>
                                Thorough weed removal and prevention services to keep your garden beds and landscaped areas looking pristine.
                                <Image src={"/imgs/Landscape-2.jpg"} alt="Garden weeding" width={500} height={376} />
                            </JobKind>
                        </section>

                        <JobCategoryHeader className="mt-16 mb-4">Masonry</JobCategoryHeader>
                        <section className="space-y-6">
                            <JobKind jobKind="masonry-patio" readMoreElId="masonry-patio" {...drilledProps}>
                                Custom patio design and installation using premium materials to create a beautiful outdoor living space.
                                <Image src={"/imgs/Patio-1.webp"} alt="Stone patio" width={984} height={738} />
                            </JobKind>
                            <JobKind jobKind="masonry-path" readMoreElId="masonry-path" {...drilledProps}>
                                Elegant stone pathway installation to enhance your landscape and provide durable, attractive walkways.
                                <Image src={"/imgs/Pathway.JPEG"} alt="Stone pathway" width={2048} height={1536} />
                            </JobKind>
                            <JobKind jobKind="masonry-cleaning" readMoreElId="masonry-cleaning"  {...drilledProps}>
                                Professional stone cleaning and restoration services to bring back the natural beauty of your masonry surfaces.
                                <Image src={"/imgs/Cleaned-Stones.JPEG"} alt="Stone cleaning" width={2048} height={1536} />
                            </JobKind>
                            <JobKind jobKind="masonry-repair" readMoreElId="masonry-repair"  {...drilledProps}>
                                Expert repair and re-leveling of stone surfaces to fix damage, address safety concerns, and restore functionality.
                                <Image src={"/imgs/Uneven-Stones.JPEG"} alt="Stone repair" width={2048} height={1536} />
                            </JobKind>
                        </section>

                        <JobCategoryHeader className="mt-16 mb-4">Anything Else</JobCategoryHeader>
                        <JobKind jobKind="other" readMoreElId="other"  {...drilledProps} noTitle>
                            Have a unique project in mind? We offer custom solutions to meet your specific outdoor needs.
                            <Image src={"/imgs/Beach.webp"} alt="Custom project" width={984} height={738} />
                        </JobKind>
                    </div>

                </div>
            </Drawer.Content>
        </Drawer.Portal>
    </Drawer.Root>
}

function JobKind(props: {
    jobKind: quoteKind,
    readMoreElId: string,
    currentSelection: quoteKind,
    setSelected: (jobKind: quoteKind) => void,
    close: () => void,
    setCategory: (category: quoteCategory) => void,
    noTitle?: boolean,
    children: [
        description: string,
        image: ReturnType<typeof Image>,
    ]
}) {
    return <div
        className={`font-sans p-2 duration-100 border border-gray-200 relative  rounded-lg ${props.currentSelection == props.jobKind && "shadow-md border-primary border-2"}`}
        onClick={() => {
            if (props.currentSelection == props.jobKind) {
                props.close();
            }

            props.setSelected(props.jobKind);
            props.setCategory(getQuoteCategory(props.jobKind));
        }}
    >
        {!props.noTitle && <div className="text-center text-lg font-semibold mb-2 lg:text-xl lg:my-4">
            {jobsToTitles[props.jobKind]}
        </div>}

        <div className="md:flex gap-3 ">
            <div className=" h-32 lg:h-42 flex-shrink-0 lg:ml-6">
                <Image
                    className="rounded-lg h-full w-full object-cover"

                    {...(props.children[1]! as any).props}
                />
            </div>

            <div className="lg:h-42 flex flex-col">
                <div className="flex-1 overflow-hidden mb-1 grow">
                    <p className="mt-2 mx-4">
                        {props.children[0]}
                    </p>
                </div>

                <div className="text-right pr-4 pb-2 ">
                    <Link
                        href={`/services#${props.readMoreElId}`}
                        className="text-primary  font-semibold hover:underline"
                        onClick={(e) => e.stopPropagation()}
                    >
                        Read More →
                    </Link>

                </div>
            </div>

        </div>

    </div>;
}

function JobCategoryHeader(props: { children: string, className?: string }) {
    return <div className={"text-3xl text-center font-bold font-sans mb-2 " + props.className || ""}>{props.children}</div>;
}
