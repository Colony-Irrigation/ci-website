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
                        <p>We will define new garden beds, plant flowers, bushes, and trees, or complete any other landscaping work you are looking for. Its important to us to work <span className="font-semibold">with you</span>, through every step of the process, from initial planning to final touches. </p>
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
                quoteLink="/quote?jobKind=landscaping-install"
            />
            <ServiceCard
                id="landscaping-mulch"
                imageSrc="/imgs/Landscape-4.JPEG"
                imageAlt="Mulch application"
                title="Mulch Resurfacing"
                description={
                    <div>
                        <p className="mb-2">Fresh mulch does more than look good:</p>
                        <div className="grid grid-cols-2 gap-4 gap-x-3 mb-8 mt-4 lg:gap-6  lg:font-semibold lg:text-center outline-primary lg:outline-1 rounded-2xl lg:p-4">
                            <div className="flex">
                                <Check className="h-6 w-6 flex-shrink-0" />
                                <div className="lg:ml-2 text-center grow">Improves plant health</div>
                            </div>
                            <div className="flex">
                                <Check className="h-6 w-6 flex-shrink-0" />
                                <div className="lg:ml-2 text-center grow">Conserves moisture</div>
                            </div>
                            <div className="flex">
                                <Check className="h-6 w-6 flex-shrink-0" />
                                <div className="lg:ml-2 text-center grow">Prevents weeds</div>
                            </div>
                            <div className="flex">
                                <Check className="h-6 w-6 flex-shrink-0" />
                                <div className="lg:ml-2 text-center grow">Defines garden areas</div>
                            </div>
                        </div>
                        <p className="text-sm italic mt-6">Available in all common colors.</p>
                        <p className="text-sm italic mt-2">Rubber mulch, lava rocks, and pea gravel cover are also available.</p>
                    </div>
                }
                quoteLink="/quote?jobKind=landscaping-mulch"
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
                            We offer trimming services for all your shrubs, bushes, and plants. Regular maintenance is recommended as it prevents overgrowth and leads to fuller foliage.
                        </p>
                    </div>
                }
                quoteLink="/quote?jobKind=landscaping-trimming"
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
                quoteLink="/quote?jobKind=landscaping-weeding"
            />
        </div>
    </div>
</section>
}