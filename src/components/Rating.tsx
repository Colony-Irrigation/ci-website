import Image, { StaticImageData } from "next/image"
import Link from "next/link"
// import imageAsset from "/public/logos/Angi.avif"

function Stars({filled}: {filled: number}) {
    return <span className="tracking-tighter inline-block relative">
        <span className="grayscale inline-block">⭐⭐⭐⭐⭐</span>
        <span className="absolute top-0 left-0 overflow-hidden" style={{width: `${filled/5 * 100}%`}}>⭐⭐⭐⭐⭐</span>
    </span>
}

function Rating(props: {
    name: string,
    stars: number,
    numReviews: number,
    logoImage: string,
    imageW: number,
    imageH: number
    href: string
}) {
    return <Link href={props.href} className="rounded-lg  bg-neutral-50 shadow-sm shadow-neutral-600 aspect-square w-max p-2 flex flex-col">
        <div className="items-center flex justify-center mt-1">
            <div className="h-6 lg:h-12 flex items-center">
                <Image src={props.logoImage} width={props.imageW} height={props.imageH} alt={props.name + " logo"}
                    className="h-full w-auto "
                />
            </div>
            {/* <span className="font-sans font-xl">{props.name}</span> */}
        </div>
        <div className="text-center grow flex flex-col pt-1">
            <div className="font-sans text-2xl lg:text-3xl">
                <span className="font-bold text-3xl lg:text-5xl">{props.stars}</span> / 5
            </div>
            <div className="grow flex justify-center items-center lg:text-2xl">
                <Stars filled={props.stars} />
                {/* {[0, 1, 2, 3, 4].map(n => (<Star filled={5-n} key={n} />))} */}
            </div>
            <div className="font-sans text-xs text-neutral-600 lg:text-md">
                {props.numReviews} Reviews
            </div>

        </div>
    </Link>
}

export function AngiesRating() {
    return <Rating
        name="Angi"
        stars={5}
        imageW={220}
        imageH={134}
        numReviews={120}
        logoImage={"/logos/Angi-Logo.png"}
        href="/"
    />
}

export function GoogleRating() {
    return <Rating
    name="Google Reviews"
    stars={4.2}
    imageH={146}
    imageW={346}
    logoImage="/logos/Google-Logo.jpg"
    href="https://www.google.com/search?sca_esv=4ad496d1768baf99&rlz=1C1CHBF_enUS1119US1119&biw=1920&bih=911&sxsrf=AHTn8zqz6F2eUyUPFwF6W7_kdMkpaL_-0Q:1742789023738&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzfXssLKe85tQQ5ggJX4N_6vHAq9zbUBAMMzTfx82FYCx8ZeVS1q1Zv0kGay4WDc8zTJRA4sdXZu8WxoDHb8zak-RgzsaiEqtAD2B69Vedre788q6iQ%3D%3D&q=Colony+Irrigation,+Inc.+Reviews&sa=X&ved=2ahUKEwjssraF66GMAxWYk4kEHVX1GPwQ0bkNegQILxAD&cshid=1742789037409224"
    numReviews={8}
    />
}

export function YelpRating() {
    return <Rating
    name="Yelp"
    stars={4.7}
    imageH={188}
    imageW={465}
    logoImage="/logos/Yelp-Logo.png"
    href="https://www.yelp.com/biz/colony-irrigation-canton"
    numReviews={8}
    />
}