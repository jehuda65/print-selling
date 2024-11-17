import { type DataFunctionArgs, json, redirect } from "@remix-run/node";
import { Resend } from "resend";

require("dotenv").config();

const resend = new Resend(process.env.RESEND_API_KEY);

export const action = async ({ request }: DataFunctionArgs) => {
  const formData = await request.formData();

  const email = formData.get("email");
  const firstName = formData.get("first-name");
  const lastName = formData.get("last-name");
  const phone = formData.get("phone");
  const message = formData.get("message");

  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "yehudahdavidson@gmail.com",
      subject: "Print selling website contact",
      html: `${firstName} ${lastName} is interested in getting in touch!
      <br/> Call them on <strong>${phone}</strong> or send them an email at ${email}
      <br/><br/> <em>'${message}'</em>`,
    });

    return redirect;
  } catch (error) {
    return json({ error }, 400);
  }
};

// export const loader = async () => {};
