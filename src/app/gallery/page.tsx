import { ProjectMetadata } from "@/components/gallery/Project";
import ProjectThumbnail from "@/components/gallery/ProjectThumbnail";
import { TextInput } from "@/components/quote/Form";
import * as fs from "fs/promises";
import { MagnifyingGlassIcon, ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid"
import GallerySearchBar from "@/components/gallery/Searchbar";
import { GallerySearchContextProvider } from "@/components/gallery/SearchContext";
import ProjectGrid from "@/components/gallery/ProjectGrid";

async function loadAllProjects(): Promise<ProjectMetadata[]> {
    const projDir = process.cwd() + "/public/Projects";

    const folders = await fs.readdir(projDir);
    const projects: ProjectMetadata[] = []

    for(const folder of folders) {
        const folderDir = projDir + "/" + folder;
        const files = await fs.readdir(folderDir);

        const metaDataFile = await fs.readFile(
            folderDir + "/" + "projMetadata.json", "utf-8"
        );

        const metaData: ProjectMetadata = JSON.parse(metaDataFile);
        

        metaData.id = folder;
        metaData.images = files.filter(f => f !== "projMetadata.json");

        projects.push(metaData);
    }

    projects.sort((a, b) => Number(a.id) - Number(b.id))
    return projects;
}


export default async function GalleryPage() {
    const projects = await loadAllProjects();

    return <div>
        <GallerySearchContextProvider projects={projects} />

    {/* </GallerySearchContextProvider> */}
</div>
}