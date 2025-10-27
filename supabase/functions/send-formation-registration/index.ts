import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@3.2.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface FormationRegistrationRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
  formationTitle: string;
  formationDate: string;
  formationPrice: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { 
      name, 
      email, 
      phone, 
      message, 
      formationTitle, 
      formationDate, 
      formationPrice 
    }: FormationRegistrationRequest = await req.json();

    console.log("Processing formation registration:", { name, email, formationTitle });

    // Send confirmation email to registrant
    await resend.emails.send({
      from: "Zaddem Consulting <onboarding@resend.dev>",
      to: [email],
      subject: `Confirmation d'inscription - ${formationTitle}`,
      html: `
        <h1>Merci pour votre inscription !</h1>
        <p>Bonjour ${name},</p>
        <p>Nous avons bien reçu votre demande d'inscription pour la formation :</p>
        <h2>${formationTitle}</h2>
        <p><strong>Date:</strong> ${formationDate}</p>
        <p><strong>Prix:</strong> ${formationPrice}</p>
        <br>
        <p>Nous vous contacterons dans les plus brefs délais pour confirmer votre inscription et vous fournir tous les détails nécessaires.</p>
        <br>
        <p>Cordialement,</p>
        <p><strong>Nizar Zaddem</strong><br>Zaddem Consulting</p>
      `,
    });

    // Send notification to Zaddem Consulting
    await resend.emails.send({
      from: "Zaddem Consulting <onboarding@resend.dev>",
      to: ["contact@zaddem-consulting.com"],
      subject: `Nouvelle inscription - ${formationTitle}`,
      html: `
        <h2>Nouvelle inscription à une formation</h2>
        <h3>Formation: ${formationTitle}</h3>
        <p><strong>Date de la formation:</strong> ${formationDate}</p>
        <p><strong>Prix:</strong> ${formationPrice}</p>
        <hr>
        <p><strong>Nom et prénom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "Aucun message"}</p>
      `,
    });

    console.log("Formation registration emails sent successfully");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-formation-registration function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
