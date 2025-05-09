import Image from "next/image";
import ServiceCard from "./ServiceCard";

export default function MasonrySection() {
    return             <section className="mt-16">
    <div className="mx-10">
        <div className="flex items-center mb-3">
            <h2 id="masonry" className="text-3xl font-bold">Masonry & Hardscaping</h2>
        </div>
        <p className="mb-6">
            Beautiful stone elements that add value and character to your outdoor space.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
                id="masonry-patio"
                imageSrc="/imgs/Patio-1.webp"
                imageAlt="Stone patio installation"
                title="Patio Installation"
                description={
                    <div>

                        <p>Create a complete outdoor living space with custom-built patios, fire pits, retaining walls, and even outdoor kitchens. We'll help you select the perfect materials and design for your lifestyle and home.</p>
                        <div className="p-3 mb-3 rounded-lg">
                            <h4 className="font-medium mb-1">Popular paver/brick colors:</h4>
                            <div className="flex flex-wrap gap-2">
                                <div className="bg-gray-300 w-12 h-6 rounded-md shadow-neutral-600 shadow-sm"></div>
                                <div className="bg-amber-800/50 w-12 h-6 rounded-md shadow-neutral-600 shadow-sm"></div>
                                <div className="bg-amber-200/50 w-12 h-6 rounded-md shadow-neutral-600 shadow-sm"></div>
                                <div className="bg-red-400 w-12 h-6 rounded-md shadow-neutral-600 shadow-sm"></div>
                                <div className="bg-slate-500 w-12 h-6 rounded-md shadow-neutral-600 shadow-sm"></div>
                                <div className="bg-stone-500 w-12 h-6 rounded-md shadow-neutral-600 shadow-sm"></div>
                            </div>
                        </div>
                    </div>
                }
                quoteLink="/quote?jobKind=masonry-patio"
            />
            <ServiceCard
                id="masonry-path"
                imageSrc="/imgs/Pathway.JPEG"
                imageAlt="Stone pathway"
                title={
                    <div className="flex items-center">
                        <span>Pathway Installation</span>
                    </div>
                }
                description={
                    <div>
                        <p>Connect your landscape with beautiful, functional pathways that guide movement and create visual interest. We design paths that complement your home's style and stand up to years of use.</p>
                    </div>
                }
                quoteLink="/quote?jobKind=masonry-path"
            />
            <ServiceCard
                id="masonry-cleaning"
                imageSrc="/imgs/Stone-Cleaning-After.JPEG"
                imageAlt="Stone cleaning"
                title="Stone Cleaning & Restoration"
                description={
                    <div>
                        <div className="flex flex-col justify-between mb-3">
                            <div className="text-center">
                                <div className="relative mx-8">
                                    <Image src="/imgs/Stone-Cleaning-Before.JPEG" alt="Before cleaning" width={2048} height={1536} className="rounded-lg object-cover" />
                                </div>
                                <p className="text-sm mt-1">Before</p>
                            </div>
                        </div>
                        <p>We power wash and treat your pavers to remove stains, algae, and weathering without damaging the stone. We can also reseal any areas to protect your investment for years to come.</p>
                    </div>
                }
                quoteLink="/quote?jobKind=masonry-cleaning"
            />
            <ServiceCard
                id="masonry-repair"
                imageSrc="/imgs/Uneven-Stones.JPEG"
                imageAlt="Stone repair"
                title="Stone Repair & Re-leveling"
                description={
                    <div>
                        <p className="mb-2">Common issues we fix:</p>
                        <ul className="list-disc pl-5 space-y-1 mb-3 font-semibold">
                            <li>Settling & sinking</li>
                            <li>Cracked stones</li>
                            <li>Heaving from frost</li>
                            <li>Loose or missing joints</li>
                        </ul>
                        <p>We restore damaged stone features to like-new condition, correcting the underlying issues to prevent future problems.</p>
                    </div>
                }
                quoteLink="/quote?jobKind=masonry-repair"
            />
        </div>
    </div>
</section>

}