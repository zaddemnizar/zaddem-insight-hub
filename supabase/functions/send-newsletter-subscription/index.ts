import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@3.2.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface NewsletterRequest {
  firstName: string;
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, email }: NewsletterRequest = await req.json();

    console.log("Processing newsletter subscription:", { firstName, email });

    // Send confirmation email to subscriber
    await resend.emails.send({
      from: "Zaddem Consulting <onboarding@resend.dev>",
      to: [email],
      subject: "Bienvenue dans la communauté Zaddem Consulting !",
      html: `
        <h1>Merci ${firstName} !</h1>
        <p>Vous êtes maintenant inscrit à notre newsletter.</p>
        <p>Vous recevrez chaque semaine nos astuces Excel et Power BI, ainsi que nos actualités.</p>
        <br>
        <p>À très bientôt,</p>
        <p><strong>L'équipe Zaddem Consulting</strong></p>
      `,
    });

    // Send notification to Zaddem Consulting
    await resend.emails.send({
      from: "Zaddem Consulting <onboarding@resend.dev>",
      to: ["contact@zaddem-consulting.com"],
      subject: "Nouvelle inscription à la newsletter",
      html: `
        <h2>Nouvelle inscription</h2>
        <p><strong>Prénom:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    console.log("Newsletter subscription emails sent successfully");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-newsletter-subscription function:", error);
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
