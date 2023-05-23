import { createTransporter } from "@/app/transporter";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const sendMail = async (
  contactFormattedTime: any,
  contactDate: any,
  Phone: any,
  email: any,
  LastName: any,
  FirstName: any
) => {
  // console.log("Mail sent");
  // console.log(
  //   contactFormattedTime,
  //   contactTime,
  //   contactDate,
  //   Phone,
  //   email,
  //   LastName,
  //   FirstName
  // );
  let currentDateTime = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Kathmandu" })
  );
  let text = `email: ${email}\nFirstName: ${FirstName}\nLastName: ${LastName}\nPhone: ${Phone}\nPreferred Contact Datetime: ${contactDate} ${contactFormattedTime}\n\n\nThis email was generated on ${currentDateTime}.`;
  let transporter = await createTransporter();
  var mailOptions = {
    from: process.env.sender,
    to:  process.env.receivermail,
    subject: `Silverline website`,
    text: text,
  };
  transporter.sendMail(mailOptions, async function (error, info) {
    if (error) {
      console.log(error)
      transporter.close();
      return;
    }
    transporter.close();
    return;
  });
};

const verifyRecaptcha = async (token: string) => {
  const secretKey = process.env.RECAPTCHA_SECRET;
  var verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
  return await axios.post(verificationUrl);
};

export async function POST(req: Request, res: NextApiResponse<any>) {
  try {
    let reqbody = await req.json();

    const token = await reqbody?.gRecaptchaToken;
    let {
      contactFormattedTime,
      contactTime,
      contactDate,
      Phone,
      email,
      LastName,
      FirstName,
    } = reqbody;

    if (!token) {
      return NextResponse.json({
        status: "error",
        message: "No token provided!",
      });
    }

    const response = await verifyRecaptcha(token);

    if (response.data.success && response.data.score >= 0.5) {
      try {
        sendMail(
          contactFormattedTime,
          contactDate,
          Phone,
          email,
          LastName,
          FirstName
        );
      } catch (error) {
        return NextResponse.json({
          status: "error",
          message: "Error while sending mail!",
        });
      }

      return NextResponse.json({
        status: "success",
      });
    } else {
      return NextResponse.json({
        status: "error",
        message: "Something went wrong, please try again!!!",
      });
    }
  } catch (error) {
    console.log("internal error", error);
    NextResponse.json({
      status: "error",
      message: "Something went wrong, please try again!!!",
    });
  }
}
