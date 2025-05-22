export default function ServiceSection({children, id, title}: {
    children: React.ReactNode,
    id: string,
    title: string
}) {
    return <section className="mt-12 relative" >
        <div className="absolute -top-40 w-full h-1" id={id} />
        <div className="mx-10">
            <div className="flex items-center mb-3">
                <h2 id={id} className="text-3xl font-bold">{title}</h2>
            </div>
            {children}
        </div>
    </section>
}