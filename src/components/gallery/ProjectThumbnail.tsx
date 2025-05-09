"use client";
import Image from "next/image";
import { ProjectMetadata } from "./Project";
import { useState } from "react";
import { Drawer } from "vaul";
import ProjectModal from "./ProjectModal";

export default function ProjectThumbnail({project, alignColumn}: {project: ProjectMetadata, alignColumn?: number}) {
    const {
        id,
        images,
        location,
        tags,
        title
    } = project;

    // if(alignColumn !)

    let colSpan;
    if(alignColumn !== undefined) {
        colSpan = `${alignColumn + 1} / span ${project.colSpan}`
    } else {
        colSpan = `span ${project.colSpan ?? 1} / span ${project.colSpan ?? 1}`
    }
    const rowSpan = project.rowSpan ?? 1;//(index + 5) % 15 == 0 ? "row-span-2": "row-span-1"
    const [opened, setOpened] = useState(false);
    const largeColSpan = project.colSpan == 2 ? "lg:!col-span-2" : "lg:!col-span-1"
    return  <Drawer.Root key={project.id}>
        <Drawer.Trigger style={{
            gridColumn: colSpan,
            gridRow: `span ${rowSpan} / span ${rowSpan}`,
        }} className={`${largeColSpan} relative flex justify-center items-center rounded-md overflow-hidden duration-200`}>
            {/* <div className={`relative ${colSpan} ${rowSpan} flex justify-center items-center rounded-md overflow-hidden duration-200`} > */}
                <div className="hover:scale-120 relative w-full h-full duration-100 cursor-pointer" onClick={() => setOpened(!opened)}>
                    <Image src={`/Projects/${id}/${images[project.imageOrder[0]]}`} fill sizes="50vw" alt={title} loading="eager" className="object-cover rounded-md "/>
                </div>
            {/* </div> */}
        </Drawer.Trigger>        
        <ProjectModal project= {project}/>
    </Drawer.Root>
    
}