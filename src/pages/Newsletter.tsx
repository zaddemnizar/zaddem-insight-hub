import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Mail, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import newsletterImage from "@/assets/newsletter-illustration.jpg";

const Newsletter = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Merci pour votre inscription !",
      description: "Vous êtes désormais inscrit à la newsletter Zaddem Consulting.",
    });
    
    setIsSubmitted(true);
    setFormData({ firstName: "", email: "" });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <Mail size={64} className="mx-auto mb-6 text-accent" />
            <h1 className="font-display font-extrabold text-5xl md:text-6xl mb-6">
              Rejoignez notre communauté Excel & Power BI
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Recevez chaque semaine nos astuces, outils et conseils pour devenir l'expert Excel de votre entreprise
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            {/* Image */}
            <div className="order-2 lg:order-1 animate-fade-in">
              <img
                src={newsletterImage}
                alt="Newsletter Zaddem Consulting"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>

            {/* Form */}
            <div className="order-1 lg:order-2 animate-fade-in-up">
              {!isSubmitted ? (
                <Card className="p-8">
                  <h2 className="font-display font-bold text-3xl text-foreground mb-6">
                    Inscrivez-vous gratuitement
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        Prénom <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Votre prénom"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        className="w-full"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                    >
                      S'inscrire à la newsletter
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      En vous inscrivant, vous acceptez de recevoir nos emails hebdomadaires. 
                      Vous pouvez vous désabonner à tout moment.
                    </p>
                  </form>
                </Card>
              ) : (
                <Card className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-accent/10">
                      <CheckCircle2 size={48} className="text-accent" />
                    </div>
                  </div>
                  <h2 className="font-display font-bold text-3xl text-foreground mb-4">
                    Merci pour votre inscription !
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Vous êtes désormais inscrit à la newsletter Zaddem Consulting. 
                    Vérifiez votre boîte mail pour confirmer votre inscription.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    size="lg"
                  >
                    S'inscrire avec un autre email
                  </Button>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-4xl text-center text-foreground mb-12 animate-fade-in">
              Ce que vous recevrez
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
              {[
                {
                  title: "Astuces Excel avancées",
                  description: "Des formules et fonctionnalités Excel que 90% des utilisateurs ne connaissent pas",
                },
                {
                  title: "Tutoriels Power BI",
                  description: "Créez des tableaux de bord impressionnants pour vos analyses de données",
                },
                {
                  title: "Cas pratiques",
                  description: "Des exemples concrets tirés de situations professionnelles réelles",
                },
                {
                  title: "Ressources gratuites",
                  description: "Templates, macros et outils prêts à l'emploi pour gagner du temps",
                },
              ].map((benefit, index) => (
                <Card key={index} className="p-6 hover-lift border-border">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <Download size={48} className="mx-auto mb-6 text-accent" />
            <h2 className="font-display font-bold text-4xl mb-6">
              Bonus de bienvenue
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              En vous inscrivant, téléchargez immédiatement notre guide gratuit : 
              <span className="font-bold block mt-2">"50 Formules Excel Essentielles pour Professionnels"</span>
            </p>
            <div className="inline-block p-4 bg-primary-foreground/10 rounded-lg border border-primary-foreground/20">
              <p className="text-sm text-primary-foreground/80">
                Valeur : 29€ • Offert à tous nos nouveaux abonnés
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;