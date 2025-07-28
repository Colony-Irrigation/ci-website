"use client";
import Form from "next/form";
import { ComponentProps, useActionState } from "react";
import PlaceAutocomplete from "./PlaceAutocomplete";
import { APIProvider } from "@vis.gl/react-google-maps";
import submit from "./action";
import ContactInput from "./Contact";
import QuoteKindSelection from "./Selection";
import JobSelect from "./JobSelect";

export function TextInput(props: ComponentProps<"input">) {
    return <input type="text" {...props} className={"peer h-10 bg-black/10 rounded-lg focus:bg-black/20 focus:outline-1 outline-neutral-600 w-full p-2 " + props.className}  />
}

export function Required() {
    return <span className="text-red-600">*</span>
}

export default function QuoteForm() {
    const [formState, formAction] = useActionState(submit, {});
    return <div className="mx-auto max-w-220">
        <div className="shadow-neutral-600 m-4 rounded-lg">
            <Form action={formAction} className="flex flex-col bg-white-muted mx-auto p-4 rounded-lg max-w-180 font-sans">
                <label htmlFor="customerName" className="ml-4 font-bold">Name<Required /></label>
                <TextInput name="customerName" id="customerName" required placeholder="John Doe"/>
                <ContactInput />
                <label htmlFor="location" className="mt-2 ml-4 font-bold">Home Address<Required /></label>
                <PlaceAutocomplete />
                <JobSelect />
                {/* <QuoteKindSelection /> */}
                <label htmlFor="message" className="mt-3 ml-4 font-bold">Additional Message <span className="font-normal text-neutral-400 text-sm">(optional)</span></label>
                <textarea id="message" name="message" className="bg-black/5 focus:bg-black/15 mb-4 p-2 rounded-lg outline-neutral-600 focus:outline-1 w-full min-h-32"></textarea>
                {formState.errorMessage && <div className="text-red-600 text-center">{formState.errorMessage}</div>}
                {formState.successMessage && <div className="text-green-600 text-center">{formState.successMessage}</div>}
                <button type="submit" className="bg-primary peer-invalid:bg-primary/60 hover:brightness-90 m-4 rounded-lg h-12 font-sans text-white text-xl cursor-pointer">Get Quote!</button>
            </Form>
        </div>
        
    </div>
}