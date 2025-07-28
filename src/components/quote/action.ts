"use server";
import { createTransport } from "nodemailer";
import { jobsToTitles } from "./JobTitles";
import Mail from "nodemailer/lib/mailer";

const transport = createTransport({
    service: "gmail",
    auth: {
        user: process.env.INTERNAL_EMAIL_ADDRESS,
        pass: process.env.INTERNAL_EMAIL_PASSWORD,
    },
    secure: true,
});

function sendEmail(mail: Mail.Options) {
    return new Promise((resolve, reject) => {
        transport.sendMail(mail, (err, info) => {
            if (err) {
                reject(err);
            } else {
                resolve(info);
            }
        });
    });
}

interface FormState {
    errorMessage?: string;
    error?: any;
    successMessage?: string;
}
export default async function submit(formState: FormState, formData: FormData): Promise<FormState> {
    // const contact = formData.get("contactInfo");
    const email = formData.get("emailAddress");
    const phoneNumber = formData.get("phoneNumber");
    const name = formData.get("customerName");
    const extraMessage = formData.get("message");
    const address = formData.get("address");
    const jobKind = formData.get("jobKind")
    //@ts-expect-error
    const jobKindString = jobsToTitles[jobKind] || "Unknown";
    const internalEmailBody =
        `Customer name: ${name}
Email: ${email}
Phone number: ${phoneNumber}
Home address: ${address}
Requested quote for: ${jobKindString} (${jobKind})
${extraMessage && `Note:\n${extraMessage}`}

Request processed at ${new Date().toLocaleString("en-US", { timeZone: "EST" })}`;

    const customerEmailBody = `Thank you for your quote request, ${name}!

We will get back to you shortly with more information. If you have any questions or concerns, feel free to reach out:
 
 Email: anthony@colonyirrgation.com
 Phone: (734) 398-5837


Best regards,
Colony Irrigation


This is an automated message, please do not reply to this email.`;

    try {
        const res1 = await transport.sendMail({
            from: process.env.INTERNAL_EMAIL_ADDRESS,
            to: process.env.TARGET_INBOX_ADDRESS,
            subject: `Quote Request - ${name}`,
            text: internalEmailBody
        });
        const res2 = await transport.sendMail({
            from: process.env.INTERNAL_EMAIL_ADDRESS,
            to: email as string,
            subject: `Quote Request Received - ${name}`,
            text: customerEmailBody
        });
        console.log("Email sent successfully", res1, res2);
    } catch (err) {
        return {
            errorMessage: "Error sending email. Please contact us directly at 734-398-5837"
        }
    }

    return {
        successMessage: "Quote request sent successfully! We will get back to you shortly."
    }
}