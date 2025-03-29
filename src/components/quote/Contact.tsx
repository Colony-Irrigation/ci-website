"use client"
import { useState } from "react";
import { Required, TextInput } from "./Form";

export default function ContactInput() {
    const [isEmail, setIsEmail] = useState(true)

    return <>
        <label htmlFor="contact-info" className="font-bold ml-4 mt-2">{isEmail ? "Email Address" : "Phone Number"}<Required /></label>
        <TextInput id="contact-info" name="contactInfo" type={isEmail ? "email" : "tel" } placeholder={isEmail ? "example@gmail.com" : "123-456-7890"}/>
        <div className="text-center text-neutral-400 underline text-sm underline-offset-2 cursor-pointer">
            <a onClick={() => setIsEmail(!isEmail)}>
                Use {isEmail ? "phone number" : "email address"} instead
            </a>
        </div>
    </>
}