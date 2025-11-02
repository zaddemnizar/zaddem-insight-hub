import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const newsletterPopupSchema = z.object({
  email: z.string().trim().email("Email invalide").max(255, "L'email ne peut pas dépasser 255 caractères"),
});

const NewsletterPopup = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate email
      newsletterPopupSchema.parse({ email });
      
      toast({
        title: "Merci pour votre inscription !",
        description: "Vous êtes désormais inscrit à la newsletter Zaddem Consulting.",
      });
      
      setIsOpen(false);
      setEmail("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erreur de validation",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in">
      <div className="relative bg-background rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 animate-scale-in">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Fermer"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-6">
          <h3 className="font-display font-bold text-2xl text-foreground mb-2">
            💌 Rejoignez notre newsletter
          </h3>
          <p className="text-muted-foreground">
            Recevez chaque semaine nos astuces Excel et Power BI.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Votre adresse e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full"
          />
          <Button type="submit" size="lg" className="w-full font-semibold">
            Je m'abonne
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterPopup;
