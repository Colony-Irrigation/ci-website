import { Drawer } from "vaul";
import { ProjectMetadata } from "./Project";
import ProjectSlideshow from "./Slideshow";
import { MapPinIcon } from "@heroicons/react/24/solid"

export default function ProjectModal({project}: {project: ProjectMetadata}) {
    return <Drawer.Portal >
        <Drawer.Overlay className="fixed inset-0 bg-black/50 z-30" />

        <Drawer.Content  className="bg-white/90 backdrop-blur-2xl rounded-t-4xl mt-24 fixed bottom-0 left-0 right-0 outline-none p-5 z-50 !touch-auto" style={{height: "calc(100% - 100px)"}}>
            <Drawer.Title className="hidden">
                Services
            </Drawer.Title>
            <div className="mx-auto w-20 bg-neutral-600 h-1 rounded-full"/>
            <div className="mt-4 font-sans">
                <div>
                    <ProjectSlideshow project={project} />
                </div>
                <div className="mt-4">
                    <span className="text-lg font-semibold "> <MapPinIcon className="h-4 inline" /> {project.location}</span>
                    <div className="mt-2">
                        {
                        project.tags.map((tag) => 
                            <span className="rounded-full bg-neutral-200 outline-neutral-500 outline-2 p-1 px-2 mx-2 text-sm my-2 inline-block">{tag}</span>
                        )
                        }
                    </div>
                </div>
            </div>
        </Drawer.Content>
    </Drawer.Portal>
}