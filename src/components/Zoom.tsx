import { cloneElement, DetailedHTMLProps, FunctionComponent, JSX, ReactElement, ReactNode, useCallback, useState } from "react";

interface ZoomableChildrenProps {
    onClick: () => any;
}

export default function Zoom({children}: {children: ReactElement<ZoomableChildrenProps>}) {

    return children;
    const [isOpen, setOpen] = useState(false);
    // const open = useCallback(() => se)
    const fullScreenEl = cloneElement(children);
    const inlineEl = cloneElement(children, {onClick: () => setOpen(true)});
    // const end = <div></div>
    // children.
    if(isOpen) {
        return inlineEl;
    } else return <div className="fixed top-0 left-0 z-50 bg-black" onClick={() => {setOpen(false)}}>
        {fullScreenEl}
    </div>
}