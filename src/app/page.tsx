import Email from "@/components/Email";
import Quote from "@/components/Quote";
import { AngiesRating, GoogleRating, YelpRating } from "@/components/Rating";
import Review from "@/components/Review";
import Service from "@/components/Service";
import SlidingCarousel from "@/components/SlidingCarousel";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (<>
        <section className="bg-cover bg-center  h-130 font-sans shadow-lg bg-[url(/imgs/Landscape-1.jpg)] bg-cover [background-position: 50% 0%] bg-scroll md:bg-fixed ">
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
        <section className="-mt-3 bg-white rounded-t-xl z-10 relative ">
            <div className="bg-amber-950/12 p-3 py-12 rounded-t-xl ">
                <div className="text-center text-lg font-sans max-w-200 mx-auto">
                    <div className="font-bold font-sans mb-6 text-4xl text-center">
                            <span>Your Trusted Lawn & Landscape Experts</span>
                            {/* <br />
                            <span className="text-5xl font-bold">To Life</span> */}
                            {/* <hr className="mt-2 shadow shadow-neutral-500 border-amber-950"/> */}

                        </div>
                        Since 2001, we have provided <span className="font-semibold">professional</span> and <span className="font-semibold">affordable</span> lawncare, landscaping, irrigation, and hardscape design services for customers throughout all of Southeast Michigan
                    </div>
            </div>
        </section>

        <section className="p-3 bg-white-muted">
            <div className="bg-gradient-to-t from-gray-100 to white rounded-lg  p-6 shadow-neutral-500">
                <div className="font-bold font-sans mb-6 text-3xl text-center">
                    <span>Services</span>
                    <hr className="mt-2 shadow shadow-neutral-500 border-amber-950"/>

                </div>
                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <Service 
                        name="Lawn Care"
                        description="Weekly service that includes commercial grass trining, weed whipping, and walkway edging"
                        href="/quote?category=lawncare"
                        imgSrc="/imgs/Lawncare.avif"
                        imgWidth={294}
                        imgHeight={360}
                    />
                                        <Service 
                        name="Landscaping"
                        description="Professional design help, installation, removal, as well as annual trimmings and upkeep"
                        href="/quote?category=landscaping"
                        imgSrc="/imgs/Landscape 2.jpg"
                        imgWidth={294}
                        imgHeight={360}
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
                        imgSrc="/imgs/Sprinklers.webp"
                        imgWidth={294}
                        imgHeight={360}
                    />
                </div>
            </div>
        </section>
        <section className="font-sans pt-12">
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
                {/* <Carousel responsive={{mobile: {
                    breakpoint: {min: 0, max: Infinity},
                    items: 1
                }}} ssr>
                    <div>test</div>
                    {/* <Quote author="John Doe">These guys are the fucking goats</Quote>
                    <Quote author="John Doe">These guys are the fucking goats</Quote>
                    <Quote author="John Doe">These guys are the fucking goats</Quote>
                    <Quote author="John Doe">These guys are the fucking goats</Quote> 
                </Carousel> */}
            </div>
            <div className="flex justify-around max-w-200 mx-auto flex-wrap"> 
                <AngiesRating />
                <GoogleRating />
                <YelpRating />             
            </div>
        </section>
    </>);
}
