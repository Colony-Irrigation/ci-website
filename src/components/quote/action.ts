"use server";
import {createTransport} from "nodemailer";
import { jobsToTitles } from "./JobTitles";

const transport = createTransport({
    service: "gmail",
    auth: {
        user: process.env.INTERNAL_EMAIL_ADDRESS,
        pass: process.env.INTERNAL_EMAIL_PASSWORD,

    }
});


export default async function submit(formData: FormData) {
    // const contact = formData.get("contactInfo");
    const email = formData.get("emailAddress");
    const phoneNumber = formData.get("phoneNumber");
    const name = formData.get("customerName");
    const extraMessage = formData.get("message");
    const address = formData.get("address");
    const jobKind = formData.get("jobKind")
    //@ts-expect-error
    const jobKindString = jobsToTitles[jobKind] || "Unknown";
    await new Promise((res, rej) => {
        const emailBody =
`Customer name: ${name}
Email: ${email}
Phone number: ${phoneNumber}
Home address: ${address}
Requested quote for: ${jobKindString} (${jobKind})
${extraMessage && `Note:\n${extraMessage}`}

Request processed at ${new Date().toLocaleString("en-US", {timeZone: "EST"})}`; 

        transport.sendMail({
            from: process.env.INTERNAL_EMAIL_ADDRESS,
            to:  process.env.TARGET_INBOX_ADDRESS,
            subject: `Quote Request - ${name}`,
            text: emailBody 
        }, (err, info) => {
            if(err) rej(err)
            else res(info)
        })

        transport.sendMail({
            from: process.env.INTERNAL_EMAIL_ADDRESS,
            to: email as string,
            subject: `Quote Request Received - ${name}`,
            text: 
`Thank you for your quote request, ${name}!

We will get back to you shortly with more information. If you have any questions or concerns, feel free to reach out:
 
 Email: anthony@colonyirrgation.com
 Phone: (734) 398-5837


Best regards,
Colony Irrigation


This is an automated message, please do not reply to this email.`
        }, (err, info) => {
            if(err) rej(err)
            else res(info)
        })


    }).catch((e) => {
        console.error("Error sending email", e);
    })
}