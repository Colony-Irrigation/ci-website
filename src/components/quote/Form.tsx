import Form from "next/form";
import { ComponentProps } from "react";
import PlaceAutocomplete from "./PlaceAutocomplete";
import { APIProvider } from "@vis.gl/react-google-maps";
import submit from "./action";
import ContactInput from "./Contact";
import QuoteKindSelection from "./Selection";

export function TextInput(props: ComponentProps<"input">) {
    return <input type="text" className="h-10 bg-black/10 rounded-lg focus:bg-black/20 focus:outline-1 outline-neutral-600 w-full p-2 " {...props} />
}

export function Required() {
    return <span className="text-red-600">*</span>
}

export default function QuoteForm() {

    return <div className="max-w-220 mx-auto">
        <div className="  shadow-neutral-600 rounded-lg m-4">
            <Form action={submit} className="p-4 bg-white-muted flex flex-col font-sans max-w-180 mx-auto rounded-lg">
                <label htmlFor="customerName" className="font-bold ml-4">Name<Required /></label>
                <TextInput name="customerName" id="customerName" required placeholder="John Doe"/>
                <ContactInput />
                <label htmlFor="location" className="font-bold ml-4 mt-2">Home Address<Required /></label>
                <PlaceAutocomplete />
                <QuoteKindSelection />
                <label htmlFor="message" className="font-bold ml-4 mt-3">Additional Message <span className="text-neutral-400 text-sm font-normal">(optional)</span></label>
                <textarea id="message" name="message" className="bg-black/5 min-h-32 w-full mb-4 rounded-lg p-2 focus:bg-black/15 focus:outline-1 outline-neutral-600"></textarea>
                <button type="submit" className="rounded-lg m-4 h-12 text-xl peer-invalid:bg-primary/30 bg-primary text-white font-sans">Get Quote!</button>
            </Form>
        </div>
        
    </div>
}