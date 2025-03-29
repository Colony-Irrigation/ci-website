import Link from "next/link";

export default function Email({address, ...props}: Omit<React.ComponentProps<typeof Link>, "href"> & {address: string}) {
    return <Link className="underline" {...props} href={`mailto:${address}`}></Link> 
}