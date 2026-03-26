"use server";

import { headers } from "next/headers";
import { Resend } from "resend";

import { contactSchema } from "@/lib/schema";
import { checkRateLimit } from "@/lib/rateLimit";
import { emailTemplate } from "@/lib/emailTemplate";

import CustomerCandidates from "@/models/CustomerCandidates";
import { connectDB } from "@/lib/sequelize";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState: any, formData: FormData) {
  try {
    const headersList = await headers();

    const forwarded = headersList.get("x-forwarded-for");
    const ip =
      forwarded?.split(",")[0] ||
      headersList.get("x-real-ip") ||
      "anonymous";

    // ========================
    // FORMAT FORM DATA
    // ========================
    const data = {
      company_name: String(formData.get("company_name") || ""),
      contact_name: String(formData.get("contact_name") || ""),
      contact_number: String(formData.get("contact_number") || ""),
      suburb: String(formData.get("suburb") || ""),
      street_address: String(formData.get("street_address") || ""),
      email: String(formData.get("email") || ""),
      enquiry: String(formData.get("enquiry") || ""),
    };

    // ========================
    // VALIDATION
    // ========================
    const parsed = contactSchema.safeParse(data);

    if (!parsed.success) {
      return {
        success: false,
        type: "validation",
        errors: parsed.error.flatten().fieldErrors,
        timestamp: Date.now(),
      };
    }

    // ========================
    // RATE LIMIT
    // ========================
    const allowed = await checkRateLimit(ip);

    if (!allowed) {
      return {
        success: false,
        message: "Too many requests",
        type: "rate_limit",
        timestamp: Date.now(),
      };
    }

    // ========================
    // SEND EMAIL (🔥 PENTING: DULUAN)
    // ========================
    // const { data: emailResult, error } = await resend.emails.send({
    //   // from: "Contact <onboarding@resend.dev>",
    //   // to: ["trinovainovasi@gmail.com"],
    //   // from: "Freeze Logistics <no-reply@freezelogistik.com>",
    // from: "Freeze Logistics <no-reply@send.freezelogistics.com.au>",
    //   to: ["adiprabowo194@gmail.com"],
    //   subject: "New Contact Message",
    //   html: emailTemplate(parsed.data),
    // });
    const { data: emailResult, error } = await resend.emails.send({
      from: "Freeze Logistics <no-reply@freezelogistics.com.au>",
      to: ["admin@freezelogistics.com.au"],
      // to: ["adiprabowo194@gmail.com"],
      subject: "New Contact Message",
      html: emailTemplate(parsed.data),
    });

    if (error) {
      console.error("❌ Email error:", error);

      return {
        success: false,
        message: "Failed to send email",
        type: "email",
        timestamp: Date.now(),
      };
    }

    console.log("✅ Email sent:", emailResult);

    // ========================
    // CONNECT DB
    // ========================
    await connectDB();

    // ========================
    // INSERT DB (🔥 HANYA JIKA EMAIL SUKSES)
    // ========================
    const saved = await CustomerCandidates.create({
      company_name: parsed.data.company_name,
      contact_name: parsed.data.contact_name,
      contact_no: parsed.data.contact_number,
      suburb: parsed.data.suburb,
      street_address: parsed.data.street_address,
      email: parsed.data.email,
      enquiry: parsed.data.enquiry,
      status: 1,
      input_type: 1,
    });

    console.log("✅ Data saved:", saved.get("id"));

    return {
      success: true,
      message: "Message sent successfully",
      timestamp: Date.now(),
    };

  } catch (error) {
    console.error("❌ Server error:", error);

    return {
      success: false,
      message: "Internal server error",
      type: "server",
      timestamp: Date.now(),
    };
  }
}