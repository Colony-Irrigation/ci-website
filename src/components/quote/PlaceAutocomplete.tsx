"use client";
import { useEffect, useRef, useState } from "react";
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
  
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
console.log(API_KEY)

function PlaceAutocompleteInner({onPlaceSelect}:PlaceAutocompleteProps ) {
    onPlaceSelect ??= r => console.log(r)
    const [placeAutocomplete, setPlaceAutocomplete] =
        useState<google.maps.places.Autocomplete | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const places = useMapsLibrary('places');

    useEffect(() => {
        if (!places || !inputRef.current) return;

        const options = {
            fields: ['name', 'formatted_address']
        };



        setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));
    }, [places]);

    useEffect(() => {
        if (!placeAutocomplete) return;

        placeAutocomplete.addListener('place_changed', () => {
            onPlaceSelect(placeAutocomplete.getPlace());
        });
    }, [onPlaceSelect, placeAutocomplete]);
    return (
        <>
            <TextInput ref={inputRef} id="location" name="address" />
        </>
       
    );
}

export default function PlaceAutocomplete() {
    return <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
        <PlaceAutocompleteInner />
    </APIProvider>

}