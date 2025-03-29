export default function Review(props: {
    children: string,
    stars?: number,
    name: string,
}) { 
    return <div className="w-full p-4 min-h-32 rounded-lg shadow-md bg-neutral-50 flex flex-col">
        <div className="h-fit text font-sans grow flex text-center items-center text-lg italic w-full">"{props.children.trim()}"</div>
        <div className="text-neutral-400 mt-auto pl-10">
            — {props.name}
        </div>
    </div>
}