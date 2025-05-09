"use client"
import { createContext, PropsWithChildren, useState } from "react";
import { ProjectMetadata } from "./Project";
import GallerySearchBar from "./Searchbar";
import ProjectGrid from "./ProjectGrid";

export const GallerySearchContext = createContext<[searchTerm: string, setSearchTerm: (val: string) => void]>(null as any);

export function GallerySearchContextProvider({projects}: {projects: ProjectMetadata[]}) {
    const val = useState<string>("");

    return <GallerySearchContext value={val}>
                <div className="">
            <div className="text-center text-5xl font-sans font-bold my-12">Our Projects</div>
            <div className="font-sans flex text-xl mt-2 items-center">
                <GallerySearchBar />
            </div>
        </div>
        {/* <hr  className="my-4 border-dashed"/> */}
        <ProjectGrid projects={projects} />
    </GallerySearchContext> 
}