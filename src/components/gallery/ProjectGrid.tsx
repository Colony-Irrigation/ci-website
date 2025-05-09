"use client";
import { memo, use, useContext, useDeferredValue } from "react";
import { ProjectMetadata } from "./Project";
import ProjectThumbnail from "./ProjectThumbnail";
import { GallerySearchContext } from "./SearchContext";
import Link from "next/link";

export default function ProjectGrid({ projects }: { projects: ProjectMetadata[] }) {
    const [searchValue] = useContext(GallerySearchContext)
    const deferredSearchValue = useDeferredValue(searchValue);

    return <>
        <RawProjectGallery projects={projects} searchValue={deferredSearchValue} />
    </>
}

const RawProjectGallery = memo(function RawProjectGallery({ projects, searchValue }: { projects: ProjectMetadata[], searchValue: string }) {
    projects = projects.filter(p => projectMatches(p, searchValue));
    let thumbnails = [];
    let lastCol = 1;
    for(const proj of projects) {
        if(proj.colSpan && proj.colSpan > 1) {
            lastCol++;
            lastCol = lastCol %2;
            console.log(lastCol)
            thumbnails.push(<ProjectThumbnail project={proj} key={proj.id} alignColumn={lastCol} />)
        } else {
            thumbnails.push(<ProjectThumbnail project={proj} key={proj.id}  />)
        }

    }

    const searchIsEmpty = use(GallerySearchContext)[0].trim().length < 2;

    return <>
        <div className="font-sans font-lg text-center mt-4 ">Found <span className="font-semibold text-primary">{projects.length}</span> matching projects</div>
        <div className="font-sans grid grid-cols-3 lg:grid-cols-5 grid-flow-row-dense gap-1 p-1  auto-rows-[160px] lg:auto-rows-[15vw] mt-1">
            {thumbnails}
            {searchIsEmpty && <div className="hidden lg:flex col-span-2 row-span-1 p-8 bg-white-muted border-2 border-primary items-center justify-around cursor-pointer rounded-lg">
                    <div>
                    <h2 className="text-2xl font-bold mb-4">See something you like?</h2>
                    <p className="mb-6">Were here to make your house just as beautiful!</p>
                    
                    </div>
                    <div className="space-y-4">
                        <Link href="/quote" className="block bg-primary text-white py-2 px-6 rounded-md font-medium hover:bg-opacity-90 transition-colors">
                            Request a Quote
                        </Link>
                        <Link href="/contact" className="block border border-primary text-primary py-2 px-6 rounded-md font-medium hover:bg-gray-50 transition-colors">
                            Contact Us
                        </Link>
                    </div>
            </div>}
        </div>
    </>
})

function projectMatches(project: ProjectMetadata, searchValue: string) {
    // If search is empty, return all projects
    if (searchValue.trim().length < 3) {
        return true;
    }

    // Split search into individual terms for multi-word searches
    const searchTerms = searchValue.toLowerCase().trim().split(/\s+/);

    for (const term of searchTerms) {
        // Skip very short terms (less than 2 characters)
        if (term.length < 2) continue;

        // Check title for partial matches
        if (project.title.toLowerCase().includes(term)) {
            return true;
        }

        // Check if any tag contains this term
        if (project.tags.some(tag => tag.toLowerCase().includes(term))) {
            return true;
        }
    }

    // No matches found for any search term
    return false;
}