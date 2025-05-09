import Email from "@/components/Email";
import FadingCarousel from "@/components/FadingCarousel";
import Quote from "@/components/Quote";
import { AngiesRating, GoogleRating, YelpRating } from "@/components/Rating";
import Review from "@/components/Review";
import Service from "@/components/Service";
import SlidingCarousel from "@/components/SlidingCarousel";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (<>
        <section className="bg-cover bg-center  h-130 font-sans shadow-lg bg-[url(/imgs/Landscape-5.JPEG)] bg-cover [background-position: 50% 0%] bg-scroll md:bg-fixed ">
            <div className="backdrop-brightness-30 h-full">
                {/* <Image src="/imgs/Landscape-1.jpg" width={500} height={376} className="object-cover h-130 min-w-full fixed -z-10 brightness-30" alt="Background"/> */}
                <div className="  h-full -mb-2">
                    <div className="h-full flex flex-col justify-center items-center p-4">
                        <div className="text-5xl lg:text-7xl font-bold text-white  outline-0 outline-white rounded-lg p-4  text-center">
                            <span>Elevate </span>
                            <span className="">Your </span>
                            <span>Outdoor </span>
                            <span>Space</span>
                        </div>
                        <div className="text-white underline text-lg lg:text-2xl font-semibold mt-2">
                            <Link href="/quote">Get a Quote Today →</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="-mt-3 bg-white rounded-t-xl z-10 relative font-sans">
            <div className="bg-amber-950/12 p-3 pt-12 rounded-t-xl ">
                <div className="text-center text-lg font-sans max-w-200 mx-auto">
                    <div className="font-bold font-sans mb-6 text-4xl text-center">
                        <span>Your Trusted Lawn & Landscape Experts</span>
                        {/* <br />
                            <span className="text-5xl font-bold">To Life</span> */}
                        {/* <hr className="mt-2 shadow shadow-neutral-500 border-amber-950"/> */}

                    </div>
                    Since 2001, we have provided <span className="font-semibold">professional</span> and <span className="font-semibold">affordable</span> lawncare, landscaping, irrigation, and hardscape design services for customers throughout all of Southeast Michigan
                </div>
                <div className="text-center underline py-6">
                    <Link href={"/about"}>More About Us</Link>
                </div>
            </div>
        </section>

        <section className="p-3 bg-white-muted font-sans">
            <div className="bg-gradient-to-t from-gray-100 to white rounded-lg  p-6 shadow-neutral-500">
                <div className="font-bold font-sans mb-6 text-3xl text-center">
                    <span>Services</span>
                    <hr className="mt-2 shadow shadow-neutral-500 border-amber-950" />

                </div>
                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <Service
                        name="Lawn Care"
                        description="Weekly trimming, weed whipping, and walkway edging - or a seasonal cleanup"
                        href="/quote?category=lawncare"
                        imgSrc="/imgs/Lawncare.jpg"
                        imgWidth={270}
                        imgHeight={360}
                    />
                    <Service
                        name="Landscaping"
                        description="Professional design help, installation, removal, as well as annual trimmings and upkeep"
                        href="/quote?category=landscaping"
                        imgSrc="/imgs/Landscape-2.jpg"
                        imgWidth={500}
                        imgHeight={376}
                    />
                    <Service
                        name="Masonry & Hardscaping"
                        description="Installations and repairs for porches, walkways, driveway extensions, and patios"
                        href="/quote?category=masonry"
                        imgSrc="/imgs/Stone Staircase.webp"
                        imgWidth={294}
                        imgHeight={360}
                    />
                    <Service
                        name="Sprinklers"
                        description="Spring startups, zone installations, nozzle, pipe, & valve repairs, and winterizations"
                        href="/quote?category=sprinkler"
                        imgSrc="/imgs/Sprinkler-1.webp"
                        imgWidth={294}
                        imgHeight={360}
                    />
                </div>
            </div>
        </section>
        <section className="font-sans pt-12 mb-24">
            <div className="text-center text-3xl font-bold mx-8 mt-8">
                Trusted by Our Community for
                <br />
                <span className="font-extrabold text-5xl">Over 2 Decades</span>
            </div>
            <div className="max-w-200 mx-auto">
                <SlidingCarousel displayTime={1000}>
                    <Review name="Ronald Feick">We have used Tony and his crew for many years and have always received excellent service</Review>
                    <Review name="Jen">They explain what they are doing, are friendly and always show up when stated.</Review>
                    <Review name="Shaunnah Stang">They are way more reliable an affordable than most companies out there - absolutely 5 stars</Review>
                    <Review name="Elizabeth Quan">Always responsive, always helpful.</Review>
                    <Review name="Linda P.">Did more than expected and paid less than expected. Will be the company I go to for my irrigation needs in the future.</Review>
                    <Review name="C. N."> I would definitely recommend them and use them again.</Review>
                    <Review name="Jim N.">Very knowledgeable. Very honest and fair in the prices he charges. I highly recommend them</Review>
                    <Review name="Ron W.">Excellent, efficient, informative</Review>
                </SlidingCarousel>
            </div>
            <div className="flex justify-around max-w-200 mx-auto flex-wrap">
                <AngiesRating />
                <GoogleRating />
                <YelpRating />
            </div>
        </section>

        <section className="bg-neutral-50 py-24 font-sans">
            <div className="max-w-200 mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-2">Featured Projects</h2>
                <p className="text-center text-neutral-700 mb-12">Take a look at some of our recent transformations</p>
                <div className="max-h-96 aspect-[2048/1536] mx-auto mb-12 rounded-xl overflow-hidden shadow-lg">
                    <FadingCarousel
                        imgs={[
                            // "/imgs/Landscape-1.jpg",
                            // "/imgs/Landscape-2.jpg",
                            "/imgs/Landscape-3.JPEG",
                            "/imgs/Landscape-4.JPEG",
                            "/imgs/Landscape-5.JPEG",
                            "/imgs/Pathway.JPEG",
                            "/imgs/Path+Step.JPEG",
                            "/imgs/Patio-1.webp",
                            "/imgs/Patio-2.JPEG",
                            "/imgs/Patio-3.jpg"
                            
                        ]}
                        center
                        
                        displayTime={4000}
                        // className="rounded-lg"
                    />
                </div>
                <div className="text-center">
                    <Link href="/gallery" className="inline-block bg-white outline-2 outline-primary text-primary px-4 py-3 rounded-lg  text-xl font-semibold">
                        View Our Full Gallery <ArrowRightIcon className="h-6 inline stroke-2"/>
                    </Link>
                </div>
            </div>
        </section>

        <section className="py-24 font-sans">
            <div className="max-w-200 mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow">
                        <div className="text-6xl font-bold text-neutral-700 mb-4">20+</div>
                        <div className="text-xl text-neutral-700">Years of Experience</div>
                    </div>
                    <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow">
                        <div className="text-6xl font-bold text-neutral-700 mb-4">1000+</div>
                        <div className="text-xl text-neutral-700">Projects Completed</div>
                    </div>
                    <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow">
                        <div className="text-6xl font-bold text-neutral-700 mb-4">100%</div>
                        <div className="text-xl text-neutral-700">Satisfaction Guaranteed</div>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-primary text-white py-24 font-sans rounded-t-2xl">
            <div className="max-w-200 mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Outdoor Space?</h2>
                <p className="mb-12 text-xl">Get in touch today for free</p>
                <Link href="/quote" className="inline-block bg-white text-black px-10 py-5 rounded-lg text-xl font-semibold hover:bg-neutral-100 transition-all hover:scale-105">
                    Get Started <ArrowRightIcon className="h-6 inline stroke-2 mb-1"/>
                </Link>
            </div>
        </section>
    </>);
}
