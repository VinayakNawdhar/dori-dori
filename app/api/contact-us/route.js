import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(req, res) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "vinayaknawdhar003@gmail.com",
      pass: process.env.EMAILKEY,
    },
  });
  const request = await req.json();
  try {
    await transporter.sendMail({
      from: "vinayaknawdhar003@gmail.com",
      to: "naman@doridori.in",
      subject: "DoriDori Contact Us",
      text: `Name : ${request.name} \n Email: ${request.email} \n Message : ${request.message} `,
    });
    return NextResponse.json({ message: "success" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "failure" });
  }
}
