import { ArrowRightStartOnRectangleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { GallerySearchContext } from "./SearchContext";
import { use, useContext } from "react";

export default function GallerySearchBar() {
    const [search, setSearch] = useContext(GallerySearchContext);
    return <div className="w-full max-w-200 mx-auto px-4">
        <div className="bg-black/10 rounded-2xl flex h-10 mx-auto pl-2">
            <input value={search} onChange={(e) => setSearch(e.target.value) } type="text" className="grow h-full focus:outline-0 px-2" placeholder="Search projects, pictures, etc"/>
            <div className="flex h-full bg-gradient-to- pl-2 rounded-r-2xl">
                {/* <div className=" my-1 w-0.5 bg-neutral-600 rounded-full"/> */}
                <MagnifyingGlassIcon className="h-6  mr-2 my-auto text-neutral-800"/>
             </div>
        </div>
    </div>
}