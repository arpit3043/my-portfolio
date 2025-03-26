require("dotenv").config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// ✅ Fix CORS issue: Allow requests from frontend (localhost:3000)
app.use(cors({
    origin: "http://localhost:3000", // Allow frontend requests
    methods: "GET,POST",
    allowedHeaders: "Content-Type"
}));

app.use(express.json());
app.use("/", router);

app.listen(5001, () => console.log("🚀 Server Running on Port 5001"));

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

if (!EMAIL_USER || !EMAIL_PASS) {
    console.error("❌ Missing EMAIL_USER or EMAIL_PASS in .env file");
    process.exit(1);
}

const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.error("❌ Email verification failed:", error);
    } else {
        console.log("✅ Ready to send emails");
    }
});

// ✅ Contact form endpoint
router.post("/send-email", async (req, res) => {
    try {
        console.log("📩 Received a contact form submission:", req.body);

        const { firstName, lastName, email, message, phone } = req.body;

        if (!email.includes("@")) {
            return res.status(400).json({ error: "Invalid email format" });
        }

        const fullName = `${firstName} ${lastName}`;
        const mailOptions = {
            from: `"${fullName}" <${EMAIL_USER}>`,
            to: EMAIL_USER,
            subject: "📩 Contact Form Submission - Portfolio",
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Message:</strong><br>${message}</p>
            `,
        };

        await contactEmail.sendMail(mailOptions);
        console.log("✅ Email sent successfully");
        res.json({ code: 200, status: "Message Sent Successfully" });

    } catch (error) {
        console.error("❌ Error sending email:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
