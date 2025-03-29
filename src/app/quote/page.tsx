import Email from "@/components/Email";
import PhoneCall from "@/components/Phonecall";
import QuoteForm from "@/components/quote/Form";
import QuoteHero from "@/components/quote/Hero";
import { Suspense } from "react";

export default function QuotePage() {
    return <div className="pt-20">
        <section className="">
            <Suspense fallback={null}>
                <QuoteHero />
            </Suspense>
        </section>
        <section>
            <Suspense fallback={null}>
                <QuoteForm />
            </Suspense>
        </section>
        <section>
            <div className="shadow-md bg-amber-950/12 m-4 p-4 rounded-lg shadow-neutral-500 font-sans max-w-220 mx-auto">
                <div className="text-center font-bold">
                    <div className="text-3xl lg:text-5xl">Still Have a Question?</div>
                    <div className="text-gray-600 font-normal text-sm lg:text-lg mt-2">Reach out any time - We’ll respond by the next business day!</div>
                </div>
                <div className="mt-4 text-center font-bold lg: text-lg">
                    <div>Phone: <PhoneCall number={7343985837}><span className="text-primary">(734) 398-5837</span></PhoneCall></div>
                    <div>Email: <Email address="anthony@colonyirrigation.com"><span className="text-primary">anthony@colonyirrigation.com</span></Email></div>
                </div>
            </div>

        </section>
    </div>;
}