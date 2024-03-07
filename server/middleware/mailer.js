import dotenv from "dotenv";
dotenv.config()
import nodemailer from "nodemailer"
import jwt from "jsonwebtoken";


export default function main(path, user){
    const token = jwt.sign({email : user.email,  fullName: user.fullName}, process.env.JWT_SECRET)
    let subject = ''
    let html = ''
    if (path == 'emailVerification'){
        subject = "Verification Account",
        html =  `
        <div  border="0" width="100%" style="margin: auto;">
            <div style="padding: 3em 0 2em 0; ">
                <div style="padding: 0 2.5em; text-align: center; width: 300px; max-width: 600px; height: auto; margin: auto; display: block;">
                    <h2>Welcome To RentX  <span style='font-weight: bold;'>${user.fullName}</span> </h2>
                    <p>Please click on the Button below to verify your email address. This is required to confirm ownership of the email address.</p>
                    <p><a href="http://localhost:${process.env.PORT}/auth/${path}/${token}" style="height: 60px; background-color: #199319; color: white; padding: 15px 25px; text-decoration: none; border-radius: 8px; margin-bottom: 10px; margin-top: 10px;">Activate</a></p>
                    <h4>Kind regards</h4>
                    <h3>ProxyElite Team.</h3>
                </div>
            </div>
        </div>`
    }

    if (path == 'passwordVerificationLink'){
        subject = "forgot Password Account",
        html =  `
        <div  border="0" width="100%" style="margin: auto;">
//             <div style="padding: 3em 0 2em 0; ">
//                 <div style="padding: 0 2.5em; text-align: center; width: 300px; max-width: 600px; height: auto; margin: auto; display: block;">
//                     <h2>Welcome To RentX  <span style='font-weight: bold;'>${user.email}</span> </h2>
//                     <p>Please click on the Button below to verify your email address. This is required to confirm ownership of the email address.</p>
//                     <p><a href="http://localhost:${process.env.PORT}/auth/${path}/${token}" style="height: 60px; background-color: #199319; color: white; padding: 15px 25px; text-decoration: none; border-radius: 8px; margin-bottom: 10px; margin-top: 10px;">Activate</a></p>
//                     <h4>Kind regards</h4>
//                     <h3>khissya.</h3>
//                 </div>
//             </div>
//         </div>`
    }
    let transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })


    let info ={
        from : "RentX <mooka3084@gmail.com>",
        to : user.email,
        subject: subject,
        html: html
    }
    transport.sendMail(info);

    console.log("Message sent");
}

// module.exports= main;