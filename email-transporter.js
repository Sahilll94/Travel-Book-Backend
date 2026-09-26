const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const requiredSettings = [
    "EMAIL_USER",
    "EMAIL_PASSWORD",
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_SECURE"
];

const missingSettings = requiredSettings.filter((setting) => !process.env[setting]);

if (missingSettings.length > 0) {
    throw new Error(`Missing email configuration: ${missingSettings.join(", ")}`);
}

const smtpPort = Number(process.env.SMTP_PORT);
if (!Number.isInteger(smtpPort) || smtpPort <= 0) {
    throw new Error("SMTP_PORT must be a positive integer");
}

const secureValue = process.env.SMTP_SECURE.toLowerCase();
if (secureValue !== "true" && secureValue !== "false") {
    throw new Error("SMTP_SECURE must be either true or false");
}

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: smtpPort,
    secure: secureValue === "true",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

module.exports = transporter;
