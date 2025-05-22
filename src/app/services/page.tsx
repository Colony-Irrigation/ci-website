import Link from "next/link";
import Image from "next/image";
import ServiceCard from "@/components/services/ServiceCard";
import { 
  ArrowPathIcon, 
  WrenchScrewdriverIcon, 
  BeakerIcon,
  BoltIcon,
  Square3Stack3DIcon
} from '@heroicons/react/24/outline';
import LawncareSection from "@/components/services/Lawncare";
import IrrigationSection from "@/components/services/Irrigation";
import LandscapingSection from "@/components/services/Landscaping";
import MasonrySection from "@/components/services/Masonry";
import Check from "@/components/Check";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function ServicesPage() {
    return (
        <div className="font-sans max-w-500 flex flex-col items-center">
            <section className="my-12">
                <div className="text-center font-bold m-4 text-5xl">Our Services</div>
                <p className="text-center text-lg max-w-3xl mx-auto">
                    From weekly mowing to complete landscape transformations, we've got you covered. 
                    Browse our services below or <Link href="/quote" className="text-primary hover:underline font-medium">contact us</Link> for something custom.
                </p>
                <hr className="mx-10 mt-6 border-neutral-600 rounded-full border-1" />
            </section>

            {/* Irrigation Section */}
            <IrrigationSection />

            {/* Lawncare Section */}
            <LawncareSection />

            {/* Landscaping Section */}
            <LandscapingSection />

            {/* Masonry Section */}
            <MasonrySection />

            {/* Other Services Section */}
            <section className="mt-16 mb-24 min-w-[80vw]">
                <div className="mx-10">
                    <div className="flex items-center mb-3">
                        <h2 id="other" className="text-3xl font-bold">Custom Projects</h2>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex flex-col md:flex-row items-center ">
                            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                                <p className="text-lg font-medium mb-4">
                                    Don't see exactly what you need? We're still here to help!
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <Check />
                                        <span>Custom water features & fountains</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check />
                                        <span>Stone driveway extensions</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check />
                                        <span>Outdoor lighting design & installation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check />
                                        <span>Drainage solutions & retaining walls</span>
                                    </li>
                                </ul>
                                <Link href="/quote" className="bg-primary text-white py-3 px-8 rounded-lg font-medium hover:bg-opacity-90 transition-colors inline-flex items-center">
                                    Get Your Custom Quote <ArrowRightIcon className="h-6 ml-2 stroke-2"/>
                                </Link>
                            </div>
                            <div className="hidden lg:block">
                                <Image src={"/imgs/Pergola.JPEG"} width={2048} height={1536} alt="Pergola" className="h-60 w-auto rounded-xl shadow-neutral-600 shadow-sm" />
                            </div>
                            {/* <div className="md:w-1/3">
                                <div className="border border-gray-200 p-4 rounded-lg">
                                    <p className="italic text-sm mb-3">"We needed a solution for our sloped backyard with drainage issues. Their team designed a beautiful terraced garden that solved all our problems while adding value to our home."</p>
                                    <p className="text-right font-medium">— Michael & Lisa R.</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to action banner */}
            <section className="bg-gray-50 py-12 mb-16 w-full">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-2xl font-bold mb-4">Ready to transform your outdoor space?</h2>
                    <p className="mb-6">We are here to help with any project, big or small.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/quote" className="bg-primary text-white py-2 px-6 rounded-md font-medium hover:bg-opacity-90 transition-colors">
                            Request a Quote
                        </Link>
                        <Link href="/contact" className="border border-primary text-primary py-2 px-6 rounded-md font-medium hover:bg-gray-50 transition-colors">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}