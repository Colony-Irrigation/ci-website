import Image from "next/image";
import ServiceCard from "./ServiceCard";
import Check from "@/components/Check";
import Link from "next/link";

export default function LandscapingSection() {
    return             <section className="mt-16">
    <div className="mx-10">
        <div className="flex items-center mb-3">
            <h2 id="landscaping" className="text-3xl font-bold">Landscaping</h2>
        </div>
        <p className="mb-6">
            Create an outdoor space that reflects your style and enhances your property value.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
                id="landscaping-install"
                imageSrc="/imgs/Landscape-1.jpg"
                imageAlt="Landscape installation"
                title="Landscape Installation"
                description={
                    <div>
                        <p>Transform your yard with professional landscaping that complements whatever style you want. We'll help work you through every step of the process, from planning a design to choosing which final picture looks the bes!.</p>
                        <p className="mt-8  font-semibold text-lg">Already have landscaping but want to revitalize it?</p>
                        <p className="mb-2 italic"> We do that too:</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-3">
                            <div className="text-center">
                                <div className="relative w-full sm:w-40 mx-auto">
                                    <Image 
                                        src="/Projects/1178/IMG_1136.JPEG" 
                                        alt="Before landscaping" 
                                        width={2048}
                                        height={1536}
                                        className="rounded-lg  w-auto h-auto"
                                    />
                                </div>
                                <p className="text-xs mt-1 font-semibold">Before</p>
                            </div>
                            <div className="text-center">
                                <div className="relative w-full sm:w-40 mx-auto">
                                    <Image 
                                        src="/Projects/1178/IMG_1179.JPEG" 
                                        alt="After landscaping" 
                                        width={2048}
                                        height={1536}
                                        className="rounded-lg w-auto"
                                    />
                                </div>
                                <p className="text-xs mt-1 font-semibold">After</p>
                            </div>
                        </div>
                    </div>
                }
                quoteLink="/quote?category=landscaping"
            />
            <ServiceCard
                id="landscaping-mulch"
                imageSrc="/imgs/Landscape-4.JPEG"
                imageAlt="Mulch application"
                title={
                    <div className="flex items-center">
                        <span>Mulch Resurfacing</span>
                    </div>
                }
                description={
                    <div>
                        <p className="mb-2">Fresh mulch does more than look good:</p>
                        <div className="grid grid-cols-2 gap-2 gap-x-3 mb-2">
                            <div className="flex items-center">
                                <Check className="h-6 w-6 flex-shrink-0" />
                                <div className="ml-2">Improves plant health</div>
                            </div>
                            <div className="flex items-center">
                                <Check className="h-6 w-6 flex-shrink-0" />
                                <div className="ml-2">Conserves moisture</div>
                            </div>
                            <div className="flex items-center">
                                <Check className="h-6 w-6 flex-shrink-0" />
                                <div className="ml-2">Prevents weeds</div>
                            </div>
                            <div className="flex items-center">
                                <Check className="h-6 w-6 flex-shrink-0" />
                                <div className="ml-2">Defines garden areas</div>
                            </div>
                        </div>
                        <p className="text-sm italic mt-6">Available in all common colors. <br/>Rubber mulch, lava rocks, and pea gravel cover are also available.</p>
                    </div>
                }
                quoteLink="/quote?category=landscaping"
            />
            <ServiceCard
                id="landscaping-trimming"
                imageSrc="/imgs/Trimming.JPG"
                imageAlt="Bush and hedge trimming"
                title={
                    <div className="flex items-center">
                        <span>Bush & Hedge Trimming</span>
                    </div>
                }
                description={
                    <div>
                        <p>
                            We offer trimming services for all common shrubs, bushes, and plants. Regular maintenance is recommended as it prevents overgrowth and leads to fuller foliage.
                        </p>
                    </div>
                }
                quoteLink="/quote?category=landscaping"
            />
            <ServiceCard
                id="landscaping-weeding"
                imageSrc="/imgs/Landscape-2.jpg"
                imageAlt="Garden weeding"
                title={
                    <div className="flex items-center">
                        <span>Weeding Services</span>
                    </div>
                }
                description={
                    <div>
                        <p className="mb-2">For your natural landscaping, we provide:</p>
                        <ul className="list-disc pl-5 space-y-1 mb-2">
                            <li>Hand weeding of all garden beds</li>
                            <li>Selective spot-treatment when necessary</li>
                            <li>Pre-emergent applications to prevent future weeds</li>
                        </ul>
                        <p>If you encounter weeds and moss taking over your <span className="font-semibold">patio or pathway</span>, check out our <Link href={"/services#paver-cleaning"} className="text-primary underline ">Stone Cleaning & Restoration</Link> services </p>
                    </div>
                }
                quoteLink="/quote?category=landscaping"
            />
        </div>
    </div>
</section>
}