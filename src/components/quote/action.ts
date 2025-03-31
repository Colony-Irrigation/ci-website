"use server";
import {createTransport} from "nodemailer";

console.log(process.env.INTERNAL_EMAIL_ADDRESS, process.env.INTERNAL_EMAIL_PASSWORD)
const transport = createTransport({
    service: "gmail",
    auth: {
        user: process.env.INTERNAL_EMAIL_ADDRESS,
        pass: process.env.INTERNAL_EMAIL_PASSWORD,

    }
});


export default async function submit(formData: FormData) {
    const contact = formData.get("contactInfo");
    const name = formData.get("customerName");
    const extraMessage = formData.get("message");
    const address = formData.get("address");
    const jobKind = formData.get("jobKind")
    await new Promise((res, rej) => {
        const emailBody =
`Customer Name: ${name}
Contact: ${contact}
Home Address: ${address}
Requested Quote For: ${jobKind}
${extraMessage && `Note:\n${extraMessage}`}

Request processed at ${new Date().toLocaleString()}`; 

        transport.sendMail({
            from: process.env.INTERNAL_EMAIL_ADDRESS,
            to: "edwardcbadel@gmail.com",
            subject: `Quote Request - ${name}`,
            text: emailBody 
        }, (err, info) => {
            if(err) rej(err)
            else res(info)
        })
    });
}