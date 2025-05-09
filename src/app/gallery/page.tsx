import type { ProjectMetadata } from "@/components/gallery/Project";
import projects from "./projects.json"
// import ProjectThumbnail from "@/components/gallery/ProjectThumbnail";
// import { TextInput } from "@/components/quote/Form";
// import * as fs from "fs/promises";
// import { MagnifyingGlassIcon, ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid"
// import GallerySearchBar from "@/components/gallery/Searchbar";
import { GallerySearchContextProvider } from "@/components/gallery/SearchContext";
// import ProjectGrid from "@/components/gallery/ProjectGrid";

async function loadAllProjects(): Promise<ProjectMetadata[]> {
    return projects;
    // const text = await fs.readFile("./projec")
}


export default async function GalleryPage() {
    const projects = await loadAllProjects();

    return <div>
        <GallerySearchContextProvider projects={projects} />

    {/* </GallerySearchContextProvider> */}
</div>
}