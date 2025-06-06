import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="font-sans max-w-6xl mx-auto px-4">
            <section className="mb-20 mt-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
                        <p className="text-lg text-neutral-700 mb-4">
                            Colony Irrigation is a family owned irrigation business founded by Tony Haley right here in <span className="underline">Canton, Michigan</span>.  
                        </p>
                        <p className="text-lg text-neutral-700">
                            Since 2001, we have been providing both commercial and residential landscaping, sprinkler, and lawncare services to the surrounding communities.
                        </p>
                    </div>
                    <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                        <Image 
                            src="/imgs/Landscape-2.jpg"
                            alt="Colony Irrigation team at work"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="mb-20">
                <h2 className="text-3xl font-bold mb-6">Areas We Serve</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                    {["Plymouth", "Canton", "Northville", "Westland", "Livonia", "Novi"].map(city => (
                        <div key={city} className="bg-primary/10 rounded-lg p-4 text-center shadow-sm">
                            <h3 className="text-xl font-semibold text-primary">{city}</h3>
                        </div>
                    ))}
                </div>
                <p className="text-center text-lg text-neutral-700 mt-2">
                    Outside these areas? <Link href="/quote#contact" className="text-primary underline">Contact us</Link> - we work throughout much of Southeast Michigan.
                </p>
            </section>
            <section className="mb-20 bg-neutral-50 p-8 rounded-lg shadow-sm">
                <h2 className="text-3xl font-bold mb-4 text-center">What Makes Us Different</h2>
                <p className="text-lg text-neutral-700 text-center max-w-3xl mx-auto">
                    As a local family business since 2001, we're your neighbors, not a big corporate chain. 
                    <br />
                    <br />
                    We take pride in our work and want to collaborate <span className="italic">with you</span> to bring your outdoor space to life.
                </p>
            </section>

            <section className="mb-20">
                <h2 className="text-3xl font-bold mb-6 text-center">Recent Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg">
                        <Image 
                            src="/imgs/Landscape-1.jpg"
                            alt="Landscaping project"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg">
                        <Image 
                            src="/imgs/Stone Staircase.webp"
                            alt="Stone work project"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg">
                        <Image 
                            src="/imgs/Patio-1.webp"
                            alt="Patio project"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="text-center">
                    <Link href="/gallery" className="text-primary underline text-lg">
                        See more in our gallery →
                    </Link>
                </div>
            </section>

           

            <section className="mb-20">
                <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-3">Family-Owned and Operated</h3>
                        <p className="text-neutral-700">
                            We treat every project like it's our own backyard. We bring care, attention to detail, and personal commitment to everything we do.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-3">Affordable</h3> 
                        <p className="text-neutral-700">
                            We offer fair and competitive pricing, and we will <span className="font-bold">never</span> surprise you with hidden fees or junk markups
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-3">Expertise</h3>
                        <p className="text-neutral-700">
                            We have been serving our customers for over 20 years, and we train all our employees in house to give you the <span className="font-bold">best service possible</span>
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-24 text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
                <div className="flex justify-center items-center flex-wrap gap-4">
                    <Link href="/quote" className="block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold">
                        Get a Free Quote
                    </Link>
                    <Link href="/gallery" className=" block border-2 border-primary text-primary px-5 py-2 rounded-lg hover:bg-primary/10 transition-colors text-lg font-semibold">
                        See Our Work
                    </Link>
                </div>
            </section>
        </div>
    );
}