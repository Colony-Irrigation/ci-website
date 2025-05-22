"use client";
import "./PlaceAutocompleteStyles.css";
import { useEffect, useMemo, useRef, useState } from "react";
import {
    APIProvider,
    ControlPosition,
    MapControl,
    AdvancedMarker,
    Map,
    useMap,
    useMapsLibrary,
    useAdvancedMarkerRef,
    AdvancedMarkerRef
} from '@vis.gl/react-google-maps';
import { TextInput } from "./Form";

interface PlaceAutocompleteProps {
    onPlaceSelect?: (place: google.maps.places.PlaceResult | null) => void;
  }
  
//   [".dropdown>ul>li{-webkit-box-align:center;-moz-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;color:#444746;font-size:12px;height:48px}.dropdown>ul>li,.place-autocomplete-element-row{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.place-autocomplete-element-row{-webkit-box-align:start;-moz-box-align:start;-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start;width:100%}.place-autocomplete-element-row .place-autocomplete-element-place-icon{height:20px;margin:6px 8px;width:20px}.place-autocomplete-element-row .place-autocomplete-element-place-icon-default-pin{padding-top:2px}.place-autocomplete-element-row .place-autocomplete-element-text-div{-webkit-box-align:center;-moz-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:inline-block;line-height:14px;overflow:hidden;padding:6px 16px 6px 0;text-overflow:ellipsis;white-space:nowrap}.place-autocomplete-element-row .place-autocomplete-element-text-div .place-autocomplete-element-place-name{-ms-flex-negative:0;color:#202124;display:block;-webkit-flex-shrink:0;flex-shrink:0;font-family:Google Sans Text,Google Sans,Roboto,Arial,sans-serif;font-size:14px;font-weight:500;line-height:20px;overflow:hidden;text-overflow:ellipsis}.place-autocomplete-element-row .place-autocomplete-element-text-div .place-autocomplete-element-place-details{color:#5f6368;font-family:Google Sans Text,Google Sans,Roboto,Arial,sans-serif;font-weight:400;line-height:16px}.place-autocomplete-element-row .place-autocomplete-element-text-div .place-autocomplete-element-place-result--matched{color:#5f6368}li[aria-selected=true] .place-autocomplete-element-place-icon-marker{background-position:-18px -161px}.full-window-autocomplete-dialog[open] .place-autocomplete-element-place-icon{margin:6px 14px}"]);

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
function PlaceAutocompleteInner({onPlaceSelect}:PlaceAutocompleteProps) {
    const places = useMapsLibrary("places");
    const ref = useRef<HTMLDivElement>(null);

    // This is ugly, but needed to pierce the shadow DOM and add classes to the input element

    //@ts-ignore
    const defaultElement = useMemo(() => places && new places.PlaceAutocompleteElement(), [places]);
    useEffect(() => {
        if(!places) return;
        if(!ref.current) return;
        if(!defaultElement) return;

        console.log(defaultElement);

        const input: HTMLInputElement = defaultElement.Eg;
        input.className = "peer h-10 bg-black/10 rounded-lg focus:bg-black/20 focus:outline-1 outline-neutral-600 w-full p-2 "
        input.placeholder = "Enter a location"
        input.id ="location";
        input.name = "address"
        const dropdown: HTMLDivElement = defaultElement.Jg;
        const predictionsAnchor: HTMLDivElement = document.createElement("div");
        predictionsAnchor.className="predictions-anchor";
        predictionsAnchor.append(dropdown)
   
        ref.current.append(
            input,
            predictionsAnchor
        )

    }, [places, ref])

    return <div className="w-full" id="google-maps-autocomplete"> 
        <div className="widget-container" ref={ref}></div>
    </div>
}
function PlaceAutocompleteInnerOld({onPlaceSelect}:PlaceAutocompleteProps ) {
    const [placeAutocomplete, setPlaceAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const places = useMapsLibrary("places");

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const options = {
      fields: ["geometry", "name", "formatted_address"],
    };

    setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));
  }, [places]);

  useEffect(() => {
    if (!placeAutocomplete) return;

    placeAutocomplete.addListener("place_changed", () => {
      console.log(placeAutocomplete.getPlace());
    });
  }, [placeAutocomplete]);
  return <TextInput ref={inputRef} placeholder="Search address" />;
}

export default function PlaceAutocomplete() {
    return <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
        <PlaceAutocompleteInner />
    </APIProvider>

}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'gmp-place-autocomplete': React.DetailedHTMLProps<
        React.HTMLAttributes<google.maps.places.PlaceAutocompleteElement>,
        google.maps.places.PlaceAutocompleteElement
      >;
    }
  }
}

// This is ugly, but needed to pierce the shadow DOM and add classes to the input element
//     useEffect(() => {
    //     const old = Element.prototype.attachShadow;

    //     Element.prototype.attachShadow = function (init) {
    //         let shadowRoot;
    //         if (this.tagName.toUpperCase() === 'GMP-PLACE-AUTOCOMPLETE') {
    //             shadowRoot = old.call(this, {...init, mode: 'open'});
    //         } else {
    //             shadowRoot = old.call(this, init);
    //         }

    //         return shadowRoot;   
    //     }

    //     return () => void (Element.prototype.attachShadow = old);
    // }, [])