// "use client"
// import { useState } from "react";
import { Required, TextInput } from "./Form";

export default function ContactInput() {
    // const [isEmail, setIsEmail] = useState(true)

    return <>
        <label htmlFor="email-address" className="font-bold ml-4 mt-2">{"Email Address"}<Required /></label>
        <TextInput id="email-address" name="emailAddress" type={"email" } placeholder={ "example@gmail.com" }/>
        <label htmlFor="phone-number" className="font-bold ml-4 mt-2">{ "Phone Number"}<Required /></label>
        <TextInput id="phone-number" name="phoneNumber" type={ "tel" } placeholder={"123-456-7890"}/>

    </>
}