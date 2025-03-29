import Link from "next/link";
import { PropsWithChildren } from "react";

export default function PhoneCall({number, ...props}: Omit<React.ComponentProps<typeof Link>, "href"> & {number: number}) {
    return <Link className="underline"  {...props} href={`tel:${number}`}></Link> 
}