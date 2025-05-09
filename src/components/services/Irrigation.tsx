import Check from "../Check";
import ServiceCard from "./ServiceCard";

export default function IrrigationSection() {
    return <section className="mt-16">
                    <div className="mx-10">
                        <div className="flex items-center mb-3">
                            <h2 id="sprinkler" className="text-3xl font-bold">Irrigation</h2>
                        </div>
                        <p className="mb-6">
                            Smart watering solutions that keep your landscape healthy while conserving water.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ServiceCard
                                id="sprinkler-install"
                                imageSrc="/imgs/Sprinkler-Box.jpg"
                                imageAlt="Sprinkler installation"
                                title="Sprinkler Installation"
                                description={
                                    <div>
                                        <p className="mb-2">Expand your existing system, or install a brand new one. <br /><br />All our installs come with:</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Water-efficient components</li>
                                            <li>Smart controllers & rain sensors</li>
                                            <li>Zone-specific coverage planning</li>
                                        </ul>
                                    </div>
                                }
                                quoteLink="/quote?jobKind=sprinkler-install"
                            />
                            <ServiceCard
                                id="sprinkler-startup"
                                imageSrc="/imgs/Sprinkler-2.jpg"
                                imageAlt="Spring sprinkler startup"
                                title={
                                    <div className="flex items-center">
                                        <span>Spring Startup</span>
                                    </div>
                                }
                                description="We'll wake up your system after winter with thorough testing, head adjustment, programming updates, and any repairs that need to be made for the ."
                                quoteLink="/quote?jobKind=sprinkler-startup"
                            />
                            <ServiceCard
                                id="sprinkler-repair"
                                imageSrc="/imgs/Broken-Sprinkler.jpg"
                                imageAlt="Sprinkler repair"
                                title="Repair Services"
                                description={
                                    <div>
                                        <p className="mb-2">We diagnose and offer quick repairs for all common sprinkler issues:</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li><span className="font-medium">Broken heads</span></li>
                                            <li><span className="font-medium">Leaking pipes</span></li>
                                            <li><span className="font-medium">Valve issues</span></li>
                                            <li><span className="font-medium">Controller problems</span></li>
                                        </ul>
                                    </div>
                                }
                                quoteLink="/quote?jobKind=sprinkler-repair"
                            />
                            <ServiceCard
                                id="sprinkler-winterization"
                                imageSrc="/imgs/Sprinkler-1.jpg"
                                imageAlt="Sprinkler winterization"
                                title={
                                    <div className="flex items-center">
                                        <span>Winterizations</span>
                                    </div>
                                }
                                description={<>
                                    <div className="font-semibold">Don't risk costly freeze damage!</div>
                                    We'll blow out your entire system using commercial-grade compressors to prepare your system for winter                              
                                </>}
                                quoteLink="/quote?jobKind=sprinkler-winterization"
                            />
                        </div>
                    </div>
                </section>
}