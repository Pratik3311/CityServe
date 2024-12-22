const express = require('express');
const nodemailer = require('nodemailer');
const connectDB = require('./config/db'); // Adjusted import path
const servicesRouter = require('./routes/routes'); // Adjusted import path
const cors = require("cors")
const app = express();

connectDB();
app.use(cors({origin: 'https://cityserve.onrender.com/'}));
app.use(express.json());

// Use the routes from the routes file
app.use('/api', servicesRouter);

// New route for form submission and email sending
app.post("/submit-form", async (req, res) => {
    console.log("Received form submission request:", req.body);
  const { name, email, address } = req.body;

  // Send email
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'pratikvithal-cmpn@atharvacoe.ac.in',
      pass: 'admin@123'
    }
  });

  const mailOptions = {
    from: 'pratikvithal-cmpn@atharvacoe.ac.in',
    to: email,
    subject: 'Form Submission Confirmation',
    text: `Hello ${name},\n\n ${address}\n\nThank you for Booking the Service.  For any queries, please contact +91 999999999.`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Service Booked!! Check Email For Confirmation');
    }
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
