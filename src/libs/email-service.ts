import nodemailer from "nodemailer";
import { log } from "winston";


export const generateEmailTemplate = (title: string, message: string, image?:string) => {
    return `
    <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; text-align: center;">
        <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #3498db;">${title}</h2>
            ${image ? `<img src="${image}" style="width: 100%; margin-top: 20px; border-radius: 5px;">` : ''}
            <p style="font-size: 16px; color: #333;">${message}</p>
            <a href="https://www.smartinno.net/" 
               style="display: inline-block; padding: 10px 20px; margin-top: 15px; background: #3498db; color: white; text-decoration: none; border-radius: 5px;">
               Visit Our Website
            </a>
        </div>
    </div>`;
};

const transporter = nodemailer.createTransport({
    service: 'mail.smartinno.net',
    port: 587, 
    secure: false,
    auth: {
        user:'info@smartinno.net',
        pass: 'LafFzcQ9I_YG',
    },
    tls: {
        rejectUnauthorized: false, // Allow self-signed certificates
    }
});

/**
 * Sends an email.
 * @param recipient - The recipient's email address.
 * @param subject - The email subject.
 * @param message - The email body text.
 */
export const sendEmail = async (recipient: string, subject: string, message: string, image?:string) => {
    const htmlContent = generateEmailTemplate(subject, message, image);

    console.log("Sending email to", recipient);
    console.log(Bun.env.EMAIL_SERVICE);
    
    
    try {
        const info = await transporter.sendMail({
            from: 'info@smartinno.net',
            to: recipient,
            subject,
            html: htmlContent,
        });

        return { success: true, messageId: info.messageId };
    } catch (error: any) {
        console.log("Error sending email:", error.message);
        
        return { success: false, error: error.message };
    }
};
