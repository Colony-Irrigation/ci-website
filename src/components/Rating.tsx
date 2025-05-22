import { StarIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import NextdoorFavorite from "./Favorite";

function Stars({filled}: {filled: number}) {
    return (
        <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => {
                const fillPercentage = Math.max(0, Math.min(1, filled - (star - 1)));
                return (
                    <div key={star} className="relative h-6 w-6">
                        <StarIcon
                            className="absolute h-6 w-6 text-neutral-300"
                            aria-hidden="true"
                        />
                        <div className="absolute h-full overflow-hidden" style={{ width: `${fillPercentage * 100}%` }}>
                            <StarIcon
                                className="h-6 w-6 text-yellow-400"
                                aria-hidden="true"
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
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
    return <Link href={props.href} className="rounded-lg bg-neutral-50 shadow-xs shadow-neutral-600 h-42 w-40  p-2 flex flex-col m-4">
        <div className="items-center flex justify-center mt-1">
            <div className="h-12 lg:h-12 flex items-center">
                <Image src={props.logoImage} width={props.imageW} height={props.imageH} alt={props.name + " logo"}
                    className="h-full w-auto "
                />
            </div>
            {/* <span className="font-sans font-xl">{props.name}</span> */}
        </div>
        <div className="text-center grow flex flex-col pt-1">
            <div className="font-sans text-3xl lg:text-3xl">
                <span className="font-bold text-3xl lg:text-5xl">{props.stars}</span> / 5
            </div>
            <div className=" mt-auto">
                <div className="flex justify-center items-center lg:text-2xl mt-2">
                    <Stars filled={props.stars} />
                    
                    {/* {[0, 1, 2, 3, 4].map(n => (<Star filled={5-n} key={n} />))} */}
                </div>
                <div className="font-sans text-sm text-neutral-600 lg:text-md">
                    {props.numReviews} Reviews
                </div>
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
        numReviews={8}
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
    logoImage="/logos/Google-Review-Logo.png"
    href="https://www.google.com/search?sca_esv=4ad496d1768baf99&rlz=1C1CHBF_enUS1119US1119&biw=1920&bih=911&sxsrf=AHTn8zqz6F2eUyUPFwF6W7_kdMkpaL_-0Q:1742789023738&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzfXssLKe85tQQ5ggJX4N_6vHAq9zbUBAMMzTfx82FYCx8ZeVS1q1Zv0kGay4WDc8zTJRA4sdXZu8WxoDHb8zak-RgzsaiEqtAD2B69Vedre788q6iQ%3D%3D&q=Colony+Irrigation,+Inc.+Reviews&sa=X&ved=2ahUKEwjssraF66GMAxWYk4kEHVX1GPwQ0bkNegQILxAD&cshid=1742789037409224"
    numReviews={6}
    />
}

export function YelpRating() {
    return <Rating
    name="Yelp"
    stars={5}
    imageH={188}
    imageW={465}
    logoImage="/logos/Yelp-Logo.png"
    href="https://www.yelp.com/biz/colony-irrigation-canton"
    numReviews={2}
    />
}

export function NextdoorRating() {
    return <Link href="https://nextdoor.com/pages/colony-irrigation/" className="rounded-lg bg-neutral-50 shadow-sm shadow-neutral-600 h-42 w-40 p-2 flex flex-col m-4">
        <div className="items-center flex justify-center mt-1">
            <div className="flex items-center">
                <Image src="/logos/Nextdoor-Logo.png" width={497} height={187} alt="Nextdoor logo"
                    className="-my-2"
                />
            </div>
            {/* <span className="font-sans font-xl">{props.name}</span> */}
        </div>
        <div className="text-center flex flex-col pt-1">
            <div className="h-22">
                <Image  width={84} height={96} className="mx-auto h-full w-auto" alt="2924 Neighborhood Fave" src="https://d19rpgkrjeba2z.cloudfront.net/3e21e5e44684b1f4/static/images/awards/neighborhood_fave_2024.svg"></Image>
                {/* 66 <NextdoorFavorite /> */}
                {/* <span className="font-bold text-3xl lg:text-5xl">{props.stars}</span> / 5 */}
            </div>
            <div className="font-sans text-sm text-neutral-600 ">
                Neighborhood Fave
                {/* {props.numReviews} Reviews */}
            </div>
            {/* <div className="grow flex justify-center items-center lg:text-2xl">
                66 X <NextdoorFavorite />
               
            </div>  */}


        </div>
    </Link>
}