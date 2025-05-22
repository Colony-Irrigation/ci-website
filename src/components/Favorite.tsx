export default function NextdoorFavorite({className}: {className?: string}) {
    return <svg className={`align-middle${className ? ` ${className}` : ""}`} data-state="main" data-version="v1" width="25" height="25" fill="none" viewBox="0 0 24 24" data-icon="heart-ribbon-fill" aria-hidden="true" color="#158a00">
        <path xmlns="http://www.w3.org/2000/svg" fill="currentColor" fill-rule="evenodd" d="M3 2h18v21l-9-3.427L3 23V2Zm9 13.892 4.138-4.138A2.929 2.929 0 1 0 12 7.608a2.929 2.929 0 0 0-4.142 4.142L12 15.892Z" clip-rule="evenodd" />
    </svg>
}