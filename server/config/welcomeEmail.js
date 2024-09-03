import transporter from "./mailConfig.js";
const WelcomeEmail = async(name,email,password)=>{
    const siteUrl = process.env.FRONTEND_HOST;
    const info = await transporter.sendMail({
        from: '"Stylvix 👻"', // sender address
        to: email, // list of receivers
        subject: "Welcome to StylVix - Here Are Your Login Details ✔", // Subject line
        text: "Welcome to Stylvix! We're thrilled to have you on board and excited to help you get started", // plain text body
        html: `
        <p>Dear <strong>${name}</strong>,</p>

        <p>Welcome to <strong>Stylvix</strong>! We're thrilled to have you on board and excited to help you get started.</p>

        <p>Here are your login details:</p>
        <ul>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Password:</strong> ${password}</li>
        </ul>

        <p>You can log in to your account anytime by visiting our website at <a href="${process.env.FRONTEND_HOST}">${process.env.FRONTEND_HOST}</a>.</p>

       

        <p>Thank you for choosing <strong>Stylvix</strong>!</p>

        <p>Best regards,<br/>
        Stylvix Team<br/>
        <a href="${process.env.FRONTEND_HOST}">${process.env.FRONTEND_HOST}</a></p>
    `, // html body
      });
}

export default WelcomeEmail;