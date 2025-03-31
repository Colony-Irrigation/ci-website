"use client";

import { ReactNode, useCallback, useState } from "react";
import { Required } from "./Form";
import { landscapingQuoteKind, masonryQuoteKind, quoteCategory, quoteKind, sprinklerQuoteKind, validateQuoteCategory } from "./kinds";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import JobSelectPopout from "./JobSelectPopout";
import { Drawer } from "vaul";

const landscapingTitles: Record<landscapingQuoteKind, ReactNode> = {
    install: "Landscaping Install",
    mulch: "Mulch Resurfacing",
    trimming: "Bush & Hedge Trimming",
    weeding: "Weeding"
}

const sprinklerTitles: Record<sprinklerQuoteKind, ReactNode> = {
    install: "Sprinkler Install/Expansion",
    repair: "Rotor/Pipe repair",
    startup: "Spring Startup",
    winterization: "Winterization"
}

const lawncareTitles = {
    lawncare: "Weekly Lawncare Service"
}

const masonryTitles: Record<masonryQuoteKind, ReactNode> = {
    cleaning: "Stone Cleaning & Restoration",
    path: "Pathway Install",
    patio: "Patio Install",
    repair: "Stone Repair & Re-leveling"
}


const categoriesToTitles: Record<quoteCategory, Record<string, ReactNode>> = {
    landscaping: landscapingTitles,
    sprinkler: sprinklerTitles,
    lawncare: lawncareTitles,
    masonry: masonryTitles,
    other: {
        other: "Something else (describe below)",
    }
}

export const jobsToTitles: Record<quoteKind, ReactNode> = Object.fromEntries(Object.entries(categoriesToTitles).flatMap(([category, jobs]) => {
    return Object.entries(jobs).map(([name, job]) => [`${category}-${name}`, job])
})) as any;

//@ts-expect-error
jobsToTitles.other = jobsToTitles["other-other"];
//@ts-expect-error
delete jobsToTitles["other-other"]
//@ts-expect-error
jobsToTitles.lawncare = jobsToTitles["lawncare-lawncare"]
//@ts-expect-error
delete jobsToTitles["lawncare-lawncare"]


export default function JobSelect() {    
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<quoteKind>("" as any);
    const [category, setCategory] = useState<string>(validateQuoteCategory(searchParams.get("category")))

    const createQueryString = useCallback(
        (name: string, value: string) => {
          const params = new URLSearchParams(searchParams.toString())
          params.set(name, value)
     
          return params.toString()
        },
        [searchParams]
      )

    const [dialogOpen, setDialogOpen] = useState(false);

    return <div className="my-4">
        <label htmlFor="kind-selection" className="ml-4 mt-4 font-bold">Kind of Job<Required /></label>
        <input type="hidden" value={selected} name="jobKind" id="jobKind"></input>
        <div>
            <div className={`h-10 rounded-t-lg ${!open && "rounded-b-lg"} duration-100 bg-black/10 hover:cursor-pointer z-2 flex items-center px-4 border-b-0 border-neutral-600 ${open && "border-2"}`} onClick={() => setOpen(!open)}>
                <div className="grow">
                {jobsToTitles[selected]  || <span className="text-black/50">Please Choose an Option </span>}

                </div>
                <div className="border-l-1 border-neutral-400 pl-2 text-xl font-bold">
                    <span className={`${open && "rotate-180"} duration-150 inline-block`}>
                        ⇩
                    </span>
                </div>
            </div>
            <div className="relative h-0">
                <div className={`h-0 ${open && "h-fit"} rounded-b-lg border-neutral-600 ${open && "border-2"} border-t-0 overflow-hidden shadow-md shadow-neutral-600 bg-white-muted z-1 duration-100 transition-all divide-y-1 divide-neutral-400 `}>
                    {Object.entries(jobsToTitles).map(([jobKind, title], i) => {
                        return jobKind.startsWith(category) && 
                            <div key={i} className="p-2  hover:bg-black/20" onClick={() => {
                                setOpen(false);
                                setSelected(jobKind as quoteKind)
                            }}>{title}</div>
                    })}
                    <Drawer.Root>
                        <Drawer.Trigger className="p-1 font-bold text-center underline underline-offset-2 cursor-pointer w-full inline-block" onClick={() => setDialogOpen(true)}>
                            See More Options →
                        </Drawer.Trigger>
                        <JobSelectPopout currentSelection={selected} setSelected={(s) => {
                            setSelected(s)
                            setOpen(false)
                        }} setCategory={(c) => {
                            router.push(pathname + "?" + createQueryString("category", c));
                            setCategory(c)
                        }} />
                    </Drawer.Root>
                    
                </div>
            </div>
        </div>
        {/* <JobSelectPopout open={dialogOpen} setCategory={setCategory} setOpen={setDialogOpen} setSelected={setSelected} /> */}
    </div>
}