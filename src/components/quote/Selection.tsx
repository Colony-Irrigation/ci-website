"use client";
import { useSearchParams } from "next/navigation";
import { validateQuoteCategory } from "./kinds";
import { Required } from "./Form";


function Option({value, children}: {value: string, children: string}) {
    return <option value={value} className="w-full h-10">{children}</option>
}
export default function QuoteKindSelection() {
    const params = useSearchParams();
    const category = validateQuoteCategory(params.get("category") || "");
    const selectedJob = params.get("jobKind");

    return <>
        <label htmlFor="kind-selection" className="ml-4 mt-2 font-bold">Kind of Job<Required /></label>
        <select className="h-10 bg-blue-400/20 outline-2 outline-blue-300 rounded-lg">
            <Option value="1">Option 1</Option>
            <Option value="2">Option 2</Option>
            <Option value="3">Option 3</Option>
        {/* <opt value={"general"} >General Outdoor Work</opt
            ion> */}
        </select>
    </>

}