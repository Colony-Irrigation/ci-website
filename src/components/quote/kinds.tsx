"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { createContext, PropsWithChildren, useState } from "react";

export type quoteCategory = "sprinkler" | "landscaping" | "masonry" | "lawncare" | "other";

export type sprinklerQuoteKind = "startup" | "repair" | "install" | "winterization";
export type landscapingQuoteKind = "install" | "trimming" | "weeding" | "mulch";
export type masonryQuoteKind = "path" | "patio" | "repair" | "cleaning";
export type lawncareQuoteKind = `weekly` | "seasonal"
export type quoteKind = `sprinkler-${sprinklerQuoteKind}` | `landscaping-${landscapingQuoteKind}` | `masonry-${masonryQuoteKind}` | `lawncare-${lawncareQuoteKind}` | "other"

export function getQuoteCategory(quoteKind: quoteKind): quoteCategory {
    return quoteKind.split("-")[0] as quoteCategory;
}

export function validateQuoteCategory(category: any): quoteCategory {
    return ["landscaping", "lawncare", "masonry", "other", "sprinkler"].includes(category) ? category as quoteCategory : "other";
}

export const QuoteCategoryContext = createContext<[quoteCategory: quoteCategory, setQuoteCategory: (quoteCategory: quoteCategory) => void, quoteKind?: quoteKind]>(null as any);

function InternalQuoteCategoryProvider({children}: PropsWithChildren) {
    const searchParams = useSearchParams();
    const paramsJobKind = searchParams.get("jobKind")  as quoteKind;
    let quoteCategory;
    if(paramsJobKind) {
        quoteCategory = getQuoteCategory(paramsJobKind)
    } else {
        quoteCategory =searchParams.get("category") as quoteCategory || "other"
    }

    const res = useState<quoteCategory>(quoteCategory);

    return <QuoteCategoryContext value={[...res, paramsJobKind]}>{children}</QuoteCategoryContext> 
}
export function QuoteCategoryProvider({children}: PropsWithChildren) {
    return <Suspense fallback={null}>
        <InternalQuoteCategoryProvider>
            {children}
        </InternalQuoteCategoryProvider>
    </Suspense>
}