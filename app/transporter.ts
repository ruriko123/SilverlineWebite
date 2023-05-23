import nodemailer from 'nodemailer';




const createTransporter = async() => {
    let port:number = parseInt(process.env.smtp_port||"587") || 587;
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: port  ,
        secure: false,
        auth: {
            user: process.env.sender,
            pass: process.env.sender_pass
        }
    });
    return transporter;
};


export {createTransporter};