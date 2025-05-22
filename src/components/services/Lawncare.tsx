import ServiceSection from "./Section";
import ServiceCard from "./ServiceCard";

export default function LawncareSection() {
    return <ServiceSection title="Lawncare" id="lawncare">
        <p className="mb-6">
            Keep your yard looking sharp year-round with our professional lawncare services!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
                id="lawncare-weekly"
                imageSrc="/imgs/Lawncare.jpg"
                imageAlt="Lawncare Thumbnail"
                description={
                    <div>
                        <p className="mb-3 ">Your lawn deserves the best professional care available:</p>
                        <ul className="list-disc pl-5 space-y-2 font-semibold">
                            <li>48" blade mowers provide a perfectly level trim </li>
                            <li>Clean edging along sidewalks & driveways</li>
                            <li>Detailed trimming around obstacles</li>
                            <li>Thorough cleanup of clippings and debris</li>
                        </ul>
                    </div>
                }
                quoteLink="/quote?jobKind=lawncare-weekly"
                title="Weekly Service"
            />
            <ServiceCard
                id="lawncare-seasonal"
                imageSrc="/imgs/Leaf-Blower.jpg"
                imageAlt="Leaf blower being used"
                description={
                    <div>
                        <p className="mb-4 text-lg">
                            We will professionally prepare your lawn for the changing seasons:
                        </p>
                        <div className="flex justify-around gap-x-4 gap-y-8 flex-wrap">
                            <div className="">
                                <h4 className="font-semibold mb-2 text-center text-lg">Spring</h4>
                                <ul className="list-disc pl-6 text-base space-y-2">
                                    <li>Debris removal</li>
                                    <li>Dethatching</li>
                                    <li>Pre-season treatments</li>
                                </ul>
                            </div>
                            <div className="">
                                <h4 className="font-semibold mb-2 text-center text-lg">Fall</h4>
                                <ul className="list-disc pl-6 text-base space-y-2">
                                    <li>Leaf cleanup & disposal</li>
                                    <li>Final mowing</li>
                                    <li>Winter prep</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                }
                quoteLink="/quote?jobKind=lawncare-seasonal"
                title="Seasonal Cleanup"
            />
        </div>
    </ServiceSection>
}