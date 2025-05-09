import useEmblaCarousel from "embla-carousel-react";
import { ProjectMetadata } from "./Project";
import { ComponentProps, PropsWithChildren, useEffect, useMemo, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { createPortal } from "react-dom";
// import Zoom from "@/components/Zoom";


function ZoomContainer({children}: PropsWithChildren) {
    const [open, setOpen] = useState(false);

    // return 
    //     <div className={open?"fixed top-0 left-0 w-screen h-screen bg-black/80" : ""} onClick={() => setOpen(!open)}>
    //         {children}
    //     </div>
    // </div>


    // if(!open) 
    //     return <div className="h-[40vh] lg:h-[60vh] flex items-center justify-center" onClick={() => setOpen(true)}>
    //     {children}
    //     </div>
    // else 
    //     return createPortal( <div  className="top-0 left-0 w-screen h-screen fixed bg-black/80 flex items-center justify-center z-100 p-2 " >
    //         {children}
            
    //     </div>, document.body)
}

export default function ProjectSlideshow({ project }: { project: ProjectMetadata }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({}, []);
    const [selectedIndex, setSelectedIndex] = useState(0)

    useEffect(() => {
        if (!emblaApi) return;

        emblaApi.on("select", () => setSelectedIndex(emblaApi.selectedScrollSnap()))
    }, [emblaApi]);



    return <div>
        <div ref={emblaRef} className="overflow-hidden p-4 w-full">
            <div className="flex h-full first:ml-0 last:mr-0">
                {project.imageOrder.map((imageNum, i) => {
                    const imageSize = project.imageSizes[imageNum]
                    return (<Slide key={i} className="">

                                    <div className="h-[40vh] lg:h-[60vh] flex items-center justify-center overflow-visible">
                            
                                <Image
                                    alt={`Image ${i}`}
                                    width={imageSize.width}
                                    height={imageSize.height}
                                    priority={i === 0}
                                    loading="eager"
                                    src={`/Projects/${project.id}/${project.images[imageNum]}`}
                                    className="max-h-full max-w-full w-auto h-auto rounded-md shadow-md shadow-neutral-600 object-contain"
                                     />
                            </div>


                    </Slide>)
                })}
            </div>
        </div>
        <div>
            <div className="flex justify-center items-center">
                {
                    project.images.map((_, i) => <>
                        <span className={`aspect-square  ${i == selectedIndex ? "w-2 bg-neutral-500" : "w-1.5 bg-neutral-300"} duration-100 rounded-full m-1`} />
                    </>)
                }
            </div>
            {/* {emblaApi.} */}
        </div>
    </div>
}

function Slide(props: ComponentProps<"div">) {
    return <div {...props} className={(props.className || "") + " basis-full shrink-0 grow-0 mx-4 first-of-type:ml-0 last-of-type:mr-0"} />
}