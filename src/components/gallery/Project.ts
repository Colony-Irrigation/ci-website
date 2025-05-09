export interface ProjectMetadata {
    id: string,
    title: string,
    location: string,
    tags: string[],
    images: string[],
    imageOrder: number[],
    colSpan?: number,
    rowSpan?: number,
    imageSizes: {width: number, height: number}[]
}